import { ListGroup, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';




function TodoItem({ todo, setAsDone }) {
  const navigate = useNavigate();
  //modal de feito! 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ListGroup.Item
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
       <div  
          onClick={() => navigate(`/${todo.id}`)} >
          {todo.title}
        </div>
      <div >
        <a href={`/${todo.id}`}>
            Ver
        </a>
        {'  '}
        <a href={`update/${todo.id}`}>
            Editar
        </a>
        {'  '}
        <Card.Link  onClick={handleShow}>
          Concluir
        </Card.Link>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tarefa Concluída</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ao marcar a opção SIM você não verá mais essa tarefa. Você tem certeza disso?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="primary" href="/" onClick={(e) => {
          setAsDone(e, todo.id)
          navigate("/")
        }} > Sim </Button>
        </Modal.Footer>
      </Modal>
      </div>
      
    </ListGroup.Item>
  );
}

export default TodoItem;

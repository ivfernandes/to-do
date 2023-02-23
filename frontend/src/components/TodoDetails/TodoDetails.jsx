import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function TodoDetails() {
  //modal de excluir 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [todo, setTodo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // Pega os detalhes
    useEffect(() => {
      fetch(`http://localhost:3000/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTodo(data);
        })
    }, [id]);

    const setAsDone = () => {
        fetch(`http://localhost:3000/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        })
            .then((resp) => resp.json())
            .then(navigate('/'));
    };

    const deleteToDo = () => {
        fetch(`http://localhost:3000/${id}`, {
            method: "DELETE"
        })
            .then(navigate('/'))
            .catch((error) => console.log(error));
    };
  
    return (
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{todo.createdAt}</Card.Subtitle>
          <Card.Text>
            {todo.description}
          </Card.Text>
          <div
           style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
             <Card.Link href="#" onClick={setAsDone}> Voltar </Card.Link>
             
            <Button onClick={handleShow} variant="danger"> Excluir </Button>
          </div>
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Excluir Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você tem certeza que deseja excluir essa tarefa?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="primary" onClick={deleteToDo} > Excluir </Button>
        </Modal.Footer>
      </Modal>
        </Card.Body>
      </Card>
    );
  }
  
  export default TodoDetails;
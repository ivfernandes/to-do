import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from 'react-bootstrap';

function TodoDetails() {
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
      <Card style={{ width: '18rem' }}>
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
             <Card.Link href="#" onClick={setAsDone}> OK </Card.Link>
            <Button onClick={deleteToDo} variant="danger"> Deletar </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  
  export default TodoDetails;
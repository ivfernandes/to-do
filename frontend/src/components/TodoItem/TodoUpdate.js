import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate, Link } from 'react-router-dom';

function TodoUpdate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, [id]);

  const handleSubmit = (e) => {
    setIsPending(true);

    fetch(`http://localhost:3000/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
      .then((response) => response.json())
      .then((json) => {
        setIsUpdated(!isUpdated);
        setIsPending(false);
        console.log((json))
        navigate("/");
      })
  }

  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Insira um novo título" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label> Descrição </Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Coloque uma nova descrição para a tarefa" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-between">
        <Card.Link href="/">Voltar </Card.Link>

        {isPending
          ? <Button disabled onClick={handleSubmit} variant="primary">Atualizando dados...</Button>
          : <Button onClick={handleSubmit} variant="primary">Salvar</Button>
        }
      </div>
    </div>
  );
}

export default TodoUpdate;
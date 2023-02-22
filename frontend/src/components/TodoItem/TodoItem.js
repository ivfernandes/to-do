import { ListGroup, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TodoUpdate from "../TodoItem/TodoUpdate";


function TodoItem({ todo, setAsDone }) {
  const navigate = useNavigate();
  

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
        <a href={`update/${todo.id}`}>
            Editar
        </a>
        <a href="/" onClick={(e) => {
          setAsDone(e, todo.id)
          navigate("/")
        }}>
          Done
        </a>
      </div>
      
    </ListGroup.Item>
  );
}

export default TodoItem;

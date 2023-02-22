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
       // justifyContent: "space-between",
      }}
    >
      
      <div className="d-flex">
        <div className="p-2 flex-grow-1" 
          onClick={() => navigate(`/${todo.id}`)} >
          {todo.title}
        </div>
        <a className="p-2" href={`update/${todo.id}`}>
            Editar
        </a>
        <a className="p-2" href="/" onClick={(e) => {
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

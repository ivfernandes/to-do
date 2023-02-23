import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoCreate from "./components/TodoCreate/TodoCreate";
import TodoDetails from "./components/TodoDetails/TodoDetails";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoUpdate from "./components/TodoItem/TodoUpdate";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/create" element={<TodoCreate />}></Route>
          <Route path="/update/:id" element={<TodoUpdate />}></Route>
          <Route path="/:id" element={<TodoDetails />}></Route>
        </Routes>

      </Container>
    </BrowserRouter>
  );
}

export default App;

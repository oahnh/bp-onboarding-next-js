import { useState, useEffect } from "react";
import styles from "./todolist.module.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Function to add todo to our list
   */
  const addTodo = () => {
    // TODO: implement functionality to add a new todo
  };

  /**
   * Function to delete a todo from our list
   */
  const deleteTodo = (id: number) => {
    //TODO: Implement functionality to delete a todo
  };

  return (
    <div className={styles.todoContainer}>
      <h1>Todo List</h1>
      <div className={styles.addTodo}>
        <input
          type="text"
          value={"change me!"}
          placeholder="Enter a new todo"
        />
        <button>Add Todo</button>
      </div>
      <div className={styles.todos}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

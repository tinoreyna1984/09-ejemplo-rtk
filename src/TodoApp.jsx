import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./slices/todos/todosApi";

export const TodoApp = () => {
  //const algo = useGetTodosQuery();
  //console.log(algo)
  //const {data: todos = [], isLoading} = algo;

  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  return (
    <>
      <h1>Todos App - RTK Query</h1>
      <hr />
      {isLoading && <h4>Loading...</h4>}
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) =>
        (
            <li key={todo.id}>
                <strong>{todo.completed ? 'DONE' : "Pending"}</strong>:{" "}
                {todo.title}
            </li>
        )
        )}
    </ul> */}
      <button onClick={prevTodo}>Prev. todo</button>
      <button onClick={nextTodo}>Next todo</button>
    </>
  );
};

import React from "react";
import { Todo } from "../Models/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: "ir ao supermercado", done: true },
    { id: 2, title: "Ir a academia", done: false },
  ];

  return (
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;

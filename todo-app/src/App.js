import React, { useReducer, useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로 추가
      return todos.concat(action.todo);
    case 'REMOVE': //제거
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': //토클
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  //렌더링 되는 정보가 아니기 때문에 useRef 사용
  const nextId = useRef(2501);

  //삽입 기능
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos(todos.concat(todo));
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; //nextId에 1씩 더하기
  }, []);

  //삭제 기능
  const onRemove = useCallback((id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  //수정 기능
  const onToggle = useCallback((id) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

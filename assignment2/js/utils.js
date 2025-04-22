import { todos } from "./mock.js";
import { Todo } from "./types.js";

/**
 * todo 목록을 localStorage에 저장합니다.
 *
 * @param {Array<Todo>} todoList - todo 객체 배열
 */
export function setTodo(todoList) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

/**
 * localStorage에서 todo 목록을 가져옵니다.
 * 저장된 todo 목록이 없을 경우 mock 데이터를 저장하고 반환합니다.
 *
 * @returns {Array<Todo>} 저장된 todo 객체 배열
 */
export function getTodo() {
  const todoList = localStorage.getItem("todoList");

  if (todoList) {
    return JSON.parse(todoList);
  } else {
    setTodo(todos);
    return [...todos];
  }
}

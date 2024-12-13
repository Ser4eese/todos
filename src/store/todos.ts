import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type ToDo = {
	id: number;
	text: string;
	done: boolean;
};
type TodoStoreType = {
	todos: Array<ToDo>;
	addTodo: (todo: ToDo) => void;
	deleteTodo: (todoId: number) => void;
	createTodo: (text: string) => ToDo;
	changeDone: (todoId: number) => void;
};

export const useTodoStore = create<TodoStoreType>()(
	persist(
		(set) => ({
			todos: [],
			createTodo: (text: string) => ({
				id: Date.now(),
				text,
				done: false,
			}),
			addTodo: (todo: ToDo) =>
				set((store) => ({
					todos: [...store.todos, todo],
				})),
			deleteTodo: (todoId: number) =>
				set((state) => ({
					todos: state.todos.filter((todo) => todo.id !== todoId),
				})),
			changeDone: (todoId: number) =>
				set((state) => ({
					todos: state.todos.map((todo) => {
						if (todo.id === todoId)
							return {
								...todo,
								done: !todo.done,
							};
						return todo;
					}),
				})),
		}),
		{
			name: 'store:todos',
		}
	)
);

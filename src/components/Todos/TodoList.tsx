import { Tabs } from '@mantine/core';
import style from './Todos.module.css';
import { useTodoStore } from '../../store/todos';
import { useState } from 'react';
import { TodoItem } from './TodoItem';
export const TodoList = () => {
	const todoList = useTodoStore((state) => state.todos);
	const [activeTab, setActiveTab] = useState<string | null>('all');

	const completedTodos = todoList.filter((todo) => todo.done);

	const activeTodos = todoList.filter((todo) => !todo.done);

	return (
		<div className={style['todo-list']}>
			<Tabs value={activeTab} onChange={setActiveTab}>
				<Tabs.List>
					<Tabs.Tab value='all'>All</Tabs.Tab>
					<Tabs.Tab value='active'>Active</Tabs.Tab>
					<Tabs.Tab value='complete'>Complete</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value='all'>
					{todoList.map((todo) => (
						<TodoItem todo={todo} key={todo.id} />
					))}
				</Tabs.Panel>

				<Tabs.Panel value='active'>
					{activeTodos.map((todo) => (
						<TodoItem todo={todo} key={todo.id} />
					))}
				</Tabs.Panel>

				<Tabs.Panel value='complete'>
					{completedTodos.map((todo) => (
						<TodoItem todo={todo} key={todo.id} />
					))}
				</Tabs.Panel>
			</Tabs>
		</div>
	);
};

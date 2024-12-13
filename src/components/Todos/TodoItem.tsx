import { useShallow } from 'zustand/shallow';
import { ToDo, useTodoStore } from '../../store/todos';
import style from './Todos.module.css';
import { ActionIcon } from '@mantine/core';
import Check from '/public/icon/check.svg?react';
import Undo from '/public/icon/undo-check.svg?react';
import Delete from '/public/icon/delete.svg?react';
import cn from 'classnames';
type PropsType = {
	todo: ToDo;
};
export const TodoItem = ({ todo }: PropsType) => {
	const { changeDone, deleteTodo } = useTodoStore(
		useShallow((state) => ({
			deleteTodo: state.deleteTodo,
			changeDone: state.changeDone,
		}))
	);
	return (
		<div
			className={cn(style['todo-item'], {
				[style['todo-item__done']]: todo.done,
			})}
		>
			{todo.text}
			<div style={{ display: 'flex', gap: '5px' }}>
				<ActionIcon variant='default' onClick={() => changeDone(todo.id)}>
					{todo.done ? <Undo /> : <Check />}
				</ActionIcon>
				<ActionIcon variant='default' onClick={() => deleteTodo(todo.id)}>
					<Delete />
				</ActionIcon>
			</div>
		</div>
	);
};

import { ActionIcon, Input as MantineInput } from '@mantine/core';
import Icon from '/public/icon/square-rounded-plus.svg?react';
import { useState } from 'react';
import { useTodoStore } from '../../store/todos';
import { useShallow } from 'zustand/shallow';
export const Input = () => {
	const [isError, setIsError] = useState(false);
	const { addTodo, createTodo } = useTodoStore(
		useShallow((state) => ({
			addTodo: state.addTodo,
			createTodo: state.createTodo,
		}))
	);
	const getValueFromForm = (target: HTMLFormElement) => {
		const input = target.elements.namedItem('todo_input') as HTMLInputElement;
		return input.value;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const input = getValueFromForm(form);
		if (!input) return setIsError(true);
		addTodo(createTodo(input));
		setIsError(false);
		form.reset();
	};

	return (
		<form
			data-testid='todo-form'
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				gap: '5px',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<MantineInput
				id='todo_input'
				error={isError}
				style={{ width: '100%' }}
				variant='filled'
				placeholder='Add todo'
			/>
			<ActionIcon variant='default' size='lg' type='submit'>
				<Icon />
			</ActionIcon>
		</form>
	);
};

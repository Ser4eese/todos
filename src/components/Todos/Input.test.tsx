// Input.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test, vi } from 'vitest';
import { Input } from './Input';
import { MantineProvider } from '@mantine/core';
import { JSX } from 'react';

const renderWithMantine = (ui: JSX.Element) => {
	return render(<MantineProvider>{ui}</MantineProvider>);
};

// Мокаем useTodoStore
vi.mock('../../store/todos', () => {
	const addTodoMock = vi.fn();
	return {
		useTodoStore: (selector: (state: any) => any) => {
			const state = {
				addTodo: addTodoMock,
				createTodo: (text: string) => ({ id: Date.now(), text }),
			};
			return selector(state);
		},
	};
});

describe('Input component', () => {
	test('renders input and submit button', () => {
		renderWithMantine(<Input />);
		const input = screen.getByPlaceholderText('Add todo');
		const button = screen.getByRole('button');
		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	test('shows error if submitting empty input', () => {
		renderWithMantine(<Input />);
		const form = screen.getByTestId('todo-form');
		fireEvent.submit(form);
		const input = screen.getByPlaceholderText('Add todo');
		// При error={true} MantineInput устанавливает aria-invalid=true
		expect(input).toHaveAttribute('aria-invalid', 'true');
	});

	test('calls addTodo when submitting non-empty input and resets the field', async () => {
		renderWithMantine(<Input />);
		const input = screen.getByPlaceholderText('Add todo');
		const form = screen.getByTestId('todo-form');

		fireEvent.change(input, { target: { value: 'My new todo' } });
		fireEvent.submit(form);

		// Достаем замоканный store
		const { useTodoStore } = await import('../../store/todos');
		const { addTodo } = useTodoStore((state) => ({ addTodo: state.addTodo }));

		expect(addTodo).toHaveBeenCalledTimes(1);
		expect(input).toHaveValue('');
		// Ошибка должна пропасть
		expect(input).not.toHaveAttribute('aria-invalid', 'true');
	});

	test('removes error after successful submit', () => {
		renderWithMantine(<Input />);
		const form = screen.getByTestId('todo-form');
		const input = screen.getByPlaceholderText('Add todo');

		// Сабмитим пустой инпут, получаем ошибку
		fireEvent.submit(form);
		expect(input).toHaveAttribute('aria-invalid', 'true');

		// Теперь вводим корректное значение и сабмитим снова
		fireEvent.change(input, { target: { value: 'Another todo' } });
		fireEvent.submit(form);

		expect(input).not.toHaveAttribute('aria-invalid', 'true');
	});
});

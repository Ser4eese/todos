import { withDefaultLayout } from '../../layout/Main';
import { Title } from '../Title';
import { Input } from './Input';
import { TodoList } from './TodoList';
import style from './Todos.module.css';
const Todos = () => {
	return (
		<div className={style['todos']}>
			<Title text='Todos' />
			<Input />
			<TodoList />
		</div>
	);
};

export default withDefaultLayout(Todos);

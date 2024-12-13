import { FunctionComponent, JSX } from 'react';
import style from './Main.module.css';
type LayoutProps = {
	children: JSX.Element;
};

const DefaultLayout = ({ children }: LayoutProps): JSX.Element => {
	return <div className={style['main']}>{children}</div>;
};

export const withDefaultLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<DefaultLayout>
				<Component {...props} />
			</DefaultLayout>
		);
	};
};

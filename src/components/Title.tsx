type PropsType = {
	text: string;
};
export const Title = ({ text }: PropsType) => {
	return <h1>{text}</h1>;
};

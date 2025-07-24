function Input({
	type,
	onChange,
	name,
	id
}) {

	return (
		<input
			type={type}
			name={name}
			id={id}
			onChange={onChange}
		/>
	);

} // Input()

//============================================================

export { Input };
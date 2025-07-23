function Input({
	type,
	value,
	onChange,
	name,
	id
}) {

	return (
		<input
			type={type}
			value={value}
			name={name}
			id={id}
			onChange={onChange}
		/>
	);

} // Input()

//============================================================

export { Input };
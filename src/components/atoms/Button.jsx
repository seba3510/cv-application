function Button({
	type,
	children
}) {

	return (
		<button type={type}>
			{children}
		</button>
	);


} // Button()

//====================================================

export { Button };
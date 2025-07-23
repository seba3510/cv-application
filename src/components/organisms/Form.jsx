function Form({
	children,
	onSubmit
}) {

	return (
		<form onSubmit={onSubmit}>
			{children}
		</form>
	);

} // Form()

//==========================================================================

export { Form };
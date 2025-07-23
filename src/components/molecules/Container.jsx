function Container({
	className,
	children,
}) {

	return (
		<div className={className}>
			{children}
		</div>
	);

} // Container()

//=====================================================

export { Container };
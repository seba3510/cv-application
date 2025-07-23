function Section({
	className,
	children
}) {

	return (
		<section className={className}>
			{children}
		</section>
	);

} // Section()

//===========================================================

export { Section };
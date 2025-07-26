function Resume({
	details
}) {

	return (

		<main>
			<header>
				<h1>
					{details.fullName}
				</h1>

				<div>
					<p>
						{details.email}
					</p>

					<p>
						{details.phone}
					</p>
				</div>
			</header>
		</main>

	);


} // Resume()

//====================================================

export { Resume };
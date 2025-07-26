function Resume({
	details,
	education
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

			<section className="education">
				<h1>
					{education.school}
				</h1>

				<p>
					{education.degree}
				</p>

				<p>
					{education.startYear}
				</p>

				<p>
					{education.endYear}
				</p>
			</section>
		</main>

	);


} // Resume()

//====================================================

export { Resume };
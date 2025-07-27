function Resume({
	details,
	education
}) {



	function displayEducation() {

		return (

			<>
				<section className="date">
					<p>
						{
							`${education.startDate} - ` +
							`${education.endDate}`
						}
					</p>
				</section>

				<section className="school">
					<h3>
						{education.school}
					</h3>

					<p>
						{education.degree}
					</p>
				</section>
			</>
		);

	} // displayEducation()


	//====================================================

	return (

		<main>
			<header className="personalDetails">
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
				{displayEducation()}
			</section>
		</main>

	);


} // Resume()

//====================================================

export { Resume };
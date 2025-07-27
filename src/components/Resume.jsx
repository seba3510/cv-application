function Resume({
	details,
	education
}) {



	function displayEducation() {

		return education.map((element) => (

			<>


				<section className="date">
					<p>
						{
							`${element.startDate} - ` +
							`${element.endDate}`
						}
					</p>
				</section>

				<section className="school">
					<h3>
						{element.school}
					</h3>
					<p>
						{element.degree}
					</p>
				</section>
			</>


		)); // map()

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
function Resume({
	details,
	education,
	work
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

	function displayWork() {

		return (

			<>
				<section className="date">
					<p>
						{
							`${work.startDate} - ` +
							`${work.endDate}`
						}
					</p>
				</section>

				<section className="company">
					<h3>
						{work.company}
					</h3>

					<p>
						{work.responsibilities}
					</p>
				</section>
			</>
		);


	} // displayWork()

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
				<header>
					<h2>
						Education
					</h2>
				</header>
				{displayEducation()}
			</section>

			<section className="work">
				<header>
					<h1>Work</h1>
				</header>

				{displayWork()}
			</section>
		</main>

	);


} // Resume()

//====================================================

export { Resume };
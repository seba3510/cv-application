function Resume({
	details,
	education,
	experience
}) {


	return (

		<main className="resume">
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
				<h3>Education</h3>
				{
					education.map((element) => (

						<div key={element.id} className="container">
							<section className="date">
								<p>
									{
										`  ${element.startDate} - ` +
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

						</div>

					))}
			</section>

			<section className="experience">
				<h3>Experience</h3>

				{
					experience.map((element) => (

						<div className="container" key={element.id}>

							<section className="date">
								<p>
									{
										`${element.startDate} - ` +
										`${element.endDate}`
									}
								</p>
							</section>

							<section className="company">
								<h4>
									{element.company}
								</h4>

								<p>
									{element.position}
								</p>

								<p>
									{element.responsibilities}
								</p>

							</section>

						</div>

					))}
			</section>

		</main>

	);


} // Resume()

//====================================================

export { Resume };
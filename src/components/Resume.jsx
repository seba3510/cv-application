import {
	Fragment
} from "react";

function Resume({
	details,
	education
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
								<h1>
									{element.school}
								</h1>

								<p>
									{element.degree}
								</p>
							</section>

						</div>

					))

				}
			</section>

		</main>

	);


} // Resume()

//====================================================

export { Resume };
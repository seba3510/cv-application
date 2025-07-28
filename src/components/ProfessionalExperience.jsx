function ProfessionalExperience({
	array,
	isShown,
	onChange,
	onClick
}) {

	//================================================================

	return (
		<section className="professionalExperience">

			<header>
				<h1>
					Experience
				</h1>

				<button type="button" onClick={onClick}>
					{(isShown) ? "v" : "^"}
				</button>
			</header>

			{(isShown) &&

				<>


					<div className="formControl">
						<label htmlFor="company">
							Company
						</label>
						<input
							type="text"
							name="company"
							id="company"
							onChange={onChange}
						/>
					</div>


					<div className="formControl">
						<label htmlFor="position">
							Position
						</label>
						<input
							type="text"
							name="position"
							id="position"
							onChange={onChange}
						/>
					</div>

					<div className="formControl">
						<label htmlFor="responsibilities">
							Responsibilities
						</label>
						<textarea>

						</textarea>
					</div>
				</>
			}

		</section>
	);




} // PersonalDetails()


//================================================================

export { ProfessionalExperience };
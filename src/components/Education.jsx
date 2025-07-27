function Education({
	isShown,
	onChange,
	onClick
}) {

	return (

		<section className="education">

			<header>
				<h1>
					Education
				</h1>

				<button type="button" onClick={onClick}>
					{(isShown) ? "v" : "^"}

				</button>
			</header>

			{(isShown) &&

				<>

					<div className="formControl">
						<label htmlFor="school">
							School
						</label>
						<input
							type="text"
							name="school"
							id="school"
							onChange={onChange}
						/>
					</div>

					<div className="formControl">
						<label htmlFor="degree">
							Degree
						</label>
						<input
							type="text"
							name="degree"
							id="degree"
							onChange={onChange}
						/>
					</div>

					<div className="formControl">
						<label htmlFor="startDate">
							Start Date
						</label>
						<input
							type="text"
							name="startDate"
							id="startDate"
							onChange={onChange}
						/>
					</div>

					<div className="formControl">
						<label htmlFor="endDate">
							End Date
						</label>
						<input
							type="text"
							name="endDate"
							id="endDate"
							onChange={onChange}
						/>
					</div>
				</>

			}

		</section>

	);


} // Education()

//===================================================================

export { Education }; 
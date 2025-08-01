function ExperienceForm({
	onChange,
	onSubmit
}) {

	return (

		<form onSubmit={onSubmit}>
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

			<div className="formControl">
				<label htmlFor="responsibilities">
					Responsibilities
				</label>
				<textarea>

				</textarea>
			</div>

			<div className="btnsContainer">
				<button type="button">
					Cancel
				</button>

				<button type="submit">
					Save
				</button>
			</div>

		</form>

	);

} // ExperienceForm()

//=============================================================================

export { ExperienceForm };
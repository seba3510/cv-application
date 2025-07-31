import {
	EducationList
} from "../EducationList.jsx";

//===================================================================

import icon
	from "../../assets/icons/education.png";

//===================================================================

function EducationForm({
	education,
	isShown,
	isButtonClicked,
	isItemClicked,
	isSubmitted,
	onChange,
	toggleSection,
	displayForm,
	displayEditForm,
	hideForm,
	onSubmit
}) {

	return (

		<section className="education">

			<header>

				<img
					src={icon}
					alt="Education"
					className="educationIcon"
				/>
				<h1>
					Education
				</h1>

				<button type="button" onClick={toggleSection}>
					{(isShown) ? "v" : "^"}

				</button>
			</header>

			{((isShown) && (!isButtonClicked)) && (

				<button type="button" onClick={displayForm}>
					Add Education
				</button>
			)}

			{((isShown) && (isButtonClicked)) && (

				<form onSubmit={onSubmit} className="education">

					<div className="formControl">
						<label htmlFor="school">
							School
						</label>
						<input
							type="text"
							name="school"
							id="school"
							value={education.school}
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
							value={education.degree}
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
							value={education.startDate}
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
							value={education.endDate}
							onChange={onChange}
						/>
					</div>

					<div className="btnsContainer">
						<button type="button" onClick={hideForm}>
							Cancel
						</button>

						<button type="submit">
							Save
						</button>
					</div>
				</form>

			)}

			{
				(isSubmitted) && (
					<EducationList
						list={education}
					/>
				)}



		</section>

	);


} // Education()

//===================================================================

export { EducationForm }; 
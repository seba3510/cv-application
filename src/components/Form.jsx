import {
	PersonalDetails
} from "./PersonalDetails.jsx";

//===================================================================

import {
	Education
} from "./Education.jsx";

//===================================================================

import {
	ProfessionalExperience
} from "./ProfessionalExperience.jsx";

//===================================================================

function Form({
	onSubmit,
	areDetailsShown,
	isEducationShown,
	handleDetailsChange,
	toggleDetails,
	toggleEducation,
	handleEducationChange,
	education,
	work,
	isWorkShown,
	toggleWorkSection,
	handleWorkChange
}) {

	//===================================================================


	return (

		<form onSubmit={onSubmit}>
			<PersonalDetails
				isShown={areDetailsShown}
				onChange={handleDetailsChange}
				onClick={toggleDetails}
			/>

			<Education
				education={education}
				isShown={isEducationShown}
				onChange={handleEducationChange}
				onClick={toggleEducation}
			/>


			<ProfessionalExperience
				array={work}
				isShown={isWorkShown}
				onChange={handleWorkChange}
				onClick={toggleWorkSection}
			/>

			<div className="btnsContainer">
				<button type="button">
					Clear Resume
				</button>

				<button type="submit">
					Save
				</button>
			</div>

		</form>

	);

} // Form()

//===================================================================

export { Form };
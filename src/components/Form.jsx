import {
	PersonalDetails
} from "./PersonalDetails.jsx";

//===================================================================

import {
	Education
} from "./Education.jsx";

//===================================================================

function Form({
	onSubmit,
	areDetailsShown,
	isEducationShown,
	handleDetailsChange,
	toggleDetails,
	toggleEducation,
	handleEducationChange,
	education
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
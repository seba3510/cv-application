import {
	useState
} from "react";

//===================================================================

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
	onChange,
	toggleDetails,
	toggleEducation
}) {

	//===================================================================


	return (

		<form onSubmit={onSubmit}>
			<PersonalDetails
				isShown={areDetailsShown}
				onChange={onChange}
				onClick={toggleDetails}
			/>

			<Education
				isShown={isEducationShown}
				onChange={onChange}
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
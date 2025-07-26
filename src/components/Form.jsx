import {
	useState
} from "react";

//===================================================================

import {
	PersonalDetails
} from "./PersonalDetails.jsx";

//===================================================================

function Form({
	onSubmit,
	isShown,
	onChange,
	toggleDisplay
}) {

	//===================================================================


	return (

		<form onSubmit={onSubmit}>
			<PersonalDetails
				isShown={isShown}
				onChange={onChange}
				onClick={toggleDisplay}
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
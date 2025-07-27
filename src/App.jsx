import "./styles/style.css";

//==============================================================

import {
	useState
} from "react";

//==============================================================

import {
	Sidebar
} from "./components/Sidebar.jsx";

//==============================================================

import {
	Form
} from "./components/Form.jsx";

//==============================================================

import {
	Resume
} from "./components/Resume.jsx";

//==============================================================

function App() {

	const [
		details,
		setDetails
	] = useState([{
		id: crypto.randomUUID(),
		fullName: "",
		email: "",
		phone: ""
	}]);

	//===================================================================

	const [
		education,
		setEducation
	] = useState([{
		id: crypto.randomUUID(),
		school: "",
		degree: "",
		startDate: "",
		endDate: ""
	}]);

	//===================================================================

	const [
		areDetailsShown,
		setAreDetailsShown
	] = useState(
		false
	);

	//===================================================================

	const [
		isEducationShown,
		setIsEducationShown
	] = useState(
		false
	);

	//===================================================================

	const [
		isFormSubmitted,
		setIsFormSubmitted
	] = useState(
		false
	);

	//===================================================================

	function handleDetailsChange(event) {

		const input =
			event.target.name;

		const inputValue =
			event.target.value;

		setDetails({
			...details,
			[input]: inputValue
		});
	} // handleDetailsChange()

	//===================================================================

	function toggleDetailsSection() {

		setAreDetailsShown(
			(prev) =>
				(!prev)
		);

	} // toggleDetailsSection()

	//===================================================================

	function toggleEducationSection() {

		setIsEducationShown(
			(prev) =>
				(!prev)
		);

	} // toggleEducationSection()

	//===================================================================

	function handleEducationChange(event) {

		const form =
			event.target;


		setEducation(
			[
				{
					[form[5]]: form[5].value,
					[form[6]]: form[6].value,
					[form[7]]: form[7].value,
					[form[8]]: form[8].value
				}
			]);

	} // handleEducationChange()

	//===================================================================


	function submitForm(event) {

		event.preventDefault();

		setIsFormSubmitted(
			true
		);


		const form =
			event.target;

		console.log(
			form
		);

		form.reset();

		form[1].disabled =
			true;

		form[2].disabled =
			true;

		form[3].disabled =
			true;

		form[5].disabled =
			true;

	} // submitForm()

	//===================================================================

	return (

		<div className="wrapper">
			<Sidebar>
				<Form
					areDetailsShown={areDetailsShown}
					isEducationShown={isEducationShown}
					handleDetailsChange={handleDetailsChange}
					onSubmit={submitForm}
					toggleDetails={toggleDetailsSection}
					toggleEducation={toggleEducationSection}
					handleEducationChange={handleEducationChange}
					education={education}
				/>
			</Sidebar>

			{(isFormSubmitted) &&

				<Resume
					details={details}
					education={education}
				/>

			}
		</div>

	);

} // App()

//==================================================================

export { App };
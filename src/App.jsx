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
	] = useState({
		fullName: "",
		email: "",
		phone: ""
	});

	//===================================================================

	const [
		education,
		setEducation
	] = useState([{
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

	function handleInputChange(event) {

		const input =
			event.target.name;

		const inputValue =
			event.target.value;

		setDetails({
			...details,
			[input]: inputValue
		});

	} // handleInputChange()

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

	function submitForm(event) {

		event.preventDefault();

		setIsFormSubmitted(
			true
		);

		const form =
			event.target;

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
					onChange={handleInputChange}
					onSubmit={submitForm}
					toggleDetails={toggleDetailsSection}
					toggleEducation={toggleEducationSection}
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
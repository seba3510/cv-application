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
		id: crypto.randomUUID(),
		fullName: "",
		email: "",
		phone: ""
	});

	//===================================================================

	const [
		education,
		setEducation
	] = useState(
		{
			id: crypto.randomUUID(),
			school: "",
			degree: "",
			startDate: "",
			endDate: ""
		}
	);

	//===================================================================

	const [
		work,
		setWork
	] = useState({
		id: crypto.randomUUID(),
		company: "",
		title: "",
		responsibilities: ""
	});

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
		isWorkShown,
		setIsWorkShown
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

		const {
			name,
			value
		} = event.target;

		setDetails(
			(prev) => {
				return {
					...prev,
					[name]: value
				};
			}
		);

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

	function toggleWorkSection() {

		setIsWorkShown(
			(prev) =>
				(!prev)
		);

	} // toggleWorkSection()

	//===================================================================

	function handleEducationChange(event) {

		const {
			name,
			value
		} = event.target;

		setEducation(
			(prev) => {
				return {
					...prev,
					[name]: value
				}

			});

	} // handleEducationChange()

	//===================================================================

	function handleWorkChange(event) {

		const {
			name,
			value
		} = event.target;

		setWork(
			(prev) => {
				return {
					...prev,
					[name]: value
				}

			});

	} // handleWorkChange()

	//===================================================================

	function submitForm(event) {

		event.preventDefault();

		setIsFormSubmitted(
			true
		);


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
					work={work}
					isWorkShown={isWorkShown}
					toggleWorkSection={toggleWorkSection}
					handleWorkChange={handleWorkChange}
				/>
			</Sidebar>

			{(isFormSubmitted) &&

				<Resume
					details={details}
					education={education}
					work={work}
				/>

			}
		</div>

	);

} // App()

//==================================================================

export { App };
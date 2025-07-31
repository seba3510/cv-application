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
	PersonalDetailsForm
} from "./components/forms/PersonalDetailsForm.jsx";

//==============================================================

import {
	Resume
} from "./components/Resume.jsx";

//==============================================================

import {
	EducationForm
} from "./components/forms/EducationForm.jsx";

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
	] = useState([]);

	//===================================================================

	const [
		currentEducationID,
		setCurrentEducationID
	] = useState("");

	//===================================================================

	const [
		isAddEducationBtnClicked,
		setIsAddEducationBtnClicked
	] = useState(
		false
	);

	//===================================================================

	const [
		isEducationFormSubmitted,
		setIsEducationFormSubmitted
	] = useState(
		false
	);

	//===================================================================

	const [
		isEducationItemHidden,
		setIsEducationItemHidden
	] = useState(
		false
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
		isEducationSectionShown,
		setIsEducationSectionShown
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

		setIsEducationSectionShown(
			(prev) =>
				(!prev)
		);

	} // toggleEducationSection()

	//===================================================================

	function displayEducationForm() {

		setIsAddEducationBtnClicked(
			true
		);

	} // displayEducationForm()

	//===================================================================

	function handleEducationChange(event) {

		const {
			name,
			value
		} = event.target;

		setEducation((prev) => {

			if (currentEducationID) {

				return prev.map((element) => {

					const areIDsEqual =
						element.id ===
						currentEducationID;

					if (areIDsEqual) {

						return {
							...element,
							[name]: value,
						};

					} // if

					return element;

				}); // map()

			} // if


			const newEntry = {
				id: crypto.randomUUID(),
				[name]: value,
			};

			setCurrentEducationID(
				newEntry.id
			);

			return [
				...prev,
				newEntry
			];
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

	function submitEducationForm(event) {

		try {

			event.preventDefault();

			setIsEducationFormSubmitted(
				true
			);

			setIsEducationSectionShown(
				false
			);

			setIsAddEducationBtnClicked(
				false
			);

			setCurrentEducationID(
				""
			);

		} // try

		catch (error) {

			alert(error);

		} // catch


	} // submitForm()

	//===================================================================


	function hideEducationForm(event) {

		event.preventDefault();

		const message =
			"The form has been canceled.";

		alert(message);

	} // hideEducationForm()

	//===================================================================


	return (

		<div className="wrapper">
			<Sidebar>

				<PersonalDetailsForm
					details={details}
					onChange={handleDetailsChange}
				/>

				<EducationForm
					toggleSection={toggleEducationSection}
					education={education}
					isButtonClicked={isAddEducationBtnClicked}
					isShown={isEducationSectionShown}
					displayForm={displayEducationForm}
					hideForm={hideEducationForm}
					onChange={handleEducationChange}
					onSubmit={submitEducationForm}
					isSubmitted={isEducationFormSubmitted}
				/>

			</Sidebar>

			<Resume
				details={details}
				education={education}
			/>


		</div>

	);

} // App()

//==================================================================

export { App };
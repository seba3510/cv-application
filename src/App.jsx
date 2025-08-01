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

import {
	ExperienceForm
} from "./components/forms/ExperienceForm.jsx";

//==============================================================

import suitcaseIcon
	from "./assets/icons/suitcase.png";

//==============================================================

import {
	ExperienceList
} from "./components/ExperienceList.jsx";

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
	] = useState(false);

	//===================================================================

	const [
		isEducationFormSubmitted,
		setIsEducationFormSubmitted
	] = useState(false);

	//===================================================================

	const [
		isEducationSectionShown,
		setIsEducationSectionShown
	] = useState(false);

	//===================================================================

	const [
		work,
		setWork
	] = useState([]);

	//===================================================================

	const [
		isWorkSectionShown,
		setIsWorkSectionShown
	] = useState(false);

	//===================================================================

	const [
		isWorkFormShown,
		setIsWorkFormShown
	] = useState(false);

	//===================================================================

	const [
		isAddWorkBtnClicked,
		setIsAddWorkBtnClicked
	] = useState(false);

	//===================================================================

	const [
		currentWorkID,
		setCurrentWorkID
	] = useState("");

	//===================================================================

	const [
		isWorkFormSubmitted,
		setIsWorkFormSubmitted
	] = useState(false);

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

	function toggleEducationSection() {
		7
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

	function toggleWorkSection() {

		setIsWorkSectionShown(
			(prev) => {
				return (!prev)
			}
		);

	} // toggleWorkSection()

	//===================================================================

	function handleWorkChange(event) {

		const {
			name,
			value
		} = event.target;

		setWork((prev) => {

			if (currentWorkID) {

				return prev.map((element) => {

					const areIDsEqual =
						element.id ===
						currentWorkID;

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

			setCurrentWorkID(
				newEntry.id
			);

			return [
				...prev,
				newEntry
			];

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

		return;

	} // hideEducationForm()

	//===================================================================

	function displayWorkForm() {

		setIsAddWorkBtnClicked(
			true
		);

		setIsWorkFormShown(
			true
		);

	} // displayWorkForm()

	//===================================================================

	function submitWorkForm(event) {

		try {

			event.preventDefault();

			setIsWorkFormSubmitted(
				true
			);

			setIsWorkFormShown(
				false
			);

		} // try

		catch (error) {

			alert(error);

		} // catch

	} // submitWorkForm()

	//===================================================================

	//===================================================================


	return (

		<>
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

				<section className="experience">
					<header>
						<img
							src={suitcaseIcon}
							alt="Suitcase"
							className="suitcaseIcon"
						/>
						<h2>Experience</h2>

						<button type="button" onClick={toggleWorkSection}>
							{(isWorkSectionShown) ? "v" : "^"}
						</button>
					</header>

					{(isWorkFormSubmitted) && (
						<ExperienceList
							list={work}
						/>
					)}

					{(isWorkSectionShown)
						&& (!isWorkFormShown) && (

							<button type="button" onClick={displayWorkForm}>
								Add Experience
							</button>

						)}

					{(isWorkSectionShown &&
						(isAddWorkBtnClicked)) && (
							<ExperienceForm
								array={work}
								onChange={handleWorkChange}
								onSubmit={submitWorkForm}
							/>
						)}

				</section>

			</Sidebar>

			<Resume
				details={details}
				education={education}
				experience={work}
			/>


		</>

	);

} // App()

//==================================================================

export { App };
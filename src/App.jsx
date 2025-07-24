import "./styles/App.css";

//================================================================

import {
	useState
} from "react";

//================================================================

import {
	Form
} from "./components/organisms/Form.jsx";

//================================================================

import {
	FormControl
} from "./components/organisms/FormControl.jsx";

//================================================================

import {
	Section
} from "./components/organisms/Section.jsx";

//================================================================

import {
	Button
} from "./components/atoms/Button.jsx";

//==============================================================

function App() {

	const [
		form,
		setForm
	] = useState(
		{
			fullName: "",
			email: "",
			phoneNumber: "",
			school: "",
			major: "",
			date: "",
			company: "",
			position: "",
			responsibilities: "",
			startDate: "",
			endDate: ""
		});

	//================================================================

	function handleInputChange(event) {

		const formControl =
			event.target.name;

		const inputValue =
			event.target
				.value;

		console.log(
			inputValue
		);

		setForm({
			...form,
			[formControl]: inputValue
		});


	} // handleInputChange()

	//================================================================

	function submitForm(event) {

		event.preventDefault();

		alert("Hello, World!");

	} // submitForm()

	//==================================================================

	function displayGeneralInfo() {

		return (
			<Section className={"section"}>

				<h1>General Info</h1>

				<FormControl
					type={"text"}
					id={"fullName"}
					name={"fullName"}
					labelText={"Full Name"}
					value={form.fullName}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"email"}
					id={"email"}
					name={"email"}
					labelText={"Email"}
					value={form.email}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"tel"}
					id={"phoneNumber"}
					name={"phoneNumber"}
					labelText={"Phone Number"}
					value={form.phoneNumber}
					onChange={handleInputChange}
				/>
			</Section>

		);

	} // displayGeneralInfo()

	//==================================================================

	function displayEducation() {


		return (
			<Section className={"section"}>

				<h1>Education</h1>

				<FormControl
					type={"text"}
					id={"schoolName"}
					name={"schoolName"}
					labelText={"School"}
					value={form.school}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"text"}
					id={"major"}
					name={"major"}
					labelText={"Major"}
					value={form.major}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"text"}
					id={"dateOfStudy"}
					name={"dateOfStudy"}
					labelText={"Date of Study"}
					value={form.date}
					onChange={handleInputChange}
				/>

			</Section>

		);

	} // displayEducation()

	//==================================================================

	function displayJobExperience() {

		return (
			<Section className={"section"}>

				<h1>Job Experience</h1>

				<FormControl
					type={"text"}
					id={"companyName"}
					name={"companyName"}
					labelText={"Company"}
					value={form.company}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"text"}
					id={"positionTitle"}
					name={"positionTitle"}
					labelText={"Position"}
					value={form.position}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"text"}
					id={"responsibilities"}
					name={"responsibilities"}
					labelText={"Responsibilities"}
					value={form.responsibilities}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"text"}
					id={"startDate"}
					name={"startDate"}
					labelText={"Start Date"}
					value={form.startDate}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"text"}
					id={"endDate"}
					name={"endDate"}
					labelText={"End Date"}
					value={form.endDate}
					onChange={handleInputChange}
				/>

			</Section>

		);

	} // displayJobExperience()

	//==================================================================

	return (

		<aside>
			<Form>

				<Section className="personalDetails">
					<header>
						<h1>Personal Details</h1>
						<button type="button">
							^
						</button>


					</header>
				</Section>

			</Form>
		</aside>

	);

} // App()

//==================================================================

export { App };
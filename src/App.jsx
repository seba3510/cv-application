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
	Section
} from "./components/organisms/Section.jsx";

//================================================================

import {
	Button
} from "./components/atoms/Button.jsx";

//==============================================================

import {
	Header
} from "./components/atoms/Header.jsx";

//==============================================================

import {
	Sidebar
} from "./components/atoms/Sidebar.jsx";

//==============================================================

import {
	FormControl
} from "./components/organisms/FormControl.jsx";

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
			responsibilities: [],
			startDate: "",
			endDate: ""
		});

	//==================================================================

	const [
		toggle,
		setToggle
	] = useState(
		false
	);

	//==================================================================

	function toggleDisplay() {

		const isShown =
			toggle;

		if (!isShown) {

			setToggle(
				true
			);

			console.log(
				"Section displayed."
			);

			return;

		} // if

		setToggle(
			false
		);

		console.log(
			"The section was hidden."
		);

	} // handleClick()

	//==================================================================

	function handleInputChange(event) {

		const inputField =
			event.target.name;

		const inputValue =
			event.target.value;

		setForm({
			...form,
			[inputField]: inputValue
		});

	} // handleInputChange()

	//==================================================================

	function displayPersonalDetails() {

		return (

			<Section className={"formControls"}>
				<FormControl
					type={"text"}
					id={"fullName"}
					name={"fullName"}
					value={form.fullName}
					labelText={"Full Name"}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"email"}
					id={"email"}
					name={"email"}
					value={form.email}
					labelText={"Email"}
					onChange={handleInputChange}
				/>

				<FormControl
					type={"tel"}
					id={"phoneNumber"}
					name={"phoneNumber"}
					value={form.phoneNumber}
					labelText={"Phone Number"}
					onChange={handleInputChange}
				/>
			</Section>
		);

	} // displayPersonalDetails()

	//==================================================================



	return (

		<Sidebar>
			<Form>

				<Section className="personalDetails">
					<Header>
						<h1>Personal Details</h1>
						<Button type="button" onClick={toggleDisplay}>
							^
						</Button>
					</Header>

					{(toggle) &&
						displayPersonalDetails()
					}
				</Section>
			</Form>
		</Sidebar>

	);

} // App()

//==================================================================

export { App };

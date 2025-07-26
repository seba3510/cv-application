import "./styles/style.css";

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
} from "./components/organisms/Sidebar.jsx";

//==============================================================

import {
	FormControl
} from "./components/organisms/FormControl.jsx";

//==============================================================

import {
	Container
} from "./components/molecules/Container.jsx";

//==============================================================

import {
	Resume
} from "./components/organisms/Resume.jsx";

//==============================================================

import {
	HeadingOne
} from "./components/atoms/HeadingOne.jsx";

//==============================================================

import {
	Paragraph
} from "./components/atoms/Paragraph.jsx";

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
		isSectionToggled,
		setIsSectionToggled
	] = useState(
		false
	);

	//==================================================================

	const [
		isResumeShown,
		setIsResumeShown
	] = useState(
		false
	);

	//==================================================================

	function toggleDisplay() {

		const isShown =
			isSectionToggled;

		if (!isShown) {

			setIsSectionToggled(
				true
			);

			console.log(
				"Section displayed."
			);

			return;

		} // if

		setIsSectionToggled(
			false
		);

		console.log(
			"The section was hidden."
		);

		return;

	} // toggleDisplay()

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

	function submitForm(event) {

		try {

			event.preventDefault();

			const inputField =
				event.target.name;

			const inputValue =
				event.target.value

			setForm({
				...form,
				[inputField]: inputValue
			});

			const formElem =
				event.target;

			console.log(
				formElem
			);


			setIsResumeShown(
				true
			);

			formElem.reset();

			formElem[1].disabled =
				true;

			formElem[2].disabled =
				true;

			formElem[3].disabled =
				true;

			console.log("Input Values Cleared..");

			console.log(form);

			console.log(formElem)


		} // try

		catch (error) {

			alert(error);

		} // catch

	} // submitForm()

	//==================================================================

	function displayResume() {

		return (
			<Resume>
				<Header>
					<HeadingOne>
						{form.fullName}
					</HeadingOne>

					<Container>
						<Paragraph>
							{form.email}
						</Paragraph>

						<Paragraph>
							{form.phoneNumber}
						</Paragraph>
					</Container>
				</Header>
			</Resume>
		);

	} // displayResume()

	//==================================================================


	return (

		<Container className={"wrapper"}>

			<Sidebar>
				<Form onSubmit={submitForm}>

					<Section className="personalDetails">
						<Header>
							<HeadingOne>Personal Details</HeadingOne>
							<Button type="button" onClick={toggleDisplay}>
								^
							</Button>
						</Header>

						{(isSectionToggled) &&
							displayPersonalDetails()
						}
					</Section>

					<Container className={"btnsContainer"}>

						<Button type={"submit"}>
							Save
						</Button>

					</Container>

				</Form>

			</Sidebar>

			{(isResumeShown) &&
				displayResume()}

		</Container>
	);

} // App()

//==================================================================

export { App };
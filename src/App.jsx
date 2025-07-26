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
	] = useState([
		{
			id: crypto.randomUUID(),
			labelText: "Full Name",
			name: "fullName",
			type: "text",
			value: ""
		},
		{
			id: crypto.randomUUID(),
			labelText: "Email",
			name: "email",
			type: "email",
			value: ""
		},
		{
			id: crypto.randomUUID(),
			labelText: "Phone Number",
			name: "phoneNumber",
			type: "tel",
			value: ""
		}
	]);

	//==================================================================

	const [
		isSectionDisplayed,
		setIsSectionDisplayed
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
			isSectionDisplayed;

		if (!isShown) {

			setIsSectionDisplayed(
				true
			);

			console.log(
				"Section displayed."
			);

			return;

		} // if

		setIsSectionDisplayed(
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

		return form.map((element) => (

			<FormControl
				key={element.id}
				type={element.type}
				id={element.name}
				name={element.name}
				labelText={element.labelText}
				onChange={handleInputChange}
			/>

		)); /// map()

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

			formElem[5].disabled =
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

	function clearResume() {



	} // clearResume()

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

						{(isSectionDisplayed) &&
							displayPersonalDetails()
						}
					</Section>

					<Container className={"btnsContainer"}>

						<Button type={"button"} onClick={clearResume}>
							Clear Resume
						</Button>

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

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
		isShown,
		setIsShown
	] = useState(
		false
	);

	//===================================================================

	const [
		isSubmitted,
		setIsSubmitted
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

	function toggleDisplay() {

		setIsShown(
			(prev) =>
				(!prev)
		);

	} // toggleDisplay()

	//===================================================================

	function submitForm(event) {

		event.preventDefault();

		setIsSubmitted(
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
					isShown={isShown}
					onChange={handleInputChange}
					onSubmit={submitForm}
					toggleDisplay={toggleDisplay}
				/>
			</Sidebar>

			{(isSubmitted) &&

				<Resume
					details={details}
				/>

			}
		</div>

	);

} // App()

//==================================================================

export { App };
import "./styles/App.css";

//================================================================

import {
	useState
} from "react";

//================================================================

function App() {

	const [
		form,
		setForm
	] = useState([
		{
			fullName: "",
			email: "",
			phoneNumber: ""
		},
		{
			school: "",
			major: "",
			date: ""
		},
		{
			company: "",
			position: "",
			responsibilities: "",
			startDate: "",
			endDate: ""
		}
	]);

	//================================================================


	function handleGeneralInfoChange(event) {

		const input =
			event.target;

		const value =
			input.value.trim();

		setForm(
			(prev) => [
				{
					...prev,
					fullName: value
				}
			]);

	} // handleTextChange()

	//================================================================

	function handleEmailChange(event) {

		const textBox =
			event.target;

		const emailInput =
			textBox.value.trim();

		setForm((prev) => [
			{
				.
					email: emailInput
			}
		])


	} // handleEmailChange()

	//================================================================

	return (

		<>
			<aside>
				<form>
					<section className="generalInfo">
						<div className="formControl">
							<label htmlFor="fullName">Name</label>
							<input
								type="text"
								value={form[0].fullName}
								id="fullName"
								name="fullName"
								onChange={handleGeneralInfoChange}
							/>
						</div>

						<div className="formControl">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								value={form[0].email}
								id="email"
								onChange={handleEmailChange}
							/>
						</div>
					</section>
				</form>
			</aside>
		</>

	);

} // App()

//==================================================================

export { App };
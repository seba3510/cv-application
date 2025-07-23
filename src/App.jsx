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
	] = useState({
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
				.value.trim();

		console.log(
			inputValue
		);

		setForm({
			...form,
			[formControl]: inputValue
		});

	} // handleTextChange()

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
								value={form.fullName}
								id="fullName"
								name="fullName"
								onChange={handleInputChange}
							/>
						</div>

						<div className="formControl">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								value={form.email}
								id="email"
								onChange={handleInputChange}
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
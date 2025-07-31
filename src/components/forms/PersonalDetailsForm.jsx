function PersonalDetailsForm({
	details,
	onChange
}) {

	return (

		<>

			<header>
				<h1>
					Personal Details
				</h1>
			</header>
			<section className="personalDetails">
				<div className="formControl">
					<label htmlFor="fullName">
						Full Name
					</label>
					<input
						type="text"
						name="fullName"
						id="fullName"
						value={details.fullName}
						onChange={onChange}
					/>
				</div>


				<div className="formControl">
					<label htmlFor="email">
						Email
					</label>
					<input
						type="text"
						name="email"
						id="email"
						value={details.email}
						onChange={onChange}
					/>
				</div>

				<div className="formControl">
					<label htmlFor="phone">
						Phone Number
					</label>
					<input
						type="text"
						name="phone"
						id="phone"
						value={details.phone}
						onChange={onChange}
					/>
				</div>
			</section>
		</>
	);

} // PersonalDetailsForm()

export { PersonalDetailsForm };
function PersonalDetails({
	isShown,
	onChange,
	onClick
}) {


	//================================================================

	return (
		<section className="personalDetails">

			<header>
				<h1>
					Personal Details
				</h1>

				<button type="button" onClick={onClick}>
					{(isShown) ? "v" : "^"}
				</button>
			</header>

			{(isShown) &&

				<>


					<div className="formControl">
						<label htmlFor="fullName">
							Full Name
						</label>
						<input
							type="text"
							name="fullName"
							id="fullName"
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
							onChange={onChange}
						/>
					</div>
				</>
			}

		</section>
	);




} // PersonalDetails()


//================================================================

export { PersonalDetails };
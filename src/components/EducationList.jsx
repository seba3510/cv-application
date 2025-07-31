import icon from "../assets/icons/view.png";

//===========================================================

function EducationList({ list }) {


	return (

		<>
			{
				list.map((element) => (
					<div className="educationItem">
						<p>
							{element.school}
						</p>

						<img
							src={icon}
							alt="Show item"
						/>
					</div>
				))
			}

		</>
	);


} // EducationList()

//===========================================================

export { EducationList };
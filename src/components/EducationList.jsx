function EducationList({
	list
}) {


	return (

		<>
			{
				list.map((element) => (
					<div className="educationItem" key={element.id}>
						<h3>
							{element.school}
						</h3>
					</div>
				))
			}

		</>
	);


} // EducationList()

//===========================================================

export { EducationList };
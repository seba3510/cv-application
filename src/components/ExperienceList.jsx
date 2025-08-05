function ExperienceList({ list }) {

	return (
		<>
			{list.map((element) => (
				<div key={element.id}>
					<h3>
						{element.company}
					</h3>
				</div>
			))}
		</>
	);

} // ExperienceItem()

//============================================================

export { ExperienceList };
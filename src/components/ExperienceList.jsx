function ExperienceList({ list }) {

	return (
		<>
			<ul>
				{list.map((element) => {
					<li key={element.id}>
						{element.company}
					</li>
				})}
			</ul>
		</>
	);

} // ExperienceItem()

//============================================================

export { ExperienceList };
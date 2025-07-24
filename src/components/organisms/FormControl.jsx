import {
	Container
} from "../molecules/Container";

//=======================================================================

import {
	Input
} from "../atoms/Input.jsx";

//=======================================================================

import {
	Label
} from "../atoms/Label.jsx";

//=======================================================================

function FormControl({
	labelText,
	type,
	id,
	name,
	value,
	onChange
}) {

	return (
		<>
			<Label htmlFor={name}>
				{labelText}
			</Label>

			<Container className={"formControl"}>
				<Input
					type={type}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
				/>
			</Container>
		</>
	);

} // FormControl()

//=======================================================================

export { FormControl };
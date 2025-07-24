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
					onChange={onChange}
				/>
			</Container>
		</>
	);

} // FormControl()

//=======================================================================

export { FormControl };
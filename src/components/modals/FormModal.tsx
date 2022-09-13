import { FormEvent, useState } from "react";
import { ModalProps, Modal } from "../Modal";

export default function FormModal(props: ModalProps) {
	const [name, setName] = useState<string>();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Modal modalProps={props}>
			<h1>Form Modal</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
		</Modal>
	);
}

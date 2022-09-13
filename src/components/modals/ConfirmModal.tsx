import { FormEvent, useState } from "react";
import { ModalProps, Modal } from "../Modal";

export default function ConfirmModal(props: ModalProps) {
	const [name, setName] = useState<string>();

	return (
		<Modal modalProps={props}>
			<h1>Confirm Modal</h1>
			<button className="button-group w-full flex  gap-2">
				<button onClick={() => alert("yes")}>Yes</button>
				<button onClick={props.close}>No</button>
			</button>
		</Modal>
	);
}

import { FormEvent, useState } from "react";
import { ModalProps, Modal } from "../Modal";

export default function DisclaimerModal(props: ModalProps) {
	const [name, setName] = useState<string>();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Modal modalProps={props}>
			<h1>Disclaimer Modal</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Sed neque autem inventore voluptatem perspiciatis
				necessitatibus, facilis excepturi aspernatur reprehenderit
				nesciunt hic, perferendis, iure aperiam dicta laborum
				labore provident possimus quos.
			</p>
		</Modal>
	);
}

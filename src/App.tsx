import { useModal } from "./components/Modal";
import ConfirmModal from "./components/modals/ConfirmModal";
import DisclaimerModal from "./components/modals/DisclaimerModal";
import FormModal from "./components/modals/FormModal";

const App = () => {
	const formModal = useModal();
	const disclaimerModal = useModal();
	const confirmModal = useModal();

	return (
		<>
			<div className="container">
				<h1 className="text-center text-3xl">Modal Test</h1>
				<div className="mt-4 button-group w-full flex justify-center gap-6">
					<button onClick={formModal.open}>
						Open Form Modal
					</button>
					<button onClick={disclaimerModal.open}>
						Open Disclaimer Modal
					</button>
					<button onClick={confirmModal.open}>
						Open Confirm Modal
					</button>
				</div>
			</div>
			<FormModal {...formModal} />
			<DisclaimerModal {...disclaimerModal} />
			<ConfirmModal {...confirmModal} />
		</>
	);
};

export default App;

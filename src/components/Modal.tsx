import {
	createContext,
	LegacyRef,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import close from "../assets/close.svg";

export interface ModalProps {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	thisRef: LegacyRef<HTMLDialogElement>;
}

type ModalRefType = LegacyRef<HTMLDialogElement>;

type ModalOpenClose = { close: () => void; open: () => void };

export type ModalsContextProps = {
	modalsRef: React.MutableRefObject<Map<ModalRefType, ModalOpenClose>>;
	registerModal: (ref: ModalRefType, openClose: ModalOpenClose) => void;
};

const useModals = () => {
	const modalsRef = useRef(new Map<ModalRefType, ModalOpenClose>());

	const registerModal = (
		ref: ModalRefType,
		openClose: ModalOpenClose
	) => {
		modalsRef.current.set(ref, openClose);
	};

	return { modalsRef, registerModal };
};

export const useModal = (): ModalProps => {
	const thisRef = useRef<HTMLDialogElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { modalsRef, registerModal } = useModals();

	const close = () => setIsOpen(false);

	const open = () => {
		for (const modal of modalsRef.current) {
			modal[1].close();
		}
		setIsOpen(true);
	};

	const handleMouseDown = useCallback((e: MouseEvent) => {
		if (
			thisRef.current &&
			!thisRef.current.contains(e.target as Node)
		) {
			close();
		}
	}, []);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			close();
		}
	};

	useEffect(() => {
		registerModal(thisRef, { open, close });
		[...modalsRef.current].forEach(console.log);

		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.addEventListener("mousedown", handleMouseDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return { isOpen, open, close, thisRef };
};

export const Modal = ({
	children,
	modalProps,
}: {
	children: ReactNode;
	modalProps: ModalProps;
}) => {
	return (
		<dialog
			ref={modalProps.thisRef}
			className="fixed top-40 w-96 h-44   rounded-md bg-blue-200"
			open={modalProps.isOpen}>
			<div className="flex">
				<button onClick={modalProps.close} className="ml-auto">
					<img className="h-5 w-5" src={close} />
				</button>
			</div>
			<div className="w-full h-full overflow-auto">{children}</div>
		</dialog>
	);
};

export interface ModalProps {
    id?: string
    isOpen: boolean;
    onRequestClose: () => void;
}
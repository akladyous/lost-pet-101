import { Modal } from 'bootstrap';
import { useRef } from 'react';
import TestModal from './TestModal'

export default function ModalParent() {
    const modalRef = useRef()

    const openModal = () => {
        const modalX = new Modal(modalRef.current, {
            backdrop: true,
            keyboard: true,
            focus: true,
        });
        modalX.show()
    }

    const closeModal = () => {
        const modalX = Modal.getOrCreateInstance(modalRef.current)
        modalX.hide()
    }
    return (

        <div>
            <button type="button" className="btn btn-primary" onClick={openModal}>Add Employee</button>
            <TestModal modalRef={modalRef} onClose={closeModal} />
        </div>
    )
}

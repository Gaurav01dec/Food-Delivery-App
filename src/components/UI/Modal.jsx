import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = '' }) {

    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current
        if (open) {
            modal.showModal();
        }
        //cleanup function if "open" value changes 
        return () => modal.close()
    }, [open]);

    return createPortal(
        <dialog className={`modal ${className}`} ref={dialog} onClose={onClose} >
            {children}
        </dialog>
        , document.getElementById('modal'))
};

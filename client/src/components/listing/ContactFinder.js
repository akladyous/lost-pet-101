import { useState } from "react"
import axios from "axios"

export default function ContactFinder({modalRef, onClose,listingInfo}) {
    
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    
    // const setMessageValue = useCallback( (value) =>{
    //     // e.preventDefault()
    //     setMessage(value)
    // },[message] )

    const handleForm = (e) =>{
        e.preventDefault()

        const requestBody = JSON.stringify({
            pet: {pet_id: listingInfo.pet.id},
            message: message
        });
        try {
            axios.post(
                "api/listing_requests",
                requestBody,
                { headers: { "Content-type": "application/json" } })
            .then(response => {
                if (response.status === 200){
                    setMessage(response.data.message)
                    setStatus(true)
                } else{setStatus(false)}})
            .catch(error => setStatus(false))
        } catch(error){
            setStatus(false)
        }

    }; //handleForm

    // return resource ? (
    return (
        <div
            className="modal fade"
            ref={modalRef}
            id="contactFinderModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="contactFinderModal"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div
                        className="modal-header"
                        style={{ backgroundColor: "hsl(25,100%,50%)" }}
                    >
                        <h5 className="modal-title" id="exampleModalLabel">
                            Contact Finder
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            style={{ backgroundColor: "hsl(25,100%,50%)" }}
                        >
                            <span aria-hidden="true" onClick={onClose}>
                                &times;
                            </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* ---------------------- */}
                        <form>
                            <div className="form-group text-start">
                                <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                >
                                    {status
                                        ? "Request has been Successfully Completed"
                                        : "Message"}
                                </label>
                                <textarea
                                    disabled={status === true ? "disabled" : ""}
                                    rows={5}
                                    className="form-control"
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setMessage(e.currentTarget.value);
                                    }}
                                    value={message}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="submit"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={onClose}
                            style={{ backgroundColor: "hsl(25,100%,50%)" }}
                        >
                            Close
                        </button>
                        <button
                            disabled={status === true ? "disabled" : ""}
                            type="button"
                            className="btn btn-primary"
                            style={{ backgroundColor: "hsl(25,100%,50%)" }}
                            onClick={handleForm}
                        >
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ); 
    // : (<></>);
}

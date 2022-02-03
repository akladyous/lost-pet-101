
export default function ContactFinder({modalRef, onClose}) {
    return (

        <div className="modal fade" ref={modalRef}  id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="contactFinderModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header" style={{ backgroundColor: "hsl(25,100%,50%)" }}>
                    <h5 className="modal-title" id="exampleModalLabel">Contact Finder</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ backgroundColor: "hsl(25,100%,50%)" }}>
                    <span aria-hidden="true" onClick={onClose}>&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                <form>
                    <div className="form-group text-start">
                        <label htmlFor="recipient-name" className="col-form-label">Full Name</label>
                        <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="form-group text-start">
                        <label htmlFor="recipient-email" className="col-form-label">Email Address</label>
                        <input type="text" className="form-control" id="recipient-email" />
                    </div>
                    <div className="form-group text-start">
                        <label htmlFor="recipient-phone" className="col-form-label">Phone Number</label>
                        <input type="text" className="form-control" id="recipient-phone" />
                    </div>

                    <div className="form-group text-start">
                        <label htmlFor="message-text" className="col-form-label">Message</label>
                        <textarea className="form-control" id="message-text"></textarea>
                    </div>
                </form>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose} style={{ backgroundColor: "hsl(25,100%,50%)" }}>
                        Close
                    </button>
                    <button type="button" className="btn btn-primary" style={{ backgroundColor: "hsl(25,100%,50%)" }}>
                        Send Request
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

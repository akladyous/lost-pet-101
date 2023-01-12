import { useRef, useContext } from "react";
import PageHeader from "../layout/PageHeader.js";
import PageFooter from "../layout/PageFooter.js";
import { Modal } from "bootstrap";
import { useLocation } from "react-router-dom";
import { userContext } from "../user/UserProvider.js";
import { usDateFormat } from "../hocs/util.jsx";
import ContactFinder from "./ContactFinder.js";

const nullToString = (input) => {
  if (typeof input === "string") {
    return input.capitalize();
  } else {
    return "Unknown";
  }
};

export default function LostFoundInfo() {
  const { userState } = useContext(userContext);
  const location = useLocation();
  const listingInfo = location.state;
  debugger;

  const modalRef = useRef();
  const openModal = () => {
    const modalX = new Modal(modalRef.current, {
      backdrop: true,
      keyboard: true,
      focus: true,
    });
    modalX.show();
  };

  const closeModal = () => {
    const modalX = Modal.getOrCreateInstance(modalRef.current);
    modalX.hide();
  };
  return (
    <div>
      <PageHeader
        title='LOST & FOUND PETS'
        subTitle='Pet Profile'
      />
      <div className='container mt-4'>
        <div className='card-group'>
          <div className='card m-2 border-0'>
            <img
              className='img-fluid img-thumbnail d-block p-2 border-orange'
              src={listingInfo.pet.image_url}
              alt='DogImage'
              style={{
                height: "608px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* ------------------------------------------------------ */}
          <div
            className='card my-2 border-orange'
            style={{
              border: "1px solid var(--orange)",
              borderRadius: "25px",
            }}
          >
            <div
              className='card-header fs-4 font-orange-bold'
              style={{ border: "0px" }}
            >
              {listingInfo.pet.name.toUpperCase()}
            </div>

            <div class_name='row'>
              <div className='container d-flex'>
                <div className='col-md-3'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item border-0 '>Listing Type</li>
                    <li className='list-group-item border-0 '>Species</li>
                    <li className='list-group-item border-0 '>Age</li>
                    <li className='list-group-item border-0 '>Size</li>
                    <li className='list-group-item border-0 '>Breed</li>
                    <li className='list-group-item border-0 '>Color</li>
                    <li className='list-group-item border-0 '>Microchip</li>
                    <li className='list-group-item border-0 '>Height</li>
                    <li className='list-group-item border-0 '>Weight</li>
                    <li className='list-group-item border-0 '>Coat</li>
                    <li className='list-group-item border-0 '>Collar</li>
                    <li className='list-group-item border-0 '>Published At</li>
                    <li className='list-group-item border-0 '>Last Seen</li>
                  </ul>
                </div>
                <div className='col-md-9'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {listingInfo.listing_type.toUpperCase()}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {listingInfo.pet.species.capitalize()}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {"Unknown" && listingInfo.pet.age}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {listingInfo.pet.size.capitalize()}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {nullToString(listingInfo.pet.breed)}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {nullToString(listingInfo.pet.color)}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {"Unknown" && listingInfo.pet.microchip}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {nullToString(listingInfo.pet.height)}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {nullToString(listingInfo.pet.weight)}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {nullToString(listingInfo.pet.coat)}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {listingInfo.pet.collar ? "Yes" : "No"}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {usDateFormat(listingInfo.published_at)}
                    </li>
                    <li className='list-group-item border-0 text-start font-orange'>
                      {`
                                            ${nullToString(
                                              listingInfo.listing_address
                                                .address1
                                            )}
                                            ${nullToString(
                                              listingInfo.listing_address.city
                                            )}
                                            ${nullToString(
                                              listingInfo.listing_address.state
                                            )}
                                            ${nullToString(
                                              listingInfo.listing_address
                                                .zip_code
                                            )}
                                            `}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-grid gap-2 mx-2'>
          <button
            disabled={userState === true ? "" : "disable"}
            // ref={modalButton}
            type='button'
            className='btn'
            data-toggle='modal'
            data-target='#contactFinderModal'
            style={{ backgroundColor: "hsl(25,100%,50%)" }}
            onClick={openModal}
          >
            Contact Finder
          </button>
        </div>
      </div>
      {userState && (
        <ContactFinder
          modalRef={modalRef}
          onClose={closeModal}
          path={"api/users/profile"}
          listingInfo={listingInfo}
        />
      )}
      <PageFooter />
    </div>
  );
}

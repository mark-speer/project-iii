import React, { useState } from "react";
import AddressAutocomplete from "../address/AddressAutocomplete";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "../../assets/styles/modal.scss";
import { useUserContext } from "../../utils/UserContext";

const AddressModal = () => {
  const [user] = useUserContext();
  //front end code to grab address split address
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //getAddressData is a callback that gets the addressData from the AddressAutocomplete component and saves it to addressInfo
  let addressInfo;
  const getAddressData = (addressData) => {
    if (
      addressData.name &&
      addressData.lat &&
      addressData.lon &&
      addressData.zip &&
      addressData.street &&
      addressData.city &&
      addressData.state
    ) {
      addressInfo = addressData;
    }
  };
  //handleSaveChanges will save the addressInfo to places in userInfo
  const handleSaveChanges = async () => {
    if (addressInfo) {
      console.log(addressInfo); //console logs the addressInfo object which contains the data to be sent to the database
      try {
        const token = localStorage.getItem("__token__");
        let userId = user._id; //TODO - REPLACE "" WITH STATE/VARIABLE THAT WILL CARRY USERID AFTER PROFILE IS LOADED
        const response = await axios.patch(
          `/api/v1/users/updatePlaces/${userId}`,
          addressInfo,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      //Close Modal
      handleClose();
    }
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        +
      </Button>
      <Modal show={show} onHide={handleClose}>
        {/* // on click handle save */}
        {/* //post content to project3db.users.places */}
        <Modal.Header closeButton>
          <Modal.Title>Enter A New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="mb-2"
            name="name"
            type="text"
            placeholder="Location Name"
            required
          />
          <AddressAutocomplete
            getAddressData={getAddressData}
            shouldRunGetAddressDataCallback={true}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddressModal;

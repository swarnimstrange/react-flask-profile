import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import API from "./API";
import { useLocation } from "react-router-dom";

function Delete(props) {
  const [basicModal, setBasicModal] = useState(true);
  const toggleShow = () => setBasicModal(!basicModal);

  const location = useLocation();
  const { article } = location.state;

  const deleteArticles = (article) => {
    API.deleteArticles(article.id)
      .then(() => props.deletedData(article))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle style={{ color: "red" }}>
                Your data has been deleted
              </MDBModalTitle>
              <Link to="/">
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
              </Link>
            </MDBModalHeader>
            <MDBModalFooter>
            {deleteArticles(article)}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Delete;

import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import API from "./API";
import { Link } from "react-router-dom";

function NewData(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [title, setTitle] = useState(" ");
  const [img, setImg] = useState(" ");
  const [body, setBody] = useState(" ");

  const insertArticle = () => {
    API.createArticles({ title, img, body })
      .then((resp) => props.insertedData(resp))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <center>
        <h1 className="pt-3" style={{ color: "gray" }}>
          Create User's Data
        </h1>
      </center>
      <div className="pt-4"></div>
      <div className="container">
        <div>
          <form>
            <label for="form1Example1" className="pb-2">
              Name
            </label>
            <MDBInput className="mb-4" type="text" name="form1Example1" onChange={(e) => setTitle(e.target.value)}/>
            <label for="form1Example1" className="pb-2">
              Image
            </label>
            <MDBInput className="mb-4" type="text" id="form1Example2" onChange={(e) => setImg(e.target.value)}/>
            <label for="form1Example1" className="pb-2">
              Description
            </label>
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form4Example3"
              rows={4}
              onChange={(e) => setBody(e.target.value)}
            />

            <center>
              <div className="pt-2 "></div>
              <button
                type="button"
                class="btn btn-outline-primary btn-lg btn-block pr-2"
                onClick={() => {
                  insertArticle();
                  toggleShow();
                }}
              >
                Create
              </button>
            </center>
          </form>
        </div>
        <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle style={{color: "black"}}> New Data Added Succesfully </MDBModalTitle>
              <Link to="/"> <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn></Link>
            </MDBModalHeader>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </>
      </div>
    </>
  );
}

export default NewData;

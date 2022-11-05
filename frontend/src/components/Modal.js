import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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

function ModalList(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const location = useLocation();
  const { article } = location.state;

  const [title, setTitle] = useState(article.title);
  const [img, setImg] = useState(article.img);
  const [body, setBody] = useState(article.body);

  const updateArticle = () => {
    API.updateArticles(article.id, { title, img, body })
      .then((resp) => props.updatedData(resp))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <center>
        <h1 className="pt-3" style={{ color: "gray" }}>
          Update User's Data
        </h1>
      </center>
      <div className="pt-4"></div>
      <div className="container">
        <div class="row">
          <div class="col-lg-4">
            <center>
              <img
                className="img-fluid"
                src={img}
                waves
                style={{
                  borderRadius: "10px",
                  height: "350px",
                  width: "310px",
                }}
              />
            </center>
          </div>

          <div class="col-lg-8">
            <form>
              <label for="form1Example1" className="pb-2">
                Name
              </label>
              <MDBInput
                className="mb-4"
                type="text"
                name="form1Example1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="form1Example1" className="pb-2">
                Image
              </label>
              <MDBInput
                className="mb-4"
                type="text"
                id="form1Example2"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <label for="form1Example1" className="pb-2">
                Description
              </label>
              <MDBInput
                wrapperClass="mb-4"
                textarea
                id="form4Example3"
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />

              <center>
                <div className="pt-2 "></div>
                <button
                  type="button"
                  class="btn btn-outline-info btn-lg btn-block pr-2"
                  onClick={() => {
                    updateArticle();
                    toggleShow();
                  }}
                >
                  Update Information
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle style={{color: "black"}}> Data Updated Succesfully </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </>
    </>
  );
}

export default ModalList;

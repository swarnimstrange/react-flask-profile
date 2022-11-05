import React from "react";
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function ArticleList(props) {
  return (
    <div>
      <MDBRow>
        {props.articles &&
          props.articles.map((article) => {
            return (
              <MDBCol style={{ padding: "15px" }} key={article.id}>
                <MDBCard style={{ width: "18rem", borderRadius: "10px" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src={article.img}
                    waves
                    style={{
                      borderRadius: "10px",
                      height: "350px",
                      width: "310px",
                    }}
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ color: "black" }}>
                      {article.title}
                    </MDBCardTitle>
                    <hr />
                    <MDBCardText style={{ color: "black" }}>
                      {article.body}
                    </MDBCardText>
                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-lg-6 text-left">
                          <Link
                            to="/update"
                            state={{
                              article: article,
                            }}
                          >
                            <button class="btn btn-info w-100">Update</button>
                          </Link>
                        </div>
                        <div class="col-lg-6 text-right">
                          <Link
                            to="/delete"
                            state={{
                              article: article,
                            }}
                          >
                            <button
                              class="btn btn-danger w-100"
                            >
                              Delete
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
      </MDBRow>
    </div>
  );
}

export default ArticleList;

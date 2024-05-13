import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

const AccountDetails = () => {
  const [theme] = useThemeHook();
  return (
    <>
      <MDBCol lg="8" style={{ width: "100%" }}>
        <MDBCard
          className={`${
            theme ? "bg-light-black text-light" : "bg-light text-black"
          } mb-4`}
          border={theme ? "warning" : "primary"}
          style={{ width: "100%" }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Full Name</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">Johnatan Smith</MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText>example@example.com</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Phone</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText>(097) 234-5678</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Mobile</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText>(098) 765-4321</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
};

export default AccountDetails;

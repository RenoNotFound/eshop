import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item className="d-flex flex-row align-items-center">
        {step1 ? (
          <>
            <LinkContainer to="/login" className="px-2">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <i style={{ color: "green" }} class="fas fa-check-circle"></i>
          </>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="d-flex flex-row align-items-center">
        {step2 ? (
          <>
            <LinkContainer to="/shipping" className="px-2">
              <Nav.Link>Shipping</Nav.Link>
            </LinkContainer>
            <i style={{ color: "green" }} class="fas fa-check-circle"></i>
          </>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="d-flex flex-row align-items-center">
        {step3 ? (
          <>
            <LinkContainer to="/payment" className="px-2">
              <Nav.Link>Payment</Nav.Link>
            </LinkContainer>
            <i style={{ color: "green" }} class="fas fa-check-circle"></i>
          </>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="d-flex flex-row align-items-center">
        {step4 ? (
          <>
            <LinkContainer to="/placeorder" className="px-2">
              <Nav.Link>Place Order</Nav.Link>
            </LinkContainer>
            <i style={{ color: "green" }} class="fas fa-check-circle"></i>
          </>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;

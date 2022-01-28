import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Done from "./Done";

const CheckoutSteps = ({ step1, step2, step3, step4, disabled }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item className="d-flex flex-row align-items-center">
        {step1 ? (
          <>
            {disabled ? (
              <Nav.Link disabled>Sign In</Nav.Link>
            ) : (
              <LinkContainer to="/login" className="px-2">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            )}
            <Done isDone={step1} />
          </>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="d-flex flex-row align-items-center">
        {step2 ? (
          <>
            {disabled ? (
              <Nav.Link disabled>Shipping</Nav.Link>
            ) : (
              <LinkContainer to="/shipping" className="px-2">
                <Nav.Link>Shipping</Nav.Link>
              </LinkContainer>
            )}
            <Done isDone={step2} />
          </>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="d-flex flex-row align-items-center">
        {step3 ? (
          <>
            {disabled ? (
              <Nav.Link disabled>Payment</Nav.Link>
            ) : (
              <LinkContainer to="/payment" className="px-2">
                <Nav.Link>Payment</Nav.Link>
              </LinkContainer>
            )}
            <Done isDone={step3} />
          </>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="d-flex flex-row align-items-center">
        {step4 ? (
          <>
            {disabled ? (
              <Nav.Link disabled>Place Order</Nav.Link>
            ) : (
              <LinkContainer to="/placeorder" className="px-2">
                <Nav.Link>Place Order</Nav.Link>
              </LinkContainer>
            )}
            <Done isDone={step4} />
          </>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;

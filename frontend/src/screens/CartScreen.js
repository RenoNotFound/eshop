import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    console.log("remove");
  };

  const checkoutHandler = () => {
    console.log("checkout");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty, <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush" className="cart-items">
            {cartItems.map((cartItem) => (
              <ListGroup.Item key={cartItem.productId}>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={2}>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${cartItem.productId}`}>
                      <strong>{cartItem.name}</strong>
                    </Link>
                  </Col>
                  <Col md={2} className="d-flex justify-content-center">
                    <strong>{`$ ${cartItem.price}`}</strong>
                  </Col>
                  <Col md={2} className="d-flex justify-content-center">
                    <Form.Control
                      as="select"
                      value={cartItem.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(cartItem.productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(cartItem.countInStock).keys()].map(
                        (qtyNum) => (
                          <option key={qtyNum + 1} value={qtyNum + 1}>
                            {qtyNum + 1}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </Col>
                  <Col md={2} className="d-flex justify-content-center">
                    <Button
                      type="button"
                      variant="dark"
                      onClick={() => removeFromCartHandler(cartItem.productId)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                items
              </h2>
              <strong>
                ${" "}
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <Button
                type="button"
                className="btn-dark btn-lg px-3"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

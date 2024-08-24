import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../store/actions/cart-action";

const CartPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  // to get the value of qty from the url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const qty = Number(searchParams.get("qty"));

  const dispatch = useDispatch();

  function removeCartItemHandler() {
    dispatch(removeFromCart(productId));
  }

  function checkoutHandler() {
    navigate("/login?redirect=shipping");
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">Go Back</Link>{" "}
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((count) => (
                        <option key={count + 1} value={count + 1}>
                          {count + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={removeCartItemHandler}
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
        <Card className="p-3 mt-5">
          <ListGroup varient="flush">
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              Items
            </h2>
            <Row>
              <Col>Total Price:</Col>
              <Col>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </Col>
            </Row>

            <div className="d-grid mt-3">
              <Button
                type="button"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </div>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;

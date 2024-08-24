import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import cardImage from "../assets/images/airpods.jpg";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={`http://localhost:8000/${product.image}`}
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as={"div"}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as={"div"}>
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as={"h3"}>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

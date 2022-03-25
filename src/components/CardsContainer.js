import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { url } from "../helpers/url";

function CardsContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    axios
      .get(url)
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = async (id) => {
    axios
      .delete(url + id)
      .then(() => {
        getProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {products.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <Card key={id}>
            <Card.Img variant="top" style={{ width: "20vw" }} src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Button onClick={() => deleteProduct(id)}>Eliminar</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CardsContainer;

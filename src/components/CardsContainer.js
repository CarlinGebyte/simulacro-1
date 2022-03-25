import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { url } from "../helpers/url";
import { BodyCard, CardContain, CardItem, HeaderImgCard, ImgCard } from "../styles/Styles";

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
    <CardContain>
      {products.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <CardItem key={id}>
            <HeaderImgCard>
              <ImgCard variant="top" style={{ width: "20vw" }} src={image} />
            </HeaderImgCard>
            <BodyCard>
              <Card.Title>
                {name} <span>${price}</span>
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="warning" onClick={() => deleteProduct(id)}>
                Eliminar
              </Button>
            </BodyCard>
          </CardItem>
        );
      })}
    </CardContain>
  );
}

export default CardsContainer;

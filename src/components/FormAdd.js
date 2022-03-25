import axios from "axios";
import React, { useEffect, useState } from "react";
import { UploadImage } from "../helpers/uploadImage";
import { url } from "../helpers/url";

function FormAdd() {
  const initiaState = {
    name: "",
    image: "",
    price: "",
    description: "",
  };
  const [product, setProduct] = useState(initiaState);

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, product)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setProduct(initiaState);
  };

  const handleChanged = ({ target }) => {
    setProduct({
      ...product,
      [target.name]: target.value,
    });
  };

  const handleImage = (e) => {
    console.log("submiting image");
    const file = e.target.files[0];
    UploadImage(file).then((result) => {
      setProduct({
        ...product,
        imagen: result,
      }).catch((error) => {
        console.log(error);
      });
    });
  };

  return (
    <div>
      <h2>Agrega una sudadera</h2>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            type="text"
            id="name"
            onChange={handleChanged}
            placeholder="Ingresa el nombre de la sudadera"
          />
        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input
            name="price"
            id="price"
            type="number"
            onChange={handleChanged}
            placeholder="Precio de la sudadera"
          />
        </div>
        <div>
          <label htmlFor="description">Descripción</label>
          <input
            name="description"
            id="description"
            onChange={handleChanged}
            placeholder="Ingrese una descripción"
          />
        </div>
        <div>
          <label htmlFor="image">Imagen</label>
          <input name="image" id="image" type="file" onChange={handleImage} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default FormAdd;

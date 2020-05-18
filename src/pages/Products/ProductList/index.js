import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../Context";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Styles
import { Container } from "./styles";
import { ButtonSquare } from "../../../components/Buttons/styles";

export default function ProductList() {
  const [itemsToShow, setItemsToShow] = useState([{}, {}, {}, {}, {}, {}]);
  const context = useContext(ProductContext);

  function handleItemsToShow() {
    const newItemsToShow = [...itemsToShow, {}, {}, {}];
    setItemsToShow(newItemsToShow);
  }

  function showBackupCards() {
    return itemsToShow.map((item, index) => <ProductCard key={index} />);
  }

  function showProductCards() {
    return context.products.map(
      (product, index) =>
        index < itemsToShow.length && (
          <Link
            onClick={() => {
              context.findSelectedProduct(product.sys.id);
            }}
            key={product.sys.id}
            to="/detalhes-do-produto"
          >
            <ProductCard
              loaded
              className="product_card"
              img={product.fields.img.fields.file.url}
              title={product.fields.title}
              price={product.fields.price}
            />
          </Link>
        )
    );
  }

  return (
    <Container>
      <div className="products_list">
        {context.products.length < 1 ? showBackupCards() : showProductCards()}
      </div>

      <div className="button_container">
        <ButtonSquare mini transparent onClick={handleItemsToShow}>
          ver mais produtos
        </ButtonSquare>
      </div>
    </Container>
  );
}

import React from "react";

// Components
import { Title } from "../../../components/Title/styles";
import Gallery from "./Gallery";
import Details from "./Details";
import RelatedProducts from "./RelatedProducts/index";

// Styles
import { Container } from "./styles";
import { ProductConsumer } from "../../../Context";

export default function ProductDetails() {
  return (
    <Container>
      <Title>Animais > Cães > Rações</Title>

      <div className="content">
        {/* <div className="gallery_and_details_wrapper">
          <Gallery />
          <Details />
        </div> */}

        <ProductConsumer>
          {(value) => {
            const { title, price, description } = value.selectedProduct.fields;

            return (
              <div className="gallery_and_details_wrapper">
                <Gallery />
                <Details
                  title={title}
                  price={price}
                  description={description}
                />
              </div>
            );
          }}
        </ProductConsumer>

        <RelatedProducts />
      </div>
    </Container>
  );
}

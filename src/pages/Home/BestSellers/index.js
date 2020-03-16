import React from "react";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Flickity slider
import Slider from "../../../components/Slider/index";

// Styles
import { Styles as Section } from "./styles";
import { Title } from "../../../components/Title/styles";
import { ButtonSquare } from "../../../components/Buttons/styles";

export default function BestSellers() {
  return (
    <Section className="section_margin">
      <Title>Os mais vendidos</Title>

      <div className="slider_wrapper">
        <Slider
          options={{
            autoPlay: true,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
            freeScroll: true
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>

      <div className="content">
        <div className="btn_wrapper">
          <ButtonSquare mini transparent>
            <a href="#">Ver mais produtos</a>
          </ButtonSquare>
        </div>
      </div>
    </Section>
  );
}

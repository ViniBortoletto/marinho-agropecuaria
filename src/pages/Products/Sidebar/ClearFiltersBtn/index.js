import React from 'react';
import { ButtonPill } from '../../../../components/Buttons/styles';
import { useProduct } from '../../../../contexts/Product';
import { Container } from './styles';

function ClearFiltersBtn() {
  const { products, handleSortProducts } = useProduct();

  function handleClearFilters() {
    localStorage.setItem('categories', JSON.stringify([]));
    localStorage.setItem('price', JSON.stringify([]));
    localStorage.setItem('rating', JSON.stringify([]));

    const categoriesElmts = document.querySelectorAll('.categories .checkbox');
    categoriesElmts.forEach((elmt) => {
      elmt.checked = false;
    });

    const pricesElmts = document.querySelectorAll('.prices .radio');
    pricesElmts.forEach((elmt) => {
      elmt.checked = false;
    });

    const ratingElmts = document.querySelectorAll('.rating .radio');
    ratingElmts.forEach((elmt) => {
      elmt.checked = false;
    });

    // Update Products List
    const sortOption = JSON.parse(localStorage.getItem('sortOption'));
    handleSortProducts(sortOption, products);
  }

  return (
    <Container>
      <ButtonPill onClick={handleClearFilters} transparent mini>
        Limpar filtros
      </ButtonPill>
    </Container>
  );
}

export default ClearFiltersBtn;

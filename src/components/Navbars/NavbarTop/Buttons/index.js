import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../../contexts/Product';
import { IconSphere } from '../../../IconSphere/styles';
import { ButtonPill } from '../../../Buttons/styles';

export default function Buttons() {
  const context = useContext(ProductContext);
  const { cart, favoriteProducts } = context;
  const [favCounter, setFavCounter] = useState(0);

  useEffect(() => {
    setFavCounter(favoriteProducts.length);
  }, [favoriteProducts]);

  return (
    <div className="btn_container">
      <div className="user_container">
        <Link to="/login">
          <button type="button" className="btn_user">
            <IconSphere>
              <i className="fas fa-user" />
            </IconSphere>
            <p>Olá, faça login ou cadastre-se </p>
          </button>
        </Link>

        <div className="hidden_content">
          <Link to="/login">
            <ButtonPill mini id="login_email" type="button">
              <i className="fas fa-at" />
              Entar com email
            </ButtonPill>
          </Link>

          <ButtonPill mini id="login_facebook" type="button">
            <i className="fab fa-facebook-f" />
            Entar com Facebook
          </ButtonPill>

          <ButtonPill mini id="login_google" type="button">
            <i className="fab fa-google" />
            Entar com Google
          </ButtonPill>

          <div className="line" />

          <p>Não possui um conta?</p>
          <Link to="/cadastro">
            <ButtonPill transparent mini id="signup" type="button">
              Cadastre-se
            </ButtonPill>
          </Link>
        </div>
      </div>

      <Link to="/produtos/favoritos">
        <button type="button" className="btn_favorites">
          <IconSphere>
            <i className="fas fa-heart" />
            <span className="counter">{favCounter}</span>
          </IconSphere>
        </button>
      </Link>

      <Link to="/carrinho">
        <button type="button" className="btn_cart">
          <IconSphere>
            <i className="fas fa-shopping-cart" />
            <span className="counter">{cart.length}</span>
          </IconSphere>
        </button>
      </Link>
    </div>
  );
}

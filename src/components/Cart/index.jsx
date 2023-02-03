// Styles
import styles from "./Cart.module.scss";

// Hooks
import { useState } from "react";
import { Drawer } from "antd";

// Components
import ProductCart from "../ProductCart";
import Offcanvas from "react-bootstrap/Offcanvas";

// Redux
import { useSelector } from "react-redux";

export default function Cart({ handleCloseCart, handleOpenCart }) {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <>
      <Offcanvas show={handleOpenCart} placement="end" onHide={handleCloseCart} className={styles.cart__container}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Meu carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))
          ) : (
            <p>Não há produtos registrados</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

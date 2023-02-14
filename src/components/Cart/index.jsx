// Styles
import styles from "./Cart.module.scss";

// Components
import ProductCart from "../ProductCart";
import Offcanvas from "react-bootstrap/Offcanvas";

// Redux
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/cart/cart.selector";
import Link from "next/link";

export default function Cart({ handleCloseCart, handleOpenCart }) {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const totalPrice = parseFloat(useSelector(selectTotalPrice));

  return (
    <>
      <Offcanvas
        show={handleOpenCart}
        placement="end"
        onHide={handleCloseCart}
        className={styles.cart__container}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Meu carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.cart__body}>
          <div>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))
            ) : (
              <p>Nenhum produto no seu carrinho.</p>
            )}
          </div>

          <div className={styles.total__price}>
            
            <p>Total: <span>R${totalPrice.toFixed(2)}</span></p>
            <Link href='/' className={styles.link__checkout}>Finalizar compra</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

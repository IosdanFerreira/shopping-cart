// Styles
import styles from "./ProductCart.module.scss";

// Structures
import Image from "next/image";

// Redux
import { useDispatch } from "react-redux";
import { removeProductsToCart } from "@/redux/cart/slice";

// Icons
import { IoCloseSharp } from "react-icons/io5";

export default function ProductCart({ product }) {
  const dispatch = useDispatch();

  function handleRemoveProductToCart(event) {
    event.preventDefault()
    dispatch(removeProductsToCart(product));
  }
  
  const subTotal = parseFloat(product.price) * parseFloat(product.quantity)

  return (
    <div className={styles.product__cart__container}>
      <button
        className={styles.button__remove__product__to__cart}
        onClick={handleRemoveProductToCart}
      >
        <IoCloseSharp />
      </button>
      <figure className={styles.product__cart__img}>
        <Image src={product.images[0].url} alt={product.name} fill />
      </figure>

      <div className={styles.product__cart__text}>
        <p>{product.name.substring(0, 40) + "..."}</p>
        <span>{product.price}</span>

        <div className={styles.product__cart__subtotal}>
          <span>{product.quantity}</span>
          <span>Subtotal{subTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

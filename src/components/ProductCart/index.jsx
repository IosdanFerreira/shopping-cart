// Styles
import styles from "./ProductCart.module.scss";

// Structures
import Image from "next/image";

// Redux
import { useDispatch } from "react-redux";
import { removeProductsToCart, increaseProductToCart, decreaseProductToCart } from "@/redux/cart/slice";

// Icons
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


export default function ProductCart({ product }) {
  const dispatch = useDispatch();


  // Add product to cart
  function handleRemoveProductToCart(event) {
    event.preventDefault();
    dispatch(removeProductsToCart(product));
  }

  // Increase the quantity that the product to  cart
  function handleIncreaseProductToCart() {
    dispatch(increaseProductToCart(product))
  }

   //Decrease the quantity that the product to cart
   function handleDecreaseProductToCart() {
    dispatch(decreaseProductToCart(product))
  }

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

      <div className={styles.product__cart__content}>
        <div className={styles.product__cart__info}>
          <p>{product.name.substring(0, 40) + "..."}</p>

          <div className={styles.product__cart__quantity}>
            <button type="button" onClick={handleDecreaseProductToCart}>
              <AiOutlineMinus />
            </button>
            {product.quantity}

            <button type="button" onClick={handleIncreaseProductToCart}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>

        <span>R$ {product.price}</span>

        <div className={styles.product__cart__subtotal}></div>
      </div>
    </div>
  );
}

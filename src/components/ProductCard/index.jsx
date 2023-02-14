// Styles
import styles from "./ProductCard.module.scss";

// Structures
import Link from "next/link";
import Image from "next/image";
import { Rate } from "antd";

// icons
import { BsCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Redux
import { useDispatch } from "react-redux";
import { addProductsToCart } from "@/redux/cart/slice";

// Notification add product to cart
import { notification } from "antd";
import { useEffect } from "react";

export default function ProductCard({
  product,
  url,
  showNotificationAddProduct,
}) {
  // Message notification add product to cart
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = () => {
    api.success({
      placement: "bottomLeft",
      duration: 2,
      message: "Produto adicionado ao carrinho",
      description: "",
    });
  };
  // end

  // Dispatch functions from cart reducer
  const dispatch = useDispatch();

  function AddProductToCart() {
    dispatch(addProductsToCart(product));
    openNotificationWithIcon();
  }

  function addProductToFavorites() {
    console.log(product);
  }
  // end

  return (
    <>
      <div className={styles.product__container}>
        <div className={styles.product__image}>
          <button
            type="button"
            className={styles.button__add__favorites}
            onClick={addProductToFavorites}
          >
            <AiOutlineHeart />
          </button>
          <Link href={url}>
            <figure>
              <Image
                src={product.images[0].url}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </figure>
          </Link>
        </div>

        <Link href={url}>
          <div className={styles.product__content}>
            <span className={styles.product__mark}>{product.mark}</span>

            <p className={styles.product__name}>
              {product.name.substring(0, 60) + "..."}
            </p>

            <Rate
              className={styles.product__rate}
              disabled
              allowHalf
              defaultValue={product.rate}
            />

            <span className={styles.product__price}>R$ {product.price}</span>
          </div>
        </Link>
        <button
          type="button"
          className={styles.button__add__cart}
          onClick={AddProductToCart}
        >
          <BsCartPlusFill /> Adicionar ao carrinho
        </button>
      </div>

      {/* Notification message */}
      {contextHolder}
    </>
  );
}

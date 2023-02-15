// Styles
import styles from "./Header.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";

// Redux features
import { useSelector, useDispatch } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithGoogle, singOutWhitGoogle } from "@/redux/user/slice";
import { selectProductsCount } from "@/redux/cart/cart.selector";

// Components
import { Space, Badge } from "antd";
import Cart from "@/components/Cart";

// Icons
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";

// Hooks
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Header() {
  // Dispatch reference
  const dispatch = useDispatch();

  // Selectors
  const productsCount = useSelector(selectProductsCount);

  function login() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(signInWithGoogle(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth)
      .then(() => {
        dispatch(singOutWhitGoogle(null));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Open and close Cart
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  // Router
  const router = useRouter();

  // Search

  const formik = useFormik({
    initialValues: {
      searchProduct: "",
    },
    onSubmit: (values) => {
      if (values !== "" && values !== null) {
        router.push(`/search/${values.searchProduct.replace(/[- ]+/g, "-")}`);
        formik.resetForm();
      }
      
    },
    validationSchema: Yup.object({
      searchProduct: Yup.string().required('Campo vazio')
    })
  });

  return (
    <>
      <header className={styles.header}>
        <section className={styles.top__header}>
          <Container>
            <Row>
              <Col xs="2" sm="3" className={styles.col__header__logo}>
                <Link href="/">
                  <figure>
                    <Image
                      src="/images/shopping-cart-logo.png"
                      alt="Shopping Cart logo"
                      width={30}
                      height={30}
                    />
                  </figure>
                  <h1>
                    Shopping <span>Cart</span>
                  </h1>
                </Link>
              </Col>

              <Col xs="7" md="6" lg="5" className={styles.col__search__filter}>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Qual produto deseja?"
                    id="searchProduct"
                    name="searchProduct"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <button type="submit">
                    <HiOutlineMagnifyingGlass />
                  </button>
                </form>
              </Col>

              <Col xs="3" md="3" lg="4" className={styles.col__header__options}>
                <Link href="/">
                  <AiOutlineHeart />
                  <span>
                    Meus <br /> <span>Favoritos</span>
                  </span>
                </Link>
                <Link href="/login">
                  <AiOutlineUser />
                  <span>
                    Minha conta <br /> <span>Entrar/Cadastro</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className={styles.button_badge__cart}
                  onClick={handleOpenCart}
                >
                  <RiShoppingCartLine />
                  <Space className={styles.space__badge__cart}>
                    <Badge
                      count={productsCount}
                      color="#e99700"
                      className={styles.badge__cart}
                    />
                  </Space>
                </button>
                <button
                  type="button"
                  className={styles.button_open__menu__mobile}
                >
                  <HiMenuAlt1 />
                </button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.container__nav__header}>
          <Container>
            <Row>
              <Col xs="12">
                <nav className={styles.nav__categories}>
                  <ul>
                    <li>
                      <button
                        type="button"
                        className={styles.button__open__menu_categories}
                      >
                        <HiMenuAlt1 /> Todas as categorias
                      </button>
                    </li>
                    <li>
                      <Link href="/">Atendimento ao cliente</Link>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
          </Container>
        </section>
      </header>

      {openCart && (
        <Cart handleOpenCart={openCart} handleCloseCart={handleCloseCart} />
      )}
    </>
  );
}

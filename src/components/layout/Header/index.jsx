// Styles
import styles from "./Header.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Redux features
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "@/redux/rootReducer";

import { signIn, singOut } from "@/redux/user/slice";
import { auth, googleProvider } from "../../../lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Header() {
  // Dispatch
  const dispatch = useDispatch();

  const userName = useSelector(
    (rootReducer) => rootReducer.userReducer.userName
  );

  function login() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        dispatch(signIn(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <header>
        <section className={styles.top__header}>
          <Container>
            <Row>
              <Col sm="6" className={styles.top__header__left}>
                <button type="button" onClick={login}>
                  login
                </button>
              </Col>
              <Col sm="6" className={styles.top__header__right}>
                <p>{userName}</p>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
}

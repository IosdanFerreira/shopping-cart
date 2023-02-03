// Styles
import styles from "./login.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function login() {
  return (
    <main>
      <Container>
        <Row>
          <Col sm="6" className={styles.left__login}>
            <figure>
              <Image
                src="/images/login-vector.png"
                alt="Shopping Cart logo"
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

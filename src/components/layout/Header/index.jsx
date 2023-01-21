// Styles
import styles from "./Header.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <>
      <header>
        <section className={styles.top__header}>
          <Container>
            <Row>
              <Col sm="6" className={styles.top__header__left}>
                <p>header</p>
              </Col>
              <Col sm="6" className={styles.top__header__right}>
                <p>header</p>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
}

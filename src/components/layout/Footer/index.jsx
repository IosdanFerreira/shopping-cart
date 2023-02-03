// Styles
import styles from "./Footer.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

// Icons
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export default function Footer() {
  //get year for copyright date
  const currentYear = new Date().getFullYear().toString();

  return (
    <>
      <footer>
        <section className={styles.footer__box__container}>
          <Container>
            <Row>
              <Col md="6" lg="3" className={styles.col__footer__contact}>
                <h4>Encontre-nos:</h4>

                <p>
                  Endereço de teste, R. Teste N° 123, <br /> CEP: 12.325-00
                </p>
                <p>(11) 3255-5511</p>
                <p>email@teste.com.br</p>

                <div className={styles.social__footer}>
                  <Link href="https://www.youtube.com/" target="_blank">
                    <AiFillYoutube />
                  </Link>
                  <Link href="https://www.instagram.com/" target="_blank">
                    <AiOutlineInstagram />
                  </Link>
                  <Link href="https://www.facebook.com/" target="_blank">
                    <AiOutlineFacebook />
                  </Link>
                </div>
              </Col>
              <Col md="6" lg="3" className={styles.col__footer__faq}>
                <h4>Atendimento ao cliente</h4>

                <Link href="/" target="_blank">
                  Sua conta
                </Link>
                <Link href="/" target="_blank">
                  Seu pedidos
                </Link>
                <Link href="/" target="_blank">
                  Configurações de pagamento
                </Link>
                <Link href="/" target="_blank">
                  Devoluções e reembolsos
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col xs="12" className={styles.col__copyright}>
                <p>
                  {" "}
                  <AiOutlineCopyrightCircle /> {currentYear} | Todos os direitos
                  reservados - Iosdan Ferreira
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
}

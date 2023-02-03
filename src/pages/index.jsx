// Styles
import styles from "./Home.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";

// Components
import MiniCardBanner from "@/components/MiniCardBanner";
import ProductCard from "@/components/ProductCard";

// utils
import { request } from "@/lib/dato-cms";

export default function Home({ products, miniCardBanners }) {
  console.log(miniCardBanners);

  return (
    <main>
      {/* Mini card banner */}
      <section>
        <Container>
          <Row>
            {miniCardBanners.allMiniCardBanners.map((card) => (
              <Col md="6" lg='4' key={card.id}>
                <Link href='/'>
                  <MiniCardBanner
                  background={card.background.url}
                  title={card.titleCard}
                  text={card.textCard}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Products */}
      <section>
        <Container>
          <Row>
            <Col xs='12' className={styles.col__products}>
              {products.allProdutos.map((product) => (
                <ProductCard key={product.id} product={product} url='/' />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

// Requests and next functions that get content from CMS
const PRODUCTS_QUERY = `
query products {
  allProdutos {
    id
    mark
    name
    rate
    price
    images {
      url
    }
    categorie
  }
}
`;

const MINI_CARD_BANNER_QUERY = `
query miniCardBanner {
  allMiniCardBanners {
    id
    background {
      url
    }
    titleCard
    textCard
  }
}
`;

export async function getServerSideProps() {
  const products = await request({
    query: PRODUCTS_QUERY,
    variables: { limit: 20 },
  });

  const miniCardBanners = await request({
    query: MINI_CARD_BANNER_QUERY,
    variables: { limit: 20 },
  });
  
  return {
    props: { products, miniCardBanners },
  };
}

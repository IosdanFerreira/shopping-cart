// Styles
import styles from "./Search.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Components
import ProductCard from "@/components/ProductCard";

// Hooks
import { useRouter } from "next/router";

// Utils
import { request } from "@/lib/dato-cms";

export default function Search({ products }) {
  const router = useRouter();
  const searchQuery = router.query.search.toLowerCase();
  const lowerProduct = searchQuery.toLowerCase();

  // Regex search product
  const accent = "ãàáäâèéëêìíïîòóöôùúüûñç/[- ]+/·/_,:;";
  const noAccent = "aaaaaeeeeiiiioooouuuunc-------------";

  const searchProduct = products.allProdutos.filter((product) => {
    if (
      product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ +/g, "-")
        .includes(
          lowerProduct
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/ +/g, "-")
        )
    ) {
      return true;
    }
  });

  return (
    <main>
      <Container>
        <Row>
          <Col xs="12">
            <p className={styles.text__result}>
              Resultados para <span>{`"${router.query.search}"`}</span>
            </p>
          </Col>
          <Col xs="12" className={styles.col__products}>
            {searchProduct.length > 0
              ? searchProduct.map((product, index) => (
                  <ProductCard
                    key={index}
                    url={`/products/${product.id}`}
                    product={product}
                  />
                ))
              : "Nenhum produto encontrado!"}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

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

export async function getServerSideProps() {
  const products = await request({
    query: PRODUCTS_QUERY,
    variables: { limit: 20 },
    revalidate: 120,
    fallback: true,
  });

  return {
    props: { products },
  };
}

// Styles
import styles from "./Products.module.scss";

// Structures
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

// Hooks
import { useRouter } from "next/router";
import { useState } from "react";

// Utils
import { request } from "@/lib/dato-cms";

// React image magnify
import ReactImageMagnify from "react-image-magnify";
import { Rate } from "antd";

export default function Product({ products }) {
  const router = useRouter();
  const { id } = router.query;
  const singleProduct = products.allProdutos.find(
    (product) => product.id === id
  );

  const [mainImage, setMainImage] = useState(singleProduct.images[0].url);

  // Page width
  const pageWidth = window.screen.width;

  return (
    <>
      {singleProduct && (
        <section className={styles.product__single__container}>
          <Container>
            <Row>
              <Col lg="7" className={styles.col__product__images}>
                <div className={styles.box__small__images}>
                  {singleProduct.images.map((item, index) =>
                    index < 4 ? (
                      <button
                        key={index}
                        className={styles.small__images}
                        onClick={() => {
                          setMainImage(item.url);
                        }}
                      >
                        <figure>
                          <Image
                            src={item.url}
                            alt={item.url}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </figure>
                      </button>
                    ) : (
                      ""
                    )
                  )}
                </div>

                <div className={styles.box__main__image}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: `${mainImage.name}`,
                        isFluidWidth: true,
                        src: `${mainImage}`,
                      },
                      largeImage: {
                        src: `${mainImage}`,
                        width: 1000,
                        height: 1600,
                      },
                      lensStyle: {
                        background: "hsla(0, 0%, 100%, .3)",
                        border: "1px solid #ccc",
                      },
                      enlargedImagePortalId: "portal",
                      enlargedImageContainerDimensions: {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  />
                </div>
              </Col>

              <Col lg="5" className={styles.col__product__content}>
                {pageWidth > 992 ? (
                  <div
                    id="portal"
                    className={`${styles.portal__container} portal`}
                  ></div>
                ) : ''}

                <h4>{singleProduct.name}</h4>
                <p className={styles.single__product__mark}>
                  Marca: {singleProduct.mark}
                </p>

                <Rate
                  className={styles.singleProduct__rate}
                  disabled
                  allowHalf
                  defaultValue={singleProduct.rate}
                />

                <h4>R${singleProduct.price}</h4>

                <p className={styles.singleProduct__installment}>
                  Em até 10x de {(singleProduct.price / 10).toFixed(2)} sem
                  juros.
                </p>

                <button
                  type="button"
                  className={styles.singleProduct__buy__button}
                >
                  Comprar
                </button>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
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

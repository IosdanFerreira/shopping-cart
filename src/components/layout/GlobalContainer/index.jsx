import Head from "next/head";

// Layout components
import Header from "../Header";
import Footer from "../Footer";

export default function GlobalContainer({ children }) {
  return (
    <>
      <Head>
        <title>Shopping Cart | eCommerce</title>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
    </>
  );
}

import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};
export default async function SSRPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
      <MeowArticle />
    </>
  );
}

// SSR
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

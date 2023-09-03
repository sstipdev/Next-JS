import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

/**
 * revalidate default값은 false이기에 ssg로 동작한다.
 * revalidate 0의 값은 ssr 처럼 동작하여 요청이 올때마다 만든다.
 * revalidate 3의 값은 3초 마다 revalidate 처리를 한다.
 */
// export const revalidate = 3;

export default async function ProductsPage() {
  throw new Error();
  const products = await getProducts();
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

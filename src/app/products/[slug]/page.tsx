// 동적 라우팅 타입

import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";
import Image from "next/image";

/**
 * revalidate default값은 false이기에 ssg로 동작한다.
 * revalidate 0의 값은 ssr 처럼 동작하여 요청이 올때마다 만든다.
 * revalidate 3의 값은 3초 마다 revalidate 처리를 한다.
 */
export const revalidate = 3;

// 폴더명이 [slug] 가 아닌 [item] 이라면 params의 키 값은 slug가 아닌 item으로 해야한다.
type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
    </>
  );
}

// Next JS에서 약속한 함수
// 특정한 경로 한에서 페이지를 만듬
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

// 동적 라우팅 타입

import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

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

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product} 제품 설명 페이지</h1>;
}

// Next JS에서 약속한 함수
// 특정한 경로 한에서 페이지를 만듬
export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}

// 동적 라우팅 타입

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

export default function PantsPage({ params }: Props) {
  // 상품 라우터 내의 notFound 함수 호출
  if (params.slug === "nothing") {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

// Next JS에서 약속한 함수
// 특정한 경로 한에서 페이지를 만듬
export function generateStaticParams() {
  const products = ["pants", "skirt"];

  return products.map((product) => ({
    slug: product,
  }));
}

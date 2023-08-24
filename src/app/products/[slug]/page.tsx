// 동적 라우팅 타입
// 폴더명이 [slug] 가 아닌 [item] 이라면 params의 키 값은 slug가 아닌 item으로 해야한다.
type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
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

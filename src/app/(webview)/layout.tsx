import type { Metadata } from "next";

/**
 * 앱 웹뷰 전용 라우트 그룹. 약관·정책·문의 화면이 여기 들어간다.
 * 검색으로 들어올 화면이 아니고, 루트 메타데이터를 그대로 물려받으면
 * 8개 라우트가 같은 title·description·og 를 공유하게 되므로 색인에서 뺀다.
 * 링크는 따라가게 두어 푸터에서 이어지는 경로가 끊기지 않도록 한다.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function WebviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

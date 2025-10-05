// next.config.ts
const repo = "gemcalculator";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",              // out/에 정적 파일 생성
  images: { unoptimized: true }, // next/image 정적 모드
  trailingSlash: true,           // 새로고침 404 방지 (폴더형 index.html)
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔧 啟用靜態匯出
  basePath: "/ucea-convention", // ⛳️ 替換為你的 GitHub repo 名稱
  trailingSlash: true, // 📁 確保每頁輸出為 index.html 結構
  images: {
    unoptimized: true, // ❗ next/image 在 export 模式下必須設定
    domains: ["carriagehousemarketplace.com"], // ✅ 允許載入圖片來源
  },
};

module.exports = nextConfig;

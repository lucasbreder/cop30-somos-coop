// next.config.js

import type { NextConfig } from "next";

const isExporting = process.env.SERVER === 'local';

const nextConfig: NextConfig = {
  // AQUI: Explicitamente define a base path para a raiz (/)
  // Isso resolve problemas de SSR em rotas aninhadas.
  basePath: '', 

  // Removemos o assetPrefix do modo DEV
  assetPrefix: isExporting ? './' : undefined, 
  
  ...(isExporting && {
    output: 'export',
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
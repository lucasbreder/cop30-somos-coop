import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.SERVER === 'local' && {
    /* config options here */
  output: 'export',
  // ESTE CAMPO É CRUCIAL para caminhos relativos na pasta 'out'
  assetPrefix:  './', 
  
  // IMPORTANTE: Desabilitar o otimizador de imagens se estiver usando <Image>
  images: {
    unoptimized: true,
  },
  })
};

export default nextConfig;

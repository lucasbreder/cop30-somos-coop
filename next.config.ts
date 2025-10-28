import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    /* config options here */
  output: 'export',
  // ESTE CAMPO É CRUCIAL para caminhos relativos na pasta 'out'
  assetPrefix: isProd ? './' : undefined, 
  
  // IMPORTANTE: Desabilitar o otimizador de imagens se estiver usando <Image>
  images: {
    unoptimized: true,
  },
  })
};

export default nextConfig;

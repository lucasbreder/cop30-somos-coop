import { useState, useEffect } from "react";

function UseWindowWidth() {
  // 1. Inicializa o estado com a largura da janela atual ou 0 se não estiver no navegador
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Função para atualizar o estado da largura
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // 2. Adiciona o listener para o evento 'resize'
    window.addEventListener("resize", handleResize);

    // 3. Garante que a largura inicial seja definida corretamente na montagem
    handleResize();

    // 4. Limpa o listener quando o componente é desmontado (evita vazamento de memória)
    return () => window.removeEventListener("resize", handleResize);
  }, []); // O array vazio garante que o efeito rode apenas na montagem e desmontagem

  return windowWidth;
}

export default UseWindowWidth;

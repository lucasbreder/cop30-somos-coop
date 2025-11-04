import { MotionValue } from "framer-motion"; // Ajustado para framer-motion, se necessário
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useHorizontalScrollContent = ({
  contentRef,
  trackRef,
  thumbRef,
  setContentScrollWidth, // Alterado para Width
  data,
  x, // Alterado para 'x' (MotionValue<number> para o eixo X)
}: {
  contentRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  thumbRef: RefObject<HTMLDivElement | null>;
  setContentScrollWidth: Dispatch<SetStateAction<number>>; // Alterado para Width
  x: MotionValue<number>;
  data: unknown;
}) => {
  // --- EFEITO 1: Sincroniza o thumb (x) com a rolagem nativa (mouse/touch) ---
  useEffect(() => {
    const contentElement = contentRef.current;

    const handleScroll = () => {
      const trackElement = trackRef.current;
      const thumbElement = thumbRef.current;

      if (contentElement && trackElement && thumbElement) {
        // 1. Larguras e Distâncias (Horizontal)
        const trackWidth = trackElement.clientWidth; // clientWidth (em vez de clientHeight)
        const thumbWidth = thumbElement.clientWidth; // clientWidth (em vez de clientHeight)
        const contentScrollLeft = contentElement.scrollLeft; // scrollLeft (em vez de scrollTop)
        const contentScrollableWidth =
          contentElement.scrollWidth - contentElement.clientWidth; // scrollWidth/clientWidth

        // 2. Distância MÁXIMA que o thumb pode se mover no track
        const trackMaxMovement = trackWidth - thumbWidth; // trackWidth - thumbWidth

        // Prevenindo divisão por zero
        if (contentScrollableWidth === 0 || trackMaxMovement === 0) {
          x.set(0); // x.set(0) (em vez de y.set(0))
          return;
        }

        // 3. Calcula a Proporção de Rolagem Nativa
        const scrollRatio = contentScrollLeft / contentScrollableWidth; // scrollLeft / scrollableWidth

        // 4. Calcula o novo valor de 'x' (posição do thumb)
        const newX = scrollRatio * trackMaxMovement; // newX (em vez de newY)

        // Atualiza o MotionValue 'x'
        x.set(newX);
      }
    };

    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [x, contentRef, thumbRef, trackRef]);

  // --- EFEITO 2: Sincroniza a rolagem do contêiner com o thumb (x) ---
  useEffect(
    () =>
      x.on("change", (latest: number) => {
        if (trackRef.current && contentRef.current && thumbRef.current) {
          // 1. Larguras
          const trackWidth = trackRef.current.clientWidth;
          const thumbWidth = thumbRef.current.clientWidth;
          const contentScrollableWidth =
            contentRef.current.scrollWidth - contentRef.current.clientWidth;

          // 2. Distância MÁXIMA que o thumb pode se mover
          const trackMaxMovement = trackWidth - thumbWidth;

          // Prevenindo divisão por zero
          if (trackMaxMovement === 0 || contentScrollableWidth === 0) {
            contentRef.current.scrollLeft = 0; // scrollLeft = 0
            return;
          }

          // 3. Proporção da Rolagem
          const scrollRatio = latest / trackMaxMovement;

          // 4. Calcula a distância final que o conteúdo deve rolar
          const scrollableDist = contentScrollableWidth * scrollRatio;

          contentRef.current.scrollLeft = scrollableDist; // scrollLeft = scrollableDist
        }
      }),
    [x, contentRef, trackRef, thumbRef]
  );

  // --- EFEITO 3: Atualiza o estado de largura rolável ---
  useEffect(() => {
    if (contentRef.current) {
      // Access ref.current safely after the component has mounted
      setContentScrollWidth(contentRef.current.scrollWidth); // scrollWidth (em vez de scrollHeight)
    }
  }, [data, contentRef, setContentScrollWidth]);
};

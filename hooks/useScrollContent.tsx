import { MotionValue } from "motion";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useScrollContent = ({
  contentRef,
  trackRef,
  thumbRef,
  setContentScrollHeight,
  data,
  y,
}: {
  contentRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  thumbRef: RefObject<HTMLDivElement | null>;
  setContentScrollHeight: Dispatch<SetStateAction<number>>;
  y: MotionValue<number>;
  data: unknown;
}) => {
  useEffect(() => {
    const contentElement = contentRef.current;

    const handleScroll = () => {
      // AGORA ACESSAMOS AS REFS DIRETAMENTE AQUI DENTRO,
      // garantindo que peguemos a referência do elemento se ele foi renderizado.
      const trackElement = trackRef.current;
      const thumbElement = thumbRef.current;

      if (contentElement && trackElement && thumbElement) {
        // 1. Alturas e Distâncias
        const trackHeight = trackElement.clientHeight;
        const thumbHeight = thumbElement.clientHeight;
        const contentScrollTop = contentElement.scrollTop;
        const contentScrollableHeight =
          contentElement.scrollHeight - contentElement.clientHeight;

        // 2. Distância MÁXIMA que o thumb pode se mover no track
        const trackMaxMovement = trackHeight - thumbHeight;

        // Prevenindo divisão por zero
        if (contentScrollableHeight === 0 || trackMaxMovement === 0) {
          y.set(0);
          return;
        }

        // 3. Calcula a Proporção de Rolagem Nativa
        // Proporção de quanto o conteúdo rolou (0 a 1)
        const scrollRatio = contentScrollTop / contentScrollableHeight;

        // 4. Calcula o novo valor de 'y' (posição do thumb)
        // Multiplica a proporção pelo movimento máximo do thumb
        const newY = scrollRatio * trackMaxMovement;

        // Atualiza o MotionValue 'y'
        y.set(newY);
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
  }, [y, contentRef, thumbRef, trackRef]); // Dependência em 'y' está correta

  useEffect(
    () =>
      y.on("change", (latest: number) => {
        if (trackRef.current && contentRef.current && thumbRef.current) {
          // 1. Alturas
          const trackHeight = trackRef.current.clientHeight;
          const thumbHeight = thumbRef.current.clientHeight; // **Nova variável importante**
          const contentScrollableHeight =
            contentRef.current.scrollHeight - contentRef.current.clientHeight;

          // 2. Distância MÁXIMA que o thumb pode se mover
          // A rolagem completa ocorre quando o thumb chega no máximo de seu movimento.
          const trackMaxMovement = trackHeight - thumbHeight;

          // Prevenindo divisão por zero (caso o conteúdo seja menor que o contêiner)
          if (trackMaxMovement === 0 || contentScrollableHeight === 0) {
            contentRef.current.scrollTop = 0;
            return;
          }

          // 3. Proporção da Rolagem
          // O `latest` deve ser dividido pelo movimento máximo do thumb.
          const scrollRatio = latest / trackMaxMovement;

          // 4. Calcula a distância final que o conteúdo deve rolar
          const scrollableDist = contentScrollableHeight * scrollRatio;

          contentRef.current.scrollTop = scrollableDist;
        }
      }),
    [y, contentRef, trackRef, thumbRef]
  );

  useEffect(() => {
    if (contentRef.current) {
      // Access ref.current safely after the component has mounted
      setContentScrollHeight(contentRef.current.scrollHeight);
    }
  }, [data, contentRef, setContentScrollHeight]);
};

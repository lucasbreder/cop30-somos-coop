import { useEffect, useState } from "react";

interface HasOverflowRef {
  current: HTMLElement | null;
}

function useHasOverflow(contentRef: HasOverflowRef): boolean {
  const [hasOverflow, setHasOverflow] = useState<boolean>(true);

  useEffect(() => {
    const element = contentRef.current;

    if (element) {
      const overflow = element.scrollHeight > element.clientHeight;
      setHasOverflow(overflow);
    }
  }, [contentRef]);

  useEffect(() => {
    const handleResize = () => {
      const element = contentRef.current;
      if (element) {
        const overflow = element.scrollHeight > element.clientHeight;
        setHasOverflow(overflow);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Checa na montagem também

    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef]);

  return hasOverflow;
}

export default useHasOverflow;

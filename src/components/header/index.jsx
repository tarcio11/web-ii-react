import { useLayoutEffect, useState } from "react";
import { HeaderDesktop } from "./desktop";
import { HeaderMobile } from "./mobile";

export const Header = () => {
  const width = useWindowSize();
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  if (width > 980) {
    return <HeaderDesktop />
  }else {
    return <HeaderMobile />
  }
  
}
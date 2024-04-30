import { useContext, useEffect } from "react";
import useStateWithStorage from "../hooks/useStateWithStorage";
import { OrderContext } from "../context/OrderContext";


export const Header = ()=> {
  // const [subtotal, setSubtotal] = useStateWithStorage('subtotal', 0);
  const {subtotal} = useContext(OrderContext) || {};

  return (
    <header style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <p>Subtotal: ${subtotal}</p>
    </header>
  );
}

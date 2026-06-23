import Cart from "./cart";
import { OPPORTUNITIES } from "../data/data";
import "../style/quatre.css";

export default function Quatre() {
  const first4 = OPPORTUNITIES.slice(0, 4);

  return (
    <div className="fk-grid">
      {first4.map((opportunity) => (
        <Cart
          key={opportunity.id}
          opportunity={opportunity}
        />
      ))}
    </div>
  );
}
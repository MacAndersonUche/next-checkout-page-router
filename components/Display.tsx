import { useGlobalContext } from "@/context/provider";

function Displayed() {
  const ctx = useGlobalContext();
  return (
    <div className="grid grid-cols-3 gap-4">
      {ctx.state.products &&
        ctx.state.products.map((product) => (
          <div
            key={product.id}
            className="col-auto h-auto bg-blue-100 flex-col items-center  justify-between"
          >
            <h4>Name: {product.name}</h4>
            <h4>
              Availability: {product.isAvailable ? "In Stock" : "Out of Stock"}
            </h4>
            <p>Price: £{product.price}</p>
            <div>
              <button className="mx-1">+</button>
              {product.qty}
              <button className="mx-1">-</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Displayed;

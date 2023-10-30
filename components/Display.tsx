import { useGlobalContext } from "@/context/provider";

function Displayed() {
  const ctx = useGlobalContext();

  const handleAdd = (id: number) => {
    ctx.dispatch({ type: "add_qty", productId: id });
  };
  const handleRemove = (id: number) => {
    ctx.dispatch({ type: "remove_qty", productId: id });
  };
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
              <button className="mx-1" onClick={() => handleAdd(product.id)}>
                +
              </button>
              {product.qty}
              <button className="mx-1" onClick={() => handleRemove(product.id)}>
                -
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Displayed;

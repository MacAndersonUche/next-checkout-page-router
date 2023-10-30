import { useGlobalContext } from "@/context/provider";

const Summary = () => {
  const ctx = useGlobalContext();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-auto h-auto bg-blue-100 flex-col items-center  justify-between">
        <p>Qty of all items in Cart: {ctx.state.totalQty}</p>
        <p>Total Price of items in Cart: £{ctx.state.totalPrice}</p>
        <p>
          Qty of available items in Cart:
          {ctx.state.totalInStock}
        </p>
      </div>
    </div>
  );
};

export default Summary;

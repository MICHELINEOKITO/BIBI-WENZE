
const CartCount = (props) => {
    const { size } = props; // Destructuring to access the size prop
  
    return (
        <div
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-30 -top-1 rounded-full grid mt-7`}
      aria-label="Cart count: 0"
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      0
    </div>

    );
  };
  
  export default CartCount;







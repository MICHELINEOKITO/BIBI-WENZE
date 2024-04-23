import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import CartCount from "./CartCount";

const MobileNavbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <IoMenu size={30} />
            <IoSearch size={25} />
          </div>
          <div>
            <h1 className="text-xl font-medium">BIBI WENZE</h1>
          </div>
          <div className="flex gap-4 text-[30px]">
            <FaUser />
            <div className="relative cursor-pointer">
              <BsCart />
              <CartCount size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;


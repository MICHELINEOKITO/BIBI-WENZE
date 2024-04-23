

import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import CartCount from "./CartCount";



const Navbar = () =>{

    return(
        <div className="sticky top-0 bg-white z-10">
            <div className="contener hidden lg:block">
                <div className="flex justify-between items-center p-8">
                    <div>
                    <h1 className="text-xl font-medium">BIBI WENZE</h1>
                    </div>
                    
                     <div className="relative w-full max-w-[500px]"> 
                        <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Rechercher un produit..." />
                        <IoSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>
                    </div> 
                

                    <div className="flex gap-4 ">
                        <div className="icon_wrapper">
                            <FaUser />
                        </div>
                        <div className="icon_wrapper">
                            <BsCart />
                            <CartCount size="w-[25px] h-[25px]"/>
                        </div>

                    </div>

                </div>

            </div>


    
        </div>
    )
}

export default  Navbar ;
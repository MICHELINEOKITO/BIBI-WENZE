

const Navbar = () =>{

    return(
        <div className="sticky top-0 bg-white z-10">
            <div className="continuer hidden lg:block">
                <div className="flex justify-between items-center p-8">
                    <div>
                    <h1 className="text-xl font-medium">BIBI WENZE</h1>
                    </div>
                    
                     <div className="relative w-full max-w-[500px]"> 
                        <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Rechercher un produit..." />
                    </div> 

                </div>

            </div>


    
        </div>
    )
}

export default Navbar;
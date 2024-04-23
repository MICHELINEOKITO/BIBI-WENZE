


const HeroSection = () =>{

    return(
        <div className="container">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className="xl:col-span-2 xl:row-start-1 xl-row-end-[-1] relative">
                    <img className="w-full h-full object-cover rounded-lg" src="src/assets/biotous.jpg" alt="" />

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-white text-2xl hidden sm:block">Prenez soin de votre corps et de votre âme en mangeant des aliments biologiques</p>
                        <h2 className=" text-white text-2xl sm:text-4xl md:text-6xl font-bold">Mangez bio, mangez la vie !</h2>
                        <div className="">
                            <button className="bg-green-600 text-white text-lg py-3 px-10 rounded-lg">Commander</button>
                        </div>
                    </div>

                    
                </div>
                <div className="relative"></div>

            </div>
        </div>
    )
}

export default HeroSection;
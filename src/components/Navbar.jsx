import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Navbar()
{
    // const navigate = useNavigate();
    const {contextSafe} = useGSAP();

    const showSidebar = contextSafe(()=>{
        gsap.to('.sidebar',{
            x:0,
            duration:0.5,
            opacity:1
        })

        gsap.from('.link',{
            x:20,
            delay:0.3,
            duration:0.6,
            stagger:0.1,
            opacity:1
        })
})


    return(
        <div className="fixed w-[100%] bg-white top-0 z-10 box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
            <div className="max-w-[1180px] w-[80%] mx-auto  flex flex-row justify-between items-center">
                {/* Image */}
               <NavLink to={'/'}>
               <div>
                    <img className="w-[200px] cursor-pointer" src="https://neighborgood.io/assets/logo-mAr6nq_y.png"></img>
                </div>
               </NavLink>

                <div onClick={showSidebar} className="block text-2xl text-blue-500 md:hidden">
                  <RxHamburgerMenu />
                </div>

                {/* Links */}
                <div className=" hidden md:flex md:flex-row gap-x-7 items-center">
                    
                    {/* HOME */}
                    <div className="group flex flex-col justify-between items-center gap-y-4">
                        <div className="w-[full] h-1 group-hover:bg-blue-700"></div>
                        <div className="text-black group-hover:text-orange-500 cursor-pointer font-semibold">Services</div>
                        <div className="w-[100%] h-1 group-hover:bg-orange-500"></div>
                    </div>

                    {/* ABOUT */}
                    <div className="group flex flex-col justify-between items-center gap-y-4">
                        <div className="w-[100%] h-1"></div>
                        <div className="text-black group-hover:text-orange-500 cursor-pointer font-semibold">About us</div>
                        <div className="w-[100%] h-1 group-hover:bg-orange-500"></div>
                    </div>

                    {/* Contact */}
                    <div className="group flex flex-col justify-between items-center gap-y-4">
                        <div className="w-[100%] h-1"></div>
                        <div className="text-black group-hover:text-orange-500 cursor-pointer font-semibold">Contact</div>
                        <div className="w-[100%] h-1 group-hover:bg-orange-500"></div>
                    </div>

                    {/* careers */}
                    <div className="group flex flex-col justify-between items-center gap-y-4">
                        <div className="w-[100%] h-1"></div>
                        <div className="text-black group-hover:text-orange-500 cursor-pointer font-semibold">Postcards</div>
                        <div className="w-[100%] h-1 group-hover:bg-orange-500"></div>
                    </div>

                    <NavLink to='/auth'>
                    <div className="px-4 py-2 bg-gradient-to-br cursor-pointer text-white rounded-lg from-orange-200 to-orange-500">
                    Sign in
                    </div>
                    </NavLink>

                </div>

                
            </div> 

            <Sidebar></Sidebar>

        </div>
    )
}

export default Navbar;
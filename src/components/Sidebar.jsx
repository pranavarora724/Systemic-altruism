import { RxCrossCircled } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";


function Sidebar() {
    const {contextSafe} = useGSAP();

    
    const closeSidebar = contextSafe(()=>{     
        gsap.to('.sidebar',{
            x:200,
            duration:0.5,
            opacity:1
        })
})

    return (
        <div className="sidebar
        absolute
        block md:hidden
          w-[200px] top-0 right-0 h-[100vh] translate-x-[200px]  bg-white z-20">

            <div className="flex flex-col">
                
                <NavLink to={'/'}><div className="link p-2 text-lg hover:bg-slate-300 mt-7">Home</div></NavLink>

                <div className="link p-2 text-lg hover:bg-slate-300">About Us</div>
                <div className="link p-2 text-lg hover:bg-slate-300">Contact Us</div>

                <NavLink to={'/auth'}><div className="link p-2 text-lg hover:bg-slate-300">Sign In</div></NavLink>
                
            </div>
            <div onClick={closeSidebar} className="cross absolute top-2 left-2"><RxCrossCircled /></div>
        </div>

        
    )
}

export default Sidebar;
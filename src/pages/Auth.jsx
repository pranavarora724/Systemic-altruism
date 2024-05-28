import { NavLink } from "react-router-dom";
import { useState } from "react";


function Auth()
{
    const [login , setIsLogin] = useState(true);

    function changeHandler()
    {
        if(login)
            setIsLogin(false);
        else
        setIsLogin(true);
    }

    return(
        <div className="flex w-[100%] h-[100vh] justify-center items-center">
            
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-2xl max-w-[500px] w-[80%] flex flex-col">
                
                <div className="text-center mt-10 text-2xl">{(login)?(<div>LogIn</div>):(<div>SignUp</div>)}</div>

                <div className="flex flex-row text-orange-500 mx-auto justify-center gap-x-1 mt-4 border border-orange-500">
                    <div onClick={changeHandler} className={`px-14 py-1 cursor-pointer ${(login)?('bg-gradient-to-r from-orange-300 to-orange-500  text-white '):('')}` }>Login</div>
                    <div onClick={changeHandler} className={`px-14 py-1  cursor-pointer ${(login == false)?('bg-gradient-to-r from-orange-300 to-orange-500 text-white '):('')} `}>Signup</div>
                </div>
                    
                    {
                        (login)?
                        
                        (<div>
                            {/* Email Address */}
                            <div className="mt-5 flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input
                                className="bg-richblack-700 p-2 rounded-lg mt-1"
                                  type="email"
                                  name="email"
                                  id="email"
        
                               
                                  placeholder="Enter Email Address"
                                ></input>
        
                                {/* dsiplying ERROR */}
                               
                            </div>

                            {/* Password */}
                            <div className="mt-5 flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input
                                className="bg-richblack-700 p-2 rounded-lg mt-1"
                                  type="password"
                                  name="password"
                                  id="password"
        
                               
                                  placeholder="Enter Password"
                                ></input>
        
                                {/* dsiplying ERROR */}
                               
                            </div>

                            <NavLink to={'/'}>
                           <div className="mt-5">
                              <div className="bg-orange-500 text-white px-14 py-1 w-fit mx-auto cursor-pointer">Log In</div>
                           </div>
                           </NavLink>

                        

                        </div>):
                        (<div>
                            <div className="flex flex-row gap-x-5 mt-4 ">
                                {/* Firs Name */}
                                <div className="w-[47%]">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                    className="bg-richblack-700 w-[100%] p-2 pr-0 rounded-lg mt-1"
                                      type="text"
                                      name='firstName'
                                      id='firstName'
        
                                
                                      placeholder="Enter First Name"
                                    ></input>
        
                                
                                </div>
                                {/* LAst Name */}
                                <div className="w-[47%]">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                    className="bg-richblack-700 w-[100%] p-2 pr-0 rounded-lg mt-1"
                                      type="text"
                                      name="lastName"
                                      id="lastName"
        
                                
                                      placeholder="Enter Last Name"
                                    ></input>
        
                                    {/* Displaying ERROR */}
                                
                                </div>
                            </div>
        
                            {/* Email Address */}
                            <div className="mt-5 flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input
                                className="bg-richblack-700 p-2 rounded-lg mt-1"
                                  type="email"
                                  name="email"
                                  id="email"
        
                               
                                  placeholder="Enter Email Address"
                                ></input>
        
                                {/* dsiplying ERROR */}
                               
                            </div>

                            {/* Password */}
                            <div className="mt-5 flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input
                                className="bg-richblack-700 p-2 rounded-lg mt-1"
                                  type="password"
                                  name="password"
                                  id="password"
        
                               
                                  placeholder="Enter Password"
                                ></input>
        
                                {/* dsiplying ERROR */}
                               
                            </div>

                         {/* Confirm Password */}
                         <div className="mt-5 flex flex-col">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                className="bg-richblack-700 p-2 rounded-lg mt-1"
                                  type="confirmPassword"
                                  name="confirmPassword"
                                  id="confirmPassword"
        
                               
                                  placeholder="Confirm Password"
                                ></input>
        
                                {/* dsiplying ERROR */}
                               
                            </div>

                           <NavLink to={'/'}>
                           <div className="mt-5">
                              <div className="bg-orange-500 text-white px-14 py-1 w-fit mx-auto cursor-pointer">Get OTP</div>
                           </div>
                           </NavLink>

                            </div>)
                    }
                
            </div>
        </div>
    )
}

export default Auth;
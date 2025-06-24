import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, UserProfile, useUser } from "@clerk/clerk-react";
// import { SignedIn } from "@clerk/clerk-react";
// import { Button } from "@/components/ui/button"
function Navbar() {


  const {openSignIn} = useClerk()
  const {user} = useUser()
     const iscourcelist = location.pathname.includes('/course-List')
  return (
    <>
      <div className={`flex w-full h-[60px]   items-center  justify-between border-b-1  to-black bg-blue-100  px-5  md:px-10 ${iscourcelist ? 'bg-white' : 'bg-cyan-100/70'}` }>
        <div>
          <img src={assets.logo} alt="Logo"  className="w-20 lg:w-30 cursor-pointer"/>
        </div>


        <div className="hidden md:flex items-center gap-5">
          <div className="flex gap-4 px-2">
           {  user && <>
            <button className=" px-2.5 cursor-pointer  ">Become Educator</button>
            | <Link>My Enrollment</Link>
           </>
            }
          </div>
          <div>
            
          { user ? <UserButton/> :
          
          <button onClick={()=> openSignIn()} className="border-2 bg-blue-600 to-black rounded-2xl px-2 py-1 md:px-2.5 md:py-2 cursor-pointer">
              Create Account
            </button>}
          </div>

        </div>

      {/* for mobile screen  */}

      <div className=" md:hidden flex items-center md:gap-7 gap-4">
        <div className="text-[14px]">
           { user && <>
            
            <button >Become Educators</button>
            | <Link to='/Myenrollment'>My MyEnrollment</Link>
           </> 
            }
        </div>

        { user ? <UserButton/> :
          <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="usericon" /></button>
          }
      </div>
      </div>
    </>
  );
}

export default Navbar;

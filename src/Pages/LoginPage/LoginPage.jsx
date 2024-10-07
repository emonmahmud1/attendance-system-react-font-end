import batteryimg from '../../../src/assets/images/batterylowlogin.png'
const LoginPage = () => {
    return (
        <div className="dark:bg-[#0F3333] dark:text-white font-poppins h-lvh   flex flex-row  md:items-center  justify-center mx-auto max-h-lvh rounded-xl md:gap-5 max-w-screen">
        {/* left side */}
        <div className="  px-3 w-full md:w-1/2 lg:w-5/12 h-lvh">
  
          <div className=" min-h-[calc(100vh-90px)] flex flex-col justify-center  w-full">
            <div className=" max-w-[800px] mx-auto w-full">
              <div className="">
              <div className="h-20 w-52">
                <img
                  src=''
                  alt="battery low logo"
                />
              </div>
                <p className="font-normal text-base dark:text-white text-primary-light mt-7 mb-7">
                  Welcome Back, Please <span className="font-bold">login</span> to
                  your account
                </p>
              </div>
  
              <form className="mt-3">
                <div className="mb-6">
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />                </div>
  
                <div>
                <input type="password" placeholder="******" className="input input-bordered w-full " />                </div>
  
  
                <div className="flex justify-center mt-3 gap-2">
                  <input type="checkbox" name="" id="" />
                  <span className="dark:text-white font-inter label-text text-sm md:text-base text-[#4B4B4B] font-semibold">
                    Remember me
                  </span>
                </div>
  
                <div className="mt-4">
                  <button
                    className="hover:bg-[#cf75ab] btn bg-gray-500 text-white font-semibold p-2 rounded-md w-full"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
  
            <div className="md:mt-auto mt-6  dark:text-white text-[#1F8685]  text-center  w-full">
              <p className=" font-inter text-xs lg:text-sm mt-4">
                Copyright © 2024 All right reserved
              </p>
            </div>
        </div>
  
        {/* right side */}
  
        <div className="items-center  lg:w-3/5 h-full md:w-full flex-grow max-w-full hidden md:flex w-full bg-[#01304A]">
          <img
            className="w-full h-full object-cover"
            src={batteryimg}
            alt="login page logo"
          />
        </div>
      </div>
    );
};

export default LoginPage;
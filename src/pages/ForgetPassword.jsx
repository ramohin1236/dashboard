import React from 'react'

const ForgetPassword = () => {
  return (
     <div className="">
      <div className="min-h-screen  flex flex-col items-center justify-center py-6 px-4">
        <div className="lg:min-w-sm ">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-40 mb-8 mx-auto block"
            />
          </a>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h1 className="text-slate-900 text-center text-3xl font-semibold">
              Forget Password?
            </h1>

            <p className='text-sm text-center mt-4'>Please enter your email  to getverification <br /> code</p>
            <form className="mt-12 space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                 Email address
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                  />
              
                </div>
              </div>
            
             

              <div className="!mt-12">
                <button
                  type="button"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#115E59] hover:bg-[#09534e] focus:outline-none cursor-pointer"
                >
                  Continue
                </button>
              </div>
           
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
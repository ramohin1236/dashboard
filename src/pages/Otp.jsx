const Otp = () => {
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

            <p className="text-sm text-center mt-4">
              Please enter your email to getverification <br /> code
            </p>
            <form className="mt-12 space-y-6">
              <div class="flex gap-4 max-w-lg mx-auto justify-center">
                <input
                  type="text"
                  placeholder="0"
                  class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                />
                <input
                  type="text"
                  placeholder="0"
                  class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                />
                <input
                  type="text"
                  placeholder="0"
                  class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                />
                <input
                  type="text"
                  placeholder="0"
                  class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                />
              </div>

              <div className="!mt-12">
                <button
                  type="button"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#115E59] hover:bg-[#09534e] focus:outline-none cursor-pointer"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

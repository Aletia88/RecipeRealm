<template>
    <div className="lg:flex backg items-center justify-center h-screen w-screen">
        <div className='hidden lg:block w-1/2 h-screen'>
          <img src="../../public/engin-akyurt-VCUSHIWzs0M-unsplash.jpg" alt=""  className='h-screen'/>
        </div>
        <div className="lg:w-1/2 h-screen bg-white flex flex-col items-center rounded px-8 py-6 shadow-gray justify-center">
          <h1 className='font-whisper text-4xl mt-3 mb-9   font-extrabold text-[#271D3B]  align-center'>WELCOME</h1>
          <h2 className="text-2xl font-bold mb-6">Registration Page</h2>
         <p className="text-red-500 mb-4">{error}</p>
          <form  className='w-4/5 self-center'>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className='flex items-center gap-4 flex-col'>
  
            
            <button
              type="submit"
              className="w-32 bg-black text-white px-4 py-2 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          {/* <a href="./Login.jsx">Login</a> */}
       
          <div className='flex'>
           
          <p>Already have an accout?</p>
          <Link to="../Login">
          <p className=' text-blue-800'>Login</p>
          </Link>
          </div>
          </div>
          </form>
        </div>
      </div>
</template>
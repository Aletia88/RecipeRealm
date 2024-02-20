<template>
    <div className="lg:flex  items-center justify-center min-h-screen bg-gray-100 ">
      <div className='hidden lg:block lg:w-1/2 h-screen'>
        <img src="../../public/engin-akyurt-VCUSHIWzs0M-unsplash.jpg" alt=""  className='h-screen'/>
      </div>
      <div className="lg:w-1/2 h-screen flex flex-col items-center rounded px-8 py-6 shadow-gray justify-center w-full ">
          <form  className=' bg-[#aaa] rounded-md shadow-black/10 shadow-md bg-opacity-20 p-14 w-4/5 self-center'>
            <h2 className="text-2xl font-bold mb-6">Login Page</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Email:
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
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 items-center "
          >
            Login
          </button>
          <p className="mt-4">
            Don't have an account?{' '}
            <Link
              to="/register"
              onClick={handleRegisterClick}
              className="text-blue-500 hover:text-blue-700"
            >
              Register
            </Link>
          </p>
        </form>

      </div>
    </div>

</template>
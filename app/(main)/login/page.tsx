import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto ">
          <h1 className="text-lg font-bold">Login</h1>
          <form className="flex flex-col mt-4">
            <input
              type="number"
              name="phone"
              className="px-4 py-3 w-full mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Phone Number"
            />
            <input
              type="password"
              name="password"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Password"
            />
            <Link href={'/dashboard'}>
            <button
              type="submit"
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-amber-400 text-amber-100 hover:text-white focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Login
            </button>
            </Link>
            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                New to Here?
                <Link
                  href={"/registration"}
                  className="ml-1 font-medium text-amber-400"
                >
                  Sign up now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

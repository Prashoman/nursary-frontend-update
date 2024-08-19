import  { useEffect, useState } from 'react'

import { HiMinus, HiOutlineMenuAlt2, HiOutlinePlus, HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

export default function NavBar() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [inputWidth, setInputWidth] = useState("0");
  // const profileVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: { opacity: 1, scale: 1 },
  // };

  

  useEffect(() => {
    // Function to update the input width based on screen size
    const updateInputWidth = () => {
      if (typeof window !== "undefined") {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
          // Tailwind's 'sm' breakpoint
          setInputWidth(isOpen ? "8rem" : "0");
        } else {
          setInputWidth(isOpen ? "14rem" : "0");
        }
      }
    };
    // Initial check
    updateInputWidth();
    // Add event listener for window resize
    window.addEventListener("resize", updateInputWidth);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateInputWidth);
    };
  }, [isOpen]);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleChechout = () => {
    
  };

  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
   <>
   <div>
      <div className="w-full sticky top-0 left-0">
        <nav className="bg-green-900 opacity-90  w-full  px-4 xl:px-20 shadow-2xl">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {" "}
              {/* <Image
                src={logo}
                className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
                width={60}
                height={60}
                alt=""
              /> */}
              Logo
            </Link>

            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <ul className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                <li>
                  <Link
                   to={'/'}
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                   to={'/'}
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                   to={'/'}
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    About
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <motion.input
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    width: inputWidth, // Use state for width
                  }} // "14rem" is equivalent to w-56 in Tailwind CSS
                  transition={{ duration: 0.3 }}
                  placeholder="Search..."
                  className="input  shadow-lg   focus:border-2 focus:border-[#690213] py-[4px] px-2 lg:px-3 lg:py-[6px] rounded-full transition-all outline-none text-xs lg:text-sm"
                  name="search"
                  type="search"
                  onChange={handleChangeSearch}
                />
                <HiOutlineSearch
                  onClick={handleSearch}
                  className="w-4 h-4 lg:w-6 lg:h-6 text-white cursor-pointer hover:w-5 hover:h-5 lg:hover:w-7 lg:hover:h-7 transition-all hover:text-[#F2BF4A]"
                />
              </div>
              <div
                className="relative"
                onClick={() => {
                  setIsCartOpen(!isCartOpen)
                  // setCartReset(!cartReset)
                }}
              >
                <HiShoppingCart className="w-4 h-4 lg:w-6 lg:h-6 text-white cursor-pointer" />
                <small className="text-white bg-green-900 absolute -top-[5px] -right-[4px] rounded-full text-[10px] px-1">
                  0+
                </small>
              </div>
               
                <Link
                  to={"/login"}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md hidden lg:block"
                >
                  Login
                </Link>

              <div
                className="block lg:hidden"
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                <HiOutlineMenuAlt2 className="w-6 h-6 text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </nav>
      </div>

      

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-[80%] lg:w-[45%] max-h-64 bg-[#690213] bg-opacity-75 px-3 py-5 rounded absolute right-[2%] top-[13%] z-40 overflow-y-auto"
          >
            
                <div
                  
                  className="flex items-center gap-3 border-b border-yellow-200 py-2"
                >
                  <div className="w-[15%] h-[50px]">
                    {/* <Image
                      src={item?.image}
                      alt="ecommerce"
                      className="w-full h-full"
                      width={50}
                      height={50}
                    /> */}
                  </div>
                  <div className="w-[85%] flex items-center justify-between">
                    <div className="w-[60%]">
                      <h1 className="text-white text-[14px] lg:text-[16px] font-serif">
                        testing
                      </h1>
                      <div className="flex items-center gap-3">
                        <p className="text-[12px] lg:text-[14px] font-serif text-white">
                          ৳ 400
                        </p>
                        <p className="text-[12px] lg:text-[14px] font-serif text-white">
                          x 1
                        </p>
                      </div>
                    </div>
                    <div className="w-[40%] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          onClick={() => {
                            // handlePlus(item?.food_id);
                            // setCartReset(!cartReset);
                          }}
                        >
                          <HiOutlinePlus className="w-4 h-4 text-white cursor-pointer" />
                        </span>{" "}
                        <input
                          type="text"
                          value={1}
                          className="w-7 px-1"
                        />
                        <span>
                          <HiMinus
                            // onClick={() => {
                            //   handleMinus(item?.food_id);
                            //   setCartReset(!cartReset);
                            // }}
                            className="w-4 h-4 text-white cursor-pointer"
                          />
                        </span>
                      </div>
                      <div
                        onClick={() => {
                          // handleRemoveCart(item?.food_id);
                          // setCartReset(!cartReset);
                        }}
                      >
                        <HiOutlineX className="w-5 h-5 text-white cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
            

            <div className="flex items-center justify-center">
              <motion.button
                onClick={handleChechout}
                className="bg-[#690213] border border-yellow-200 text-white px-3 py-1 rounded mt-3 cursor-pointer"
                whileHover={{
                  borderColor: "#FFFF00", // Change border color on hover
                  transition: { duration: 0.3 }, // Duration of the transition
                }}
                animate={{
                  borderColor: ["#690213", "#FFFF00", "#690213"], // Loop through these colors
                }}
                transition={{
                  duration: 2, // Duration of one loop
                  repeat: Infinity, // Repeat the animation indefinitely
                  ease: "linear", //}}
                }}
              >
                Checkout
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isNavbarOpen && (
        <motion.div
          className="w-[50%] bg-[#690213] h-screen block lg:hidden absolute z-30 top-[15%] right-0 rounded"
          initial={{ x: "100%" }} // Start off-screen to the right
          animate={{ x: "0%" }} // Animate to its normal position
          exit={{ x: "0%" }} // Exit with a slide left and fade out
          transition={{
            duration: 0.5, // Duration for the entry animation
            ease: "easeInOut",
            exit: { duration: 0.75, ease: "easeInOut" }, // Duration for the exit animation
          }} // Animation duration
        >
          <div className="px-4 py-7 relative">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                >
                  Home
                </Link>
              </li>
            </ul>
            <HiOutlineX
              onClick={() => setIsNavbarOpen(false)}
              className="w-6 h-6 text-white cursor-pointer absolute top-2 right-2"
            />
          </div>
        </motion.div>
      )}
    </div></>
  )
}

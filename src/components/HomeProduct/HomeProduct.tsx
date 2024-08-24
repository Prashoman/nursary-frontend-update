import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGetCategoryQuery, useGetProductQuery } from "../../redux/api/baseApi";


const HomeProduct = () =>{
    const{data:category} = useGetCategoryQuery(undefined);
    const{data:products} = useGetProductQuery(undefined);
   
    
  return (
  <>
   <section className="w-full px-4 lg:px-20 bg-white">
        <div className="flex items-center justify-center flex-wrap gap-5 pt-4 pb-16">
          <div
            // onClick={() => setSelectedCategory(null)}
            // ${  selectedCategory === null ? categoryColor : "" }
            className={` w-[45%] lg:w-[18%] font-serif text-[14px] lg:text-xl border border-yellow-500 py-1 px-3 text-center rounded-lg cursor-pointer hover:bg-[#690213] hover:text-white`}
          >
            All
          </div>

          {category?.data?.length > 0 ? (
            category?.data?.map((cat: any, index: number) => (
              <div
                key={index}
                // onClick={() => setSelectedCategory(cat.id)}
                // ${ selectedCategory === cat.id ? categoryColor : ""}
                className={` w-[45%] lg:w-[18%] font-serif text-[14px] lg:text-xl border border-yellow-500 py-1 px-3 text-center rounded-lg cursor-pointer hover:bg-[#690213] hover:text-white`}
              >
                {cat.categoryName}
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
        <div className="flex items-center flex-wrap gap-7">
          {products?.data?.length > 0 ? (
            products?.data?.map((item: any, index: number) => {
              
                return (
                  <div
                    key={index}
                    className="w-[45%] lg:w-[23%] border border-[#F2BA66] shadow-2xl relative px-2 py-2 rounded"
                    style={{ boxShadow: "#F2BA66 0px 0px 8px 0px" }}
                  >
                    <Link to={'/'} className="block">
                      <div>
                        <img
                          src={item.image}
                          className="w-full h-[120px] lg:h-[200px]"
                        //   width={150}
                        //   height={150}
                          alt={item.name}
                        />
                      </div>
                    </Link>
                    <div className="py-2">
                      <Link to={'/'} className="block">
                        <h1 className="text-[14px] lg:text-xl text-gray-800 font-serif">
                          {item.title}
                        </h1>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p className="text-[12px] lg:text-[16px] font-serif">
                              ৳ {item.price}
                            </p>
                            <del className="text-[12px] lg:text-[16px] font-serif">
                              ৳ {item.quantity}
                            </del>
                            <small className="bg-[#690213] text-white font-serif rounded-xl py-1 px-2 text-xs absolute bottom-[37%] left-2">
                              {item?.categoryId?.categoryName}
                            </small>
                          </div>
                        </div>
                        <div>
                          <span className="bg-green-900 text-white font-serif rounded-full py-2 px-1 absolute top-3 right-2 text-[10px] lg:text-xs">
                            {/* -{item.offer_percentage}% */}
                          </span>
                        </div>
                      </Link>
                      <div className="pt-2">
                        <button
                        //   onClick={(e) => handleAddToCart(item?.food_id, e)}
                          className="bg-[#690213] text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full h-10 hover:bg-gray-400 hover:text-[#690213] transition-all"
                        >
                          <HiOutlineShoppingCart className="w-6 h-6" />
                          <span className="text-xs lg:text-sm">
                            Add to Cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              
              
            })
          ) : (
              "Loading..."
          )}
        </div>
      </section>
  </>
  )
}

export default HomeProduct;
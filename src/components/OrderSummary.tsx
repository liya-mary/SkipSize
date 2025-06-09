interface OrderSummaryProps{
    skip?:Skip
}

function OrderSummary({skip}:OrderSummaryProps) {
    if(!skip){
        return <div className=" w-full xl:w-1/4 m-3 p-5 ">
            <div className=" sticky top-24 max-w-sm rounded overflow-hidden shadow-lg  text-center mr-5 bg-stone-100 p-2 ">
                <h1 className="font-bold text-2xl mb-2">Order Summary</h1>
                <p>Select a skip to see pricing details</p>
                <p className=" text-xs text-justify m-2 bg-blue-50 text-gray-600 leading-relaxed mt-4"> *Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
                </div>
        </div> 
    }
    const imageSource=`${skip.size}-yarder-skip.jpg`
    return (
      <div className="w-full xl:w-1/4 m-3 p-5  ">
        <div className="sticky top-24 max-w-sm rounded overflow-hidden shadow-lg  text-center mr-5 bg-stone-100 p-2">
            <div className="px-6 py-4">
                <h1 className="font-bold text-2xl mb-2">Order Summary</h1>
                <img className="w-full h-48" src={imageSource} alt="Sunset in the mountains"/>
                <h1 className="font-bold text-l mb-2">{skip.size} Yard Skip</h1>

                <p className="text-gray-700 text-base">
                   {skip.hire_period_days} Days hire period
                </p>
                <h1 className=" text-xl font-bold  text-green-600">£{skip.price_before_vat}</h1>
            </div>
            <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />
            <div className="flex justify-center items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-emerald-600 m-3 ml-10">£{skip.price_before_vat}</span>
            </div>
            <div className="m-5" >
                 <button type="button" className=" w-30 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-500">Back</button>
                <button type="button" className=" w-30 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700">Continue</button>
            </div>
            <p className=" text-xs text-justify m-2 bg-blue-50 text-gray-600 leading-relaxed"> *Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
        </div>
      </div>
    )
  }
  
  export default OrderSummary
  
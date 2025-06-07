
interface SkipItemProps{
    item:Skip,
    skipSelection:(skip:Skip)=>void
}

function SkipItem({item,skipSelection}:SkipItemProps) {
  const imageSource=`${item.size}-yarder-skip.jpg`
    return (
      <div >
        <div onClick={()=>skipSelection(item)} className="max-w-sm rounded overflow-hidden shadow-lg hover:outline-2 outline-green-300 text-center m-5 bg-stone-100">
            <img className="w-full h-58" src={imageSource} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.size} Yard Skip</div>
                <p className="text-gray-700 text-base">
                    {item.hire_period_days} day hire period
                </p>
                <h1 className=" text-xl font-bold  text-green-600">£{item.price_before_vat}</h1>
            </div>
        </div>
      </div>
    )
  }
  
  export default SkipItem
  
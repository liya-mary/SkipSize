
interface SkipItemProps{
    item:Skip
}

function SkipItem({item}:SkipItemProps) {
  const imageSource=`${item.size}-yarder-skip.jpg`
    return (
      <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:outline-2 outline-green-300 text-center">
            <img className="w-full" src={imageSource} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.size} Yard Skip</div>
                <p className="text-gray-700 text-base">
                    {item.hire_period_days} day hire period
                </p>
                <h1 className=" text-xl font-bold  text-green-600">£{item.price_before_vat}</h1>
            </div>
        </div>
      </>
    )
  }
  
  export default SkipItem
  
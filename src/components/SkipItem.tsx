import WarningBadge from "./WarningBadge"

interface SkipItemProps {
  item: Skip,
  skipSelectionFunction: (skip: Skip) => void,
  selectedSkip: Skip | undefined
}

function SkipItem({ item, skipSelectionFunction, selectedSkip }: SkipItemProps) {
  const imageSource = `${item.size}-yarder-skip.jpg`
  return (
    <div >
      <div onClick={() => { skipSelectionFunction(item) }} className={`max-w-sm rounded overflow-hidden shadow-lg hover:outline-2 outline-green-300 text-center m-5 bg-stone-100  ${selectedSkip?.id === item.id ? 'outline-2 outline-green-600 ' : ''}`}>
        <div className=" relative">
          <img className=" w-full h-58 " src={imageSource} alt="Sunset in the mountains" />
          {!item.allowed_on_road &&
            <div className="absolute top-1">
              <WarningBadge text="Not Allowed On The Road" />
            </div>

          }

          {!item.allows_heavy_waste &&
            <div className="absolute top-10">
              <WarningBadge text=" Not Suitable For Heavy Waste" />
            </div>
          }
        </div>


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

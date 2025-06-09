import { useEffect, useState } from "react";
import apiService from "../apiService";
import SkipItem from "./SkipItem";

interface SkipContainerProps {
  skipSelectionFunction: (skip: Skip) => void,
  selectedSkip: Skip | undefined
}

function SkipContainer({ skipSelectionFunction, selectedSkip }: SkipContainerProps) {
  const [skipDetails, setSkipDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const out = await apiService.getSkipDetails();
      console.log("out from skipcontainer: ", out);
      setSkipDetails(out);
    })();
  }, [])



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full xl:w-3/4 ">
      {
        skipDetails.map((skipItem: Skip) => {
          return <div>
            <SkipItem key={skipItem.id} item={skipItem} skipSelectionFunction={skipSelectionFunction} selectedSkip={selectedSkip} />
          </div>
        })
      }

    </div>
  )
}

export default SkipContainer

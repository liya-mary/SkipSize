import { useEffect, useState } from "react";
import apiService from "../apiService";
import SkipItem from "./SkipItem";

function SkipContainer() {
    const[skipDetails,setSkipDetails]=useState([]);

    useEffect(()=>{
       ( async ()=>{
            const out=await apiService.getSkipDetails();
            console.log("out from skipcontainer: ",out);
            setSkipDetails(out);
        })();
    },[])



    return (
      <>
      {
        skipDetails.map((skipItem:Skip)=>{
           return  <div>
                <SkipItem key={skipItem.id} item={skipItem}/>
            </div>
        })
      }
  
      </>
    )
  }
  
  export default SkipContainer
  
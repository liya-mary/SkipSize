import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import OrderSummary from './components/OrderSummary'
import SkipContainer from './components/SkipContainer'

function App() {
  const [selectedSkip, setSelectedSkip]=useState<Skip|undefined>();

  function onSkipSelection(skip:Skip){
    console.log("skip received:, ",skip);
    setSelectedSkip(skip);
  }


  return (
    <>
      <Header/>
      <div className="flex flex-col xl:flex-row gap-4">
        <SkipContainer skipSelection={onSkipSelection}/>
        <OrderSummary skip={selectedSkip}/>
      </div>
    </>
  )
}

export default App

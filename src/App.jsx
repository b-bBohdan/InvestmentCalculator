import { useState } from "react"
import Input from "./components/Input"
import Header from "./components/Header"
import Result from "./components/Result"


function App() {
  const [data, setData] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  })

  
  function handleChange(identifier, value){
    setData((prevData)=>{
      return {...prevData,
        [identifier]: +value}})
  }

  return (
      <>
      <Header/>
      <main id="user-input">
        <div className="input-group">
          <Input title = "Initial investment" 
          value={data.initialInvestment}
          onChange={(e)=>handleChange("initialInvestment", e.target.value)}/>

          <Input title = "Annual investment"
           value={data.annualInvestment}
          onChange={(e)=>handleChange("annualInvestment", e.target.value)}/>
           </div>
        <div className="input-group"> 
          <Input title = "Expected return"  value={data.expectedReturn}
          onChange={(e)=>handleChange("expectedReturn", e.target.value)}/>

          <Input title = "Duration"  value={data.duration}
           onChange={(e)=>handleChange("duration", e.target.value)}/>
         
        </div>
        
      </main>

     {data.duration>0
     ?<Result data ={data}></Result>
     :<p className="center">Invalid inputs</p>}
      </>
  )
}

export default App

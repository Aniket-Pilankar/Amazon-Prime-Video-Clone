import { useState } from "react"
import cardlogo from "./images/cardlogo.png"
import axios from "axios"

export const Add=()=>{
 const [data,setdata]=useState(false)
 const [check,subcheck]=useState(false)
 const [form,setform]=useState({
     name:"",
     number:"",
     month:"",
     year:""
 })
    const handlechange=(e)=>{
       setdata(true)
    }
 const handledata=(e)=>{
     const {id,value}=e.target
     setform({...form,[id]:value})
 }
 const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8080/users",{
      name:form.name,
      number:form.Cardnumber,
      month:form.month,
      year:form.year
  })
  subcheck(true)
 }
    

   

    return(
       <>
            <div className="top">
            <div className="primelogo">
            <img className="logomain" src={cardlogo}></img>
            <h3 className="headw">Watch now, cancel anytime</h3>
            <p className="textw">Start your 30-day free trial</p>
            </div>
            <div className="mirror">
            </div>
            </div>

            <div className="info">
                <p>A Rs.2 refundable transaction is required to verify your card. After the 30-day free trial, your Prime membership will auto-renew with a charge of ₹1,499 a year unless canceled. Cards issued outside India can't be used to purchase Prime memberships.</p>

            </div>
            <p className="addhead">Add a billing address</p>
            <div className="inputdiv2">
                <form>
               <label>Full Name</label><br></br>
               <input type="text" ></input><br></br> 
               <label>Phone number</label><br></br>
               <input type="number" ></input> <br></br>
               <label>ZIP Code</label><br></br>
               <input type="number" ></input>  <br></br>
               <label>Address Line 1</label><br></br>
               <input type="text" ></input> <br></br> 
               <label>Line2</label><br></br>
               <input type="text" ></input>  <br></br>
               <label>City</label><br></br>
               <input type="text" ></input>  <br></br>
               <label>State</label><br></br>
               <input type="text" ></input> <br></br>
               <input className="submit" type="submit" value="Use this address"></input> 
               </form>

            </div>
            <div className="conti">
            <button className="continue">Continue</button> <br></br> 
            --------------Or---------------  
            <div className="end">
            Skip the free trial and buy a Prime membership without auto-renew. (All electronic payment methods eligible)
            </div>
             </div>
            </>
    )
}
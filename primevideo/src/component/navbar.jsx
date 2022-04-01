



import "./nav.css"


import PopupGfg from"./sign"

import 'font-awesome/css/font-awesome.min.css';

import logo from"../img/prime_video_Logo.png"
import { useState } from "react"


<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
export const Nav=()=>{
    const sytels=()=>{
        {
            fontSize:"30px"
            
        }
      
    }
    const [isShown, setIsShown] = useState(false);
    const[usert,setUsert]=useState(false)
    
    return (
        <div id="maindiv">
 
            <div id="navdiv">
            <div >
                <img src={logo}alt="logo" />
            </div>
            <div id="leftdiv">
            <div> <h3>Home</h3></div>
            <div><h3>TV Shows</h3></div>
            <div><h3>Movies</h3></div>
            <div><h3>Channels</h3></div>
           
            <div className="hideboxmain" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> <h3>Categories</h3></div>
            </div>
            <div id="rightdiv">
            <div > <i class="fa fa-search" aria-hidden="true"></i>
           
                <input type="text" id="inputbox" /></div>
            <div  onClick={()=>setUsert(!usert)}>  <i className="fa fa-user-circle-o"  id="user"></i></div>
            </div>
            </div>

            <div>
            {isShown && (
        <div className="hidebox">
         
         <div id="catdiv">
             <h3>Top categories</h3>
            <div id="catdivmain">
                <div>include with prime</div>
                <div>Amazon orignal</div>
                <div>Movies</div>
                <div>Tv</div>
                <div>KIDs</div>
            </div>
         </div>
         <div >


      



            
         <div id="language">
             <h2>Audio languages</h2>
             <table className="rahultb">
                 <tr>  <td>English</td>
                  <td>Hindi</td>
                 </tr>
                 <tr>
                     <td>   Telugu</td>
                     <td>Tamil</td>
                 </tr>
                 <tr>
                     <td>tamil</td>
                     <td>malyalm</td>
                 </tr>
                 <tr>
                     <td>Kannada</td>
                     <td>Malayalam</td>
                 </tr>
             </table>
         </div>
     






         <div id="movcat">
             <h2>Other categories</h2>
         <table className="rahultbh">
                 <tr>  <td>    Drama</td>
                  
                 </tr>
                 <tr>
                     <td>Action and adventure</td>
    
                 </tr>
                 <tr>
                     
                     <td>Romance</td>
                 </tr>
                 <tr>
                     
                     <td>Comedy</td>
                 </tr>
                 <tr>
                     
                     <td>Suspense</td>
                 </tr>
                 <tr>
                     
                     <td>Horror</td>
                 </tr>
             </table>
         </div>
         </div>




      
    </div>
      )}
       {usert && (
       <PopupGfg/>
      )}
      </div>
         
            {/* <i class='fas fa-angle-down' style='font-size:48px;color:red'></i> */}
        </div>
    )
}
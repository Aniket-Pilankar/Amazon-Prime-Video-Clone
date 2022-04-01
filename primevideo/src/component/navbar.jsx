



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
            <div><h3>Video</h3></div>
            <div><h3>tv show</h3></div>
            <div><h3>taerge</h3></div>
           
            <div className="hideboxmain" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> <h3>category</h3></div>
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
             <h3>top category</h3>
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
             <h2>language</h2>
             <table className="rahultb">
                 <tr>  <td>hindi</td>
                  <td>english</td>
                 </tr>
                 <tr>
                     <td>marathi</td>
                     <td>urdu</td>
                 </tr>
                 <tr>
                     <td>tamil</td>
                     <td>malyalm</td>
                 </tr>
                 <tr>
                     <td>uropian</td>
                     <td>chini</td>
                 </tr>
             </table>
         </div>
         <div id="movcat">
             <h2>type</h2>
         <table className="rahultbh">
                 <tr>  <td>hindi</td>
                  
                 </tr>
                 <tr>
                     <td>marathi</td>
    
                 </tr>
                 <tr>
                     
                     <td>malyalm</td>
                 </tr>
                 <tr>
                     
                     <td>chini</td>
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
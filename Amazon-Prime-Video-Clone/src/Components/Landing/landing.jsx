import hayu from "../images/hayu.jpg"
import Docubay from "../images/Docubay.jpg"
import Discovery from "../images/Discovery.jpg"
import Erosnow from "../images/Erosnow.jpg"
import hoichoi from "../images/hoichoi.jpg"
import Lionsgate from "../images/Lionsgate.jpg"
import MANO from "../images/MANO.jpg"
import Mubi from "../images/Mubi.jpg"
import ShortsTV from "../images/shortTv.jpg"
import "./landing.css"

export const Landing=()=>{
 return(
     <>
     <div className="div1">
         <button className="button1">Start your 30-day free trial</button>
     </div>
                 <div className="div2">
            <div className="sub1div2">
           <h3 className="headsub1">Your favorite channels all in one place</h3>
           <p className="text">With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
            </div>
            <div className="sub2div2">
                <div>
                <img className="landimg" src={Lionsgate}></img>
                </div>
                <div>
                <img className="landimg" src={Discovery}></img>
                </div>
                <div>
                <img className="landimg" src={Erosnow}></img>
                </div>
                <div>
                <img className="landimg" src={hoichoi}></img>
                </div>
                <div>
                <img className="landimg" src={Docubay}></img>
                </div>
                <div>
                <img className="landimg" src={ShortsTV}></img>
                </div>
                <div>
                <img className="landimg" src={Mubi}></img>
                </div>
                <div>
                <img className="landimg" src={MANO}></img>
                </div>
                <div>
                    <img className="landimg" src={hayu}></img>
                </div>
            </div>
          
         </div>
         <div className="div3">
        <button className="button3">Get started</button>      
        </div>
        <div className="div4">
        <button className="button4">Get started</button>   
        </div>
        <div className="div5">
        <button className="button5">Get started</button>
        </div>

     </>
 )
}
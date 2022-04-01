import {axios} from "axios"

import "./movieDetails.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Related } from "./Related"
import { Details } from "./Details"

export const MovieDetails = () => {
    const data=  
        {
        "id": 1,
        "title": "Game Over: Kasparov and the Machine",
        "director": "Mirabella Ciani",
        "starring": "Felix Broadley",
        "subtitles": "Bosnian",
        "audio_languages": "Bengali",
        "season": 1,
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "genre": "Documentary",
        "duration": "2 h 50 min",
        "year": "2021",
        "rating": "5.7",
        "producers": "Dil Raju",
        "studio": "24 Frames Factory",
        "content_advisory": "Smoking, substance use, alcohol use, foul language, sexual content, violence",
        "supporting_cast":"Naveen Chandra, Navdeep, Harsha, Mahima Makwana, Karma McCain"
      }
    
    useEffect(()=>{
        // axios.get("http://localhost:2345/movieData").then(({data}) => {
        //     console.log(data);
        // });
    })
    const [page, setPage] = useState("true");
    // const [play, setPlay] = useState(0);
    // console.log(play)
    // const cal = (value) => {
    //     setPlay(play + value);
    //     console.log(value)
    // }
    const [play,setPlay] = useState("true")

    return (
        <div>
            <div className="Main_div"
                // style={{ backgroundImage: "url('https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4b0182f25032adfd88472562ce0b1dd54cdf2e28bdf4ee78ecc04b1cc78da8f4._RI_V_TTW_.png')" }}
            >
                <div className="data_div">
                    <p>AMAZON ORIGINAL</p>
                    <h1 id="title">{data.title}</h1>
                    <div className="miniDes_div">
                        <p><img className="title_below_img"src="\src\images\imdb.png" alt=""/></p>
                        <p>{data.rating}</p>
                        <p>{data.duration}</p>
                        <p>{data.year}</p>
                        <p><button className="title_below_btn">X-Ray</button></p>
                        <p><button className="title_below_btn">U/A 18+</button></p>
                        <p><img className="title_below_img" src="\src\images\msg.png" alt=""/></p>
                    </div>
                    <div className="playOpt_div">
                        {/* <button id="play_btn" onClick={() => { cal(+1) }}>{play === 0 ? "Play" : "Continue Watching"}</button> */}
                        <button id="play_btn" onClick={() => setPlay(!play)}>{play? "Play" : "Continue Watching"}</button>
                        <p><img style={{ width: "40%",marginRight:"30px" }} src="\src\images\play.png" alt=""/></p>
                        <p><img style={{ width: "50%" }} src="\src\images\add.png" alt="watchList" /></p>
                        <p><img style={{ width: "25%" }} src="\src\images\watchParty.png" alt="" /></p>
                        <p><img style={{ width: "50%"}} src="\src\images\download.png" alt=""/></p>
                    </div>
                    <p>{data.description}</p>
                    <div className="extraDetail_div">
                        <div className="headings">
                            <p>Director </p>
                            <p>Starring </p>
                            <p>Genres</p>
                            <p>Subtitles</p>
                            <p>Audio languages</p>
                        </div>
                        <div className="details">
                            <p className="colorChan">{data.director}</p>
                            <p className="colorChan">{data.starring}</p>
                            <p className="colorChan">{data.genre},{data.genre}</p>
                            <p>{data.subtitles}</p>
                            <p>{ data.audio_languages}</p>
                        </div>
                    </div>
                    
                </div>
                <div
                    style={{
                        // backgroundImage: "url('https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4b0182f25032adfd88472562ce0b1dd54cdf2e28bdf4ee78ecc04b1cc78da8f4._RI_V_TTW_.png')",
                        // position: "relative",
                /* z-index: 100; */
                /* background-color: rgba(0,0,0,0.5); */
                      opacity:"0.2",
                      backgroundSize:"cover",
                      width:"100%",
            }}
                >
                    <img style={{width:"80%",paddingLeft:"20%"}}src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4b0182f25032adfd88472562ce0b1dd54cdf2e28bdf4ee78ecc04b1cc78da8f4._RI_V_TTW_.png"/>
                </div>
               
            </div>
           
            <div className="details_below_div">
                <p>By clicking play, you agree to our <span className="colorChan">Terms of Use</span>.</p>
                <div className="side_div">
                    <p><img className="side_div_img"src="\src\images\share.png" alt=""/>Share</p>
                    <p><img className="side_div_img" src="\src\images\pencil.png" alt=""/>Feedback</p>
                    <p><img className="side_div_img" src="\src\images\help.png" alt=""/>Get help</p>
                </div>    
            </div>
            
            <div className="details_navbar">
                <h2 onClick={() => setPage(true)}>Related</h2>
                <h2 onClick={() => setPage(false)}>Details</h2>
            </div>

            <div className="slider_div">
                    {page? <Related /> : <Details />}

            </div>
        </div> 
        
    )
}
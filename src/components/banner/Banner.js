
import React, { useEffect, useState } from 'react'
import { instance } from '../../config'
import requests from "../../requests"
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            try {

                const res = await instance.get(requests.fetchNetflixOriginals)

                setMovie(res.data.results[
                    Math.floor(Math.random() * res.data.results.length - 1)
                ])


            } catch (err) {
                console.log(err);
            }
        }

        fetchMovie();
    }, [])


    function truncate(str, n) {
        return str?.length > n && str.substr(0, n - 1) + "..."
    }
    return (
        <header className='banner'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "center center" }}>

            <h1 className='bannerTitle'>{movie.title || movie.name || movie.original_name}</h1>
            <div className='bannerContents'>
                <p>{truncate(movie.overview, 100)}</p>
                <div className='buttons'>
                    <button>Play</button>
                    <button>More info</button>
                </div>
            </div>

        </header>
    )
}

export default Banner














// import React from 'react'
// import "./Contents.css"


// function Contents() {
//     return (
//         <div className='container'>
//             <div className='wrapper'>
//                 <div className='content-left'>
//                     <h2>
//                         Best Website & Application Development Company
//                         Rooting Your Business With Us
//                     </h2>
//                     <p>We provide perfect solutions for your Business. We listen, do research and make plans together with our clients to reach clients goals, whether it be developing a website, a software or a product or a mobile application.</p>

//                     <button>Download</button>
//                 </div>
//                 <div className='content-right'>
//                     <img src='https://www.stackroots.in/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2FimageHero.98cb29c963d24e113b6d27f975aa9a45.png&w=640&q=75' alt='aboutImg' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contents
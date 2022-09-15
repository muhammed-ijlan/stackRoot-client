import React from 'react'
import Banner from '../components/banner/Banner'
import Row from "../components/row/Row"
import requests from "../requests"


function Home() {
    return (
        <>
            <Banner />
            <Row isLargeRow={true} title="Our Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row isLargeRow={false} title="Top Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row isLargeRow={false} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

        </>
    )
}

export default Home
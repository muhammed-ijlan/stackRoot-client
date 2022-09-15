import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner'
import Row from "../components/row/Row"
import requests from "../requests"
import { useSelector } from "react-redux"


function Home() {
    const { currentUser } = useSelector((state) => state.user)
    useEffect(() => {
        console.log("currentUser is", currentUser);
    }, [currentUser])

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
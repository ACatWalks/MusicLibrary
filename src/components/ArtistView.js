import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function ArtistView(){
    const {id} = useParams()
    const [artistData, setArtistData] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data goes here!</p>
        </div>
    )
}

export default ArtistView
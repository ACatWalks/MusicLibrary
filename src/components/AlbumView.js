import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function AlbumView(){
    const {id} = useParams()
    const [albumData, setAlbumData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }
    const albumInfo = () => {
        if(albumData.length === 0){
            return (
                <h2>Loading...</h2>
            )
        } else{
            return (
                <div>
                <h2>Album: {albumData[0].collectionName}</h2>
                <h2>Artist: {albumData[0].artistName}</h2>
                <h2>Number of Tracks: {albumData[0].trackCount}</h2>
                </div>
            )
        }
    }
    return (
        <div>
            {albumInfo()}
            {navButtons()}
            {renderSongs}
        </div>
    )
}

export default AlbumView
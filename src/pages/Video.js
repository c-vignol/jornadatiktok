import React, {useRef, useState} from 'react'; 
import VideoFooter from "./components/Footer/VideoFooter"
import "./Video.css"
import VideoSidebar from "./components/Sidebar/VideoSidebar"

function Video({likes, messages, shares, name, description, song, url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){

        if(play){
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }

    }

  return (
    <div className="video">
        <video 
            className="video__player"
            ref={videoRef}
            onClick={handleStart}
            loop
            src={url}
        >
        </video>
        <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
        />
        <VideoFooter 
        name={name}
        description={description}
        song={song}
        />
        </div>
  )
}

export default Video
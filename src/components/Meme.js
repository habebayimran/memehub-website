import React from 'react'
import '../style.css'
import memesdata from '../memesdata'

export default function Meme() {
    // const [memeimage,setmemeimage] = React.useState("")
    const [meme,setmeme] = React.useState({
        toptext : "",
        bottomtext : "",
        randomimage :"https://i.imgflip.com/4acd7j.png"
    })

    const[allmemeimage, setallmemeimage]= React.useState(memesdata)

    function getmeme(){
        const memesArray = allmemeimage.data.memes
        const randomnumber =Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomnumber].url
        setmeme(prevmeme => (
            {
                ...prevmeme,
                randomimage: url
            }
        ))
    }

    function handlechange(event){
        const{name,value}=event.target
        setmeme(prevmeme => (
            {
                ...prevmeme,
                [name]:value
            }
        ))
    }


  return (
    <main>
        <div className='form'>
            <input type='text' className='form-input' placeholder='Enter Top Text' name='toptext' value={meme.toptext} onChange={handlechange} />
            <input type='text' className='form-input' placeholder='Enter Bottom Text' name='bottomtext' value={meme.bottomtext} onChange={handlechange} />
            <button className='form-btn' onClick={getmeme}>Generate Meme !</button>
        </div>
        <div className='meme'>
            <img alt="summa" src={meme.randomimage} className='meme-image'></img>
            <h2 className='meme-text-top'>{meme.toptext}</h2>
            <h2 className='meme-text-bottom'>{meme.bottomtext}</h2>
        </div>
    </main>
  )
}
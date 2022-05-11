import './App.css';
import Tweet from "./components/Tweet.jsx";
import {useState} from "react";

function App() {

  let [tweets, setTweets] = useState(['1', '2', '3', '4'])
  let [twit, setTwit] = useState("");

  function addTweet(){
    setTweets([...tweets, twit])
  } 

  function removeTweet(e){
    let index = e.target.value;
    let txt = tweets[e.target.value];
    //tweets.splice(e.target.value, 1);
    let updatedTweets = tweets.filter(tweet => tweet !== txt);
    setTweets(updatedTweets);
  }

  return (
    <div className="App">
      {tweets.map((tweet, index) => { 
        return <div><Tweet text={tweet} key={index} /><button value={index} onClick={removeTweet} style={{background:'red'}}>del</button></div>
        })}
        <input type="text" value={twit} onChange={k => {setTwit(k.target.value)}}></input>
        <button onClick={addTweet} style={{background: 'aqua', width: '80px', height: '35px', }}>ADD</button>
    </div>
  );
}

export default App;

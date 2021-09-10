import './App.css';
import image from "./logo.png"
import CheckBox from './checkbox';
import SendButton from './SendButton';
import Lesson from './lesson';

function Tugas9() {
  return (
    <div className="App">
      <div id="Container">
          <img src={image}></img>
          <div className="Text-Container">
        <h1 id="title">THINGS TO DO</h1>
        <p>During Bootcamp in Jabarcodingcamp</p>
        <hr id="thick-line"></hr>
          <CheckBox subject="Belajar Git & CLI"/>
        <hr></hr>
        <CheckBox subject="Belajar HTML & CSS"/>
        <hr></hr>
        <CheckBox subject="Belajar Javascript"/>
        <hr></hr>
        <CheckBox subject="Belajar ReactJS Dasar"/>
        <hr></hr>
        <CheckBox subject="Belajar ReactJS Advance"/>
        <hr></hr>
        <SendButton/>
      </div>
        </div>
        <Lesson/>
    </div>
  );
}

export default Tugas9;

import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';

function App(){
  return(
    <>
    < Navbar title="VerseText" aboutText="About"/>
    <div className='container my-3'>
      <TextForm heading="Enter the text analyze below" />

    </div>

    </>
     
  );
}

export default App;

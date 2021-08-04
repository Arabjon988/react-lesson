import './App.css';
import Header from './containers/Header';
// import { AiFillBell } from 'react-icons/ai';
// import { DiAndroid} from 'react-icons/di';



function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

// bunda oxirgi object koriladi
//<Header pod={follewrs[follewrs.length-1]}  />
// const follewrs = [
  //   "Arabjon",
  //   "Diyorbek",
  //   "Samandar"
  // ]
  // <Header pod={follewrs}  icon={icons} />

  // const icons=[
  //   <AiFillBell  className="yellow"/>,
  //   <DiAndroid  className="red"/>
  // // ]
  //    const demoFunction=()=>{
  //      const backColor = document.querySelector('.color')
  //      backColor.style.backgroundColor= 'blue'
  //      const pText= document.querySelector('.text')
  //      pText.style.color= 'blue'
  //    }
import Main from './Components/Instance/Main'
import MainBubbling from './Components/Bubbling/MainBubbling'
import Parent from './Components/ParentComponent/Parent'
import ParentApiContext from './Components/ApiContext/ParentApiContext'

function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      {/* <div style={{ border: '1px solid red', width: 350 }}>
        <MainBubbling></MainBubbling>
        <Parent></Parent>
      </div> */}
        <ParentApiContext />
    </div>
  );
}

export default App;
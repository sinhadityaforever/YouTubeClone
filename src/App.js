
import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
function App() {
  return (
    //Header
    //Sidebar
    //components
    <div className="App">
    
    <Header></Header>
    <div className='app__page'>
       <Sidebar></Sidebar>
       <RecommendedVideos></RecommendedVideos>
     </div>
    </div>
  );
}

export default App;

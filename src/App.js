import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="app__body">
        <Sidebar />
        <Posts/>
      </div>
    </div>
  );
}

export default App;

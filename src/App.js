import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';
import dataList from "./Components/Movies.json"
function App() {
  return (
    <>
      <h1 style={{
        textAlign: "center"
      }}>MoviesHub</h1>
      <div style={{
        border: "1px solid gray",
        margin: "40px",
        borderRadius: "20px",
        background: "linear-gradient(black,white)"
      }}>
        {
          dataList.map((data, idx) => <Movies key={idx} img={data.Images[0]} title={data.Title} />)
        }

      </div>

    </>
    
  );
}

export default App;

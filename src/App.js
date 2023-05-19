import "./App.css";
import  Header  from "./MyComponents/Header";
import  Todos  from "./MyComponents/Todos";
import  Footer  from "./MyComponents/Footer";

 

function App() {
  return (
    <>
    <Header />
    <Todos />
    <Footer  myname ="saurabh" />
    </>
  )
}

export default App;

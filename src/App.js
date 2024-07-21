
import './App.css';
import Header from './MyContent/Header';
import TextForm from './MyContent/TextForm';
function App() {
  return (
    <>
     <Header title="Navbar"></Header>
    <div className="container main my-3 px-3">
      <TextForm heading="Enter text to analyze below"></TextForm>
    </div>
    </>
  );
}
export default App;

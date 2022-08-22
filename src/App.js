import './App.css';

function App() {
  const Myf = (props) => {
  return <h1 className="text-3xl font-bold flex justify-center mt-4">Hello, {props.name} </h1>
 }
 const myf2 = (name) => {
  return <h1 className="text-3xl font-bold flex justify-center mt-4">Hello, {name} </h1>
 }
  
 //which is the best practice?

  return (
    <>
     <Myf name="mic"/>
     {myf2('mic')}
    </>
  );
}

export default App;

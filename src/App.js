import './App.css';

function App() {
  const name = <span className="text-3xl font-bold">mic</span>;
  const Myf = (props) => {
  return <h1 className="text-3xl font-bold flex justify-center mt-4">Hello, {props.name} </h1>
 }
 const myf2 = (name) => {
  return <h1 className="text-3xl font-bold flex justify-center mt-4">Hello, {name} </h1>
 }
  
 
  return (
    <>
     <Myf name={name} />
     {myf2(name)}
    </>
  );
}

export default App;

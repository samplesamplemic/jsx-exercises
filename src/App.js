import './App.css';

function App() {
  const fsum = (a, b) => a + b;
  const sum = <h2 className="text-3xl font-bold flex justify-center mt-4">The sum is: {fsum(1, 1)}</h2>;
  
  return (
    <>
      {sum}
    </>
    
  );
}

export default App;

import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Features from "./components/Features";

function App() {
  return (
    <>
      <main className="text-color-white tracking-wider bg-color-primary">
        <NavBar />
        <Home />
        <Features />
      </main>
    </>
  );
}

export default App;

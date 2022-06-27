import "./App.css";
import useHover from "./components/useHover";

function App() {
  const [ref, isHovered] = useHover();
  return <div ref={ref}>{isHovered ? "hovered" : "not hovered"}</div>;
}

export default App;

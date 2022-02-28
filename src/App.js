import { useState } from "react";
import Content from "./Content";
function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App" style={{ padding: 50 }}>
    <button type="">Show</button>
      <Content/>
    </div>
  );
}

export default App;

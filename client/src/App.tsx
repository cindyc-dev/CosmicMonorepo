import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SERVER_URL } from "@cosmic-monorepo/shared/constants";
import { ExampleI } from "@cosmic-monorepo/shared/types";

function App() {
  const [count, setCount] = useState(0);
  const [exampleResponse, setExampleResponse] = useState<ExampleI | null>(null);

  // Get example request from server
  const getServerData = async () => {
    const response = await fetch(`${SERVER_URL}/example`);
    const data: ExampleI = await response.json();
    console.log(data);
    setExampleResponse(data);
  };

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {exampleResponse && (
        <div>
          <h1>Response from Server:</h1>

          <div>
            <p>
              Id: {exampleResponse.id}
              <br />
              Name: {exampleResponse.name}
            </p>
          </div>
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

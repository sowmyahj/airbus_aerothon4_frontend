import "./App.css";
import { useState } from "react";

function App() {
  const [projectName, setProjectName] = useState("");
  const [frontEnd, setFrontEnd] = useState("React");
  const [backEnd, setBackEnd] = useState("Node");
  const [db, setDb] = useState("MongoDB");

  async function download(e) {
    e.preventDefault();
    const regex = /[^-A-Za-z0-9_]/;
    if (
      projectName.trim() === "" ||
      projectName.length > 30 ||
      regex.test(projectName)
    ) {
      alert("Please enter a valid project name.");
      setProjectName("");
      return;
    }

    let url =
      "/api/downloadProject/" +
      projectName +
      "/" +
      frontEnd +
      "/" +
      backEnd +
      "/" +
      db;
    fetch(url);
  }

  return (
    <div>
      <header className="App-header">
        <h1> AIRBUS Aerothon 4.0 - Web application toolkit </h1>
      </header>
      <div className="App-form">
        <form onSubmit={(e) => download(e)}>
          <div className="mb-3 row">
            <label className="col-sm-5 col-form-label fw-bold">
              Enter project name{" "}
            </label>
            <input
              className="w-25 form-control"
              type="text"
              placeholder="type here"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <div className="form-text">
              [Max 30 chars; Allowed chars: A-Z, a-z, 0-9, hyphen, underscore]
            </div>
          </div>
          <br />
          <div className="mb-3 row">
            <label className="col-sm-5 col-form-label fw-bold">
              {" "}
              Select a Front-end framework
            </label>
            <select
              className="w-25 form-select"
              value={frontEnd}
              onChange={(e) => setFrontEnd(e.target.value)}
            >
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="HTML">HTML</option>
            </select>
          </div>
          <br />

          <div className="mb-3 row">
            <label className="col-sm-5 col-form-label fw-bold">
              {" "}
              Select a Back-end framework
            </label>
            <select
              className="w-25 form-select"
              value={backEnd}
              onChange={(e) => setBackEnd(e.target.value)}
            >
              <option value="Node">Node(Express)</option>
              <option value="SpringBoot">SpringBoot</option>
              <option value="Django">Django</option>
              <option value="Flask">Flask</option>
            </select>
          </div>
          <br />
          <div className="mb-3 row">
            <label className="col-sm-5 col-form-label fw-bold">
              Select a Database
            </label>
            <select
              className="w-25 form-select"
              value={db}
              onChange={(e) => setDb(e.target.value)}
            >
              <option value="MongoDB">MongoDB</option>
              <option value="MySql">MySql</option>
            </select>
          </div>
          <br />
          <br />
          <button className="btn btn-primary">
            {" "}
            Download starter project{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

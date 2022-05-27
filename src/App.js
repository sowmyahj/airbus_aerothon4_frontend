import "./App.css";
import { useState,useEffect } from "react";
const  baseUrl ="https://airbus-99.herokuapp.com"

function App() {
  const [projectName, setProjectName] = useState("");
  const [frontEnd, setFrontEnd] = useState("react");
  const [backEnd, setBackEnd] = useState("node");
  const [db, setDb] = useState("mongodb");
  const [api,setApi] =useState("");

  useEffect(()=>{
    setApi(`
    ${baseUrl}`+ "/api/downloadProject/" +
    projectName +
    "/" +
    frontEnd +
    "/" +
    backEnd +
    "/" +
    db
    );
    console.log(api)
  },[projectName,frontEnd,backEnd,db])

  const validateProjName=()=>{
    const regex = /[^-A-Za-z0-9_]/;
    if (
      projectName.trim() === "" ||
      projectName.length > 30 ||
      regex.test(projectName)
    ) {
      return false;
    }
    return true;
  }

  const showAlert = (e) =>{
    e.preventDefault();
    window.alert("Please enter a valid project name.");
  }

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
    // http://localhost:1080?fe=react&be=node&projName=react_node
    // let url =
    //   "/api/downloadProject/" +
    //   projectName +
    //   "/" +
    //   frontEnd +
    //   "/" +
    //   backEnd +
    //   "/" +
    //   db;
    // let url = `http://localhost:3002?fe=${frontEnd}&be=${backEnd}&db=${db}&projectName=${projectName}`
              
    // fetch(url);
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
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
              <option value="html">HTML</option>
              <option value="android_ios">Android/iOS</option>
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
              <option value="node">Node(Express)</option>
              <option value="springboot">SpringBoot</option>
              <option value="django">Django</option>
              <option value="flask">Flask</option>
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
              <option value="mongodb">MongoDB</option>
              <option value="mysql">MySql</option>
            </select>
          </div>
          <br />
          <br />
          {
            validateProjName(projectName)?
              <a href={api} className="btn btn-primary"> Download starter project</a>
              :
              <button className="btn btn-primary" onClick={(e)=>showAlert(e)}>
                {" "}
                Download starter project{" "}
              </button>
          }
        </form>
      </div>
    </div>
  );
}

export default App;

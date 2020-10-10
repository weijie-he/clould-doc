import React from 'react';
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import {defaultFiles} from './utils/defaultFiles'
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3 left-align">
          <FileSearch 
          title={"我的云文档"} 
          onFileSearch={(value)=>{console.log(value)}}
          />
          <FileList 
            files={defaultFiles}
            onFileClick={(id)=>{}}
          />
        </div>
        <div className="col-9 bg-primary right-align">
          <h1>this is the right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

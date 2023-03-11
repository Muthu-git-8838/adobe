import "./App.css";
import HOME from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1C from "./components/Page1C";
import Document from "./components/Document";
import MyComponent from "./components/MyComponent";
import AgreementSender from "./components/Agreement";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HOME />} />
          {/* <Route path="/1c" exact element={<Page1C />} /> */}
          {/* <Route path="/1d" exact element={<FileUpload />} /> */}
          {/* <Route path="/document" exact element={<Document />} /> */}
          {/* <Route path="/my" exact element={<MyComponent />} /> */}
          {/* <Route path="/ag" exact element={<AgreementSender />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

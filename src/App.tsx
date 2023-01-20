import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminContainer from "./container/AdminContainer";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/admin" element={<AdminContainer />}>
              
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

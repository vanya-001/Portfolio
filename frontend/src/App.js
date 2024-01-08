import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Header from "./components/Header";
import {
	Routes,
	Route,
} from "react-router-dom";




function App() {
  return (
   <div className="shadow-lg p-3 m-5" id="box">
   <Header/>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
          		<Route
					exact
					path="/education"
					element={<Education />}
				/>
				<Route
					exact
					path="/"
					element={<Work />}
				/>
          		<Route
					exact
					path="/"
					element={<Contact />}
				/>
			</Routes>
		
   </div>
  );
}

export default App;

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
   <>
   <Header/>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
          <Route
						exact
						path="/"
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
   </>
  );
}

export default App;

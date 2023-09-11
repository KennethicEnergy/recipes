import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import { Navbar, ThemeSelector } from "./components/index";
// styles
import "./App.css";
//routes
import { routes } from "./routes/index";
import { useTheme } from "./hooks";

function App() {
	const { mode } = useTheme();

	return (
		<div className={`App ${mode}`}>
			<Router>
				<Navbar />
				<ThemeSelector />
				<Routes>
					{routes.map((route) => (
						<Route
							key={route.id}
							exact={route.isExact}
							path={route.path}
							element={route.component}></Route>
					))}
				</Routes>
			</Router>
		</div>
	);
}

export default App;

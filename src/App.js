import React from "react";
import "./components/FontawesomeIcon";
import NavBar from "./components/NavigBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "../src/components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="app_container">
			<div className="content_wrapper">
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home}>
							<Home />
						</Route>
						<Route exact path="/skills" component={Skills}>
							<Skills />
						</Route>
						<Route exact path="/projects" component={Projects}>
							<Projects />
						</Route>
						<Route exact path="/about" component={About}>
							<About />
						</Route>
						<Route exact path="/contacts" component={Contacts}>
							<Contacts />
						</Route>
					</Switch>
				</Router>
			</div>

			<Footer />
		</div>
	);
}

export default App;

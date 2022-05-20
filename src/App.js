import "./App.css";
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import WishList from "./views/WishList";
import NavBar from "./common/NavBar";

function App() {
	return (
		<>
			<NavBar />

			<Router>
				<Switch>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/wishlist' element={<WishList />} />
				</Switch>
			</Router>
		</>
	);
}

export default App;

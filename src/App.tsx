import "./App.css";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

function App() {
	return (
		<div>
			<Header />
			<div className="flex flex-col justify-center items-center">
				<Container />
			</div>
		</div>
	);
}

export default App;

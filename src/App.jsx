import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import Router from "./router/Router";

const App = () => {
	return(
		<>
			<BrowserRouter>
				<GlobalStyles/>
				<Router/>
			</BrowserRouter>
		</>

	);
};

export default App;

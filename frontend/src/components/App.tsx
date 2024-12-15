import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Navbar from "./Navbar";

export default function App() {
	return (
		<BrowserRouter>
        <Navbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
		</BrowserRouter>
	);
}
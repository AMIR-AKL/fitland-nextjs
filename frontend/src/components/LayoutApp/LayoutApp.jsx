import React from "react";
import Header from "../Header/Header";
import BeforeFooter from "../BeforeFooter/BeforeFooter";
import Footer from "../Footer/Footer";

export default function LayoutApp({ children }) {
	return (
		<>
			<Header />
			{children}
			<BeforeFooter />
			<Footer />
		</>
	);
}

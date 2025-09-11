import "@/app/styles/globals.css";
import { FitlandShoppingContextProvider } from "@/context/fitlandShoppingContext";

export const metadata = {
	title: "Login",
};

export default function RootLayout({ children }) {
	return <>{children}</>;
}

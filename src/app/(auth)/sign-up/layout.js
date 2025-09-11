import "@/app/styles/globals.css";
import { FitlandShoppingContextProvider } from "@/context/fitlandShoppingContext";

export const metadata = {
	title: "Sign-Up",
};

export default function RootLayout({ children }) {
	return <>{children}</>;
}

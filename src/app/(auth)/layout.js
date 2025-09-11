import "@/app/styles/globals.css";
import { FitlandShoppingContextProvider } from "@/context/fitlandShoppingContext";

export const metadata = {
	title: {
		template: "Fitland | %s",
		default: "Fitland",
	},
};

export default function RootLayout({ children }) {
	return (
		<FitlandShoppingContextProvider>{children}</FitlandShoppingContextProvider>
	);
}

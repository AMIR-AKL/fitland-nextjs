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
		<html lang="fa" dir="rtl">
			<body className="">
				<FitlandShoppingContextProvider>
					{children}
				</FitlandShoppingContextProvider>
			</body>
		</html>
	);
}

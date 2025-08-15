import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
export default function NotFound() {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
			<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-3xl font-semibold text-amber-400">404</p>
					<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
						صفحه یافت نشد{" "}
					</h1>
					<p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
						متاسفیم، صفحه مورد نظر شما را پیدا نکردیم.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							بازگشت به خانه
						</a>
						<Link
							href="contact-us"
							className=" font-semibold flex items-center text-gray-900"
						>
							تماس با پشتیبانی
							<IoIosArrowRoundBack className="size-8 mt-2" />
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}

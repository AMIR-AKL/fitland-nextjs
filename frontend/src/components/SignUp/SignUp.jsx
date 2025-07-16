import { HiOutlineHome } from "react-icons/hi2";
export default function SignUpPage() {
	return (
		<div className="flex min-h-screen overflow-hidden select-none">
			{/* right side */}
			<div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 bg-white">
				<div className=" absolute top-0 left-0 h-full w-full bg-white/50 z-10 bg-blend-hue"></div>
				<div className="w-full max-w-md border border-gray-300 p-8 rounded-xl shadow-xl z-50">
					<h2 className="text-2xl font-iransans-bold">ثبت نام</h2>
					<form className="mt-8 space-y-4">
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								نام و نام خانوادگی*
							</label>
							<input
								className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
								type="text"
								placeholder="نام خود را به فارسی وارد کنید"
								required
								autoComplete="name"
							/>
						</div>
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								شماره تلفن همراه*
							</label>
							<input
								className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
								type="text"
								placeholder="09123546789"
								required
								autoComplete="mobile tel"
							/>
						</div>
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								ایمیل(اختیاری)
							</label>
							<input
								className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
								type="text"
								placeholder="Example@gmail.com"
								required
								autoComplete="email"
							/>
						</div>
						<button
							className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors rounded-lg mt-5 p-2 text-white font-iransans-medium tracking-tight"
							type="submit"
						>
							ثبت نام
						</button>
					</form>
				</div>
			</div>
			{/* left side */}
			<div
				className="w-1/2  bg-blend-color-burn hidden lg:flex items-center z-10 justify-center bg-zinc-950/70"
				style={{
					backgroundImage: "url(./img/signup/signup.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="text-white text-center flex flex-col items-center">
					<h1 className="font-extrabold text-orange-500 text-6xl">FitLand</h1>
					<div className="flex items-center gap-x-2 text-sm">
						<HiOutlineHome className="size-6" />
						<a href="#">برگشت به صفحه اصلی</a>
					</div>
				</div>
			</div>
		</div>
	);
}

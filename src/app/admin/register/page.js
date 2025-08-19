"use client";
import DarkVeil from "@/components/DarkWeil/DarkWeil";
import axios from "axios";
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";

export default function Page() {
	const [inputPasswordType, setInputPasswordType] = useState(true);
	const [form, setForm] = useState({
		firstname: "",
		lastname: "",
		username: "",
		password: "",
	});
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		axios.post("https://fitland-3tiu.onrender.com/api/admin/register", form).then((res) => {
			console.log(res.data);
			window.location.href = "/";
		});
	};

	const typeInputHandler = (e) => {
		e.preventDefault();
		setInputPasswordType(!inputPasswordType);
	};
	return (
		<div className="min-h-screen w-full relative">
			<DarkVeil hueShift={206} />
			<div className="w-full absolute top-15 flex items-center justify-center p-8 text-white">
				<div className="w-full max-w-md border border-gray-300 p-8 rounded-xl shadow-[0_0_8px_5px] shadow-amber-600">
					<h2 className="text-2xl font-iransans-bold">ثبت نام</h2>
					<form onSubmit={submitHandler} className="mt-8 space-y-4">
						{/* firstname */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								نام:
							</label>
							<div className="flex items-center px-2 h-12 border border-gray-300 rounded-lg font-iransans-regular">
								<input
									className="outline-none w-full h-full"
									type="text"
									placeholder="نام خود را به فارسی وارد کنید"
									required
									name="firstname"
									onChange={handleChange}
									autoComplete="name"
								/>
								{/* {nameError && (
								<span className="text-red-500">
								نام باید حداقل ۳ حرف فارسی باشد
								</span>
								)} */}
							</div>
						</div>
						{/* lastname */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								نام خانوادگی:
							</label>
							<div className="flex items-center px-2 h-12 border border-gray-300 rounded-lg font-iransans-regular">
								<input
									className="outline-none w-full h-full"
									type="text"
									placeholder="نام خانوادگی خود را به فارسی وارد کنید"
									required
									name="lastname"
									onChange={handleChange}
									autoComplete="name"
								/>
								{/* {nameError && (
								<span className="text-red-500">
								نام باید حداقل ۳ حرف فارسی باشد
								</span>
								)} */}
							</div>
						</div>
						{/* username */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								نام کاربری:
							</label>
							<div className="flex items-center px-2 h-12 border border-gray-300 rounded-lg font-iransans-regular">
								<input
									className="outline-none w-full h-full"
									type="text"
									placeholder="نام کاربری خود را وارد کنید"
									required
									name="username"
									onChange={handleChange}
									autoComplete="name"
								/>
								{/* {nameError && (
								<span className="text-red-500">
								نام باید حداقل ۳ حرف فارسی باشد
								</span>
								)} */}
							</div>
						</div>
						{/* password */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								رمزعبور:
							</label>
							<div className="flex items-center px-2 h-12 border border-gray-300 rounded-lg font-iransans-regular">
								<input
									className="outline-none w-full h-full"
									placeholder="رمز خود وارد کنید"
									required
									name="password"
									onChange={handleChange}
									type={inputPasswordType ? "password" : "text"}
								/>
								<button
									onClick={typeInputHandler}
									className="w-10 py-1 px-2 rounded-xl bg-amber-500 text-white cursor-pointer hover:bg-amber-600 transition-colors"
								>
									<IoMdEye className="size-5" />
								</button>
								{/* {nameError && (
								<span className="text-red-500">
								نام باید حداقل ۳ حرف فارسی باشد
								</span>
								)} */}
							</div>
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
		</div>
		// <div
		// 	style={{
		// 		backgroundImage: "url(/img/adminbg.jpg)",
		// 		backgroundSize: "cover",
		// 		backgroundPosition: "center",
		// 	}}
		// 	className="flex min-h-screen select-none bg-blend-difference bg-sky-800"
		// >
		// 	<div className="w-full relative flex items-center justify-center p-8 text-white backdrop-blur-xs">
		// 		<div className="w-full max-w-md border border-gray-300 p-8 rounded-xl shadow-[0_0_8px_5px] shadow-amber-600">
		// 			<h2 className="text-2xl font-iransans-bold">ثبت نام</h2>

		// 			<form className="mt-8 space-y-4">
		// 				{/* firstname */}
		// 				<div>
		// 					<label className="block mb-4 font-iransans-medium tracking-tight">
		// 						نام:
		// 					</label>
		// 					<input
		// 						className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
		// 						type="text"
		// 						placeholder="نام خود را به فارسی وارد کنید"
		// 						required
		// 						autoComplete="name"
		// 					/>
		// 					{/* {nameError && (
		// 						<span className="text-red-500">
		// 							نام باید حداقل ۳ حرف فارسی باشد
		// 						</span>
		// 					)} */}
		// 				</div>
		// 				{/* lastname */}
		// 				<div>
		// 					<label className="block mb-4 font-iransans-medium tracking-tight">
		// 						نام خانوادگی:
		// 					</label>
		// 					<input
		// 						className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
		// 						type="text"
		// 						placeholder="نام خانوادگی خود را به فارسی وارد کنید"
		// 						required
		// 						autoComplete="name"
		// 					/>
		// 					{/* {nameError && (
		// 						<span className="text-red-500">
		// 							نام باید حداقل ۳ حرف فارسی باشد
		// 						</span>
		// 					)} */}
		// 				</div>

		// 				{/* username */}

		// 				<div>
		// 					<label className="block mb-4 font-iransans-medium tracking-tight">
		// 						نام کاربری:
		// 					</label>
		// 					<input
		// 						className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
		// 						type="text"
		// 						placeholder="نام کاربری خود را وارد کنید"
		// 						required
		// 						autoComplete="name"
		// 					/>
		// 					{/* {nameError && (
		// 						<span className="text-red-500">
		// 							نام باید حداقل ۳ حرف فارسی باشد
		// 						</span>
		// 					)} */}
		// 				</div>
		// 				{/* password */}
		// 				<div>
		// 					<label className="block mb-4 font-iransans-medium tracking-tight">
		// 						رمزعبور:
		// 					</label>
		// 					<input
		// 						className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
		// 						type="password"
		// 						placeholder="رمز خود وارد کنید"
		// 						required
		// 						autoComplete="name"
		// 					/>
		// 					{/* {nameError && (
		// 						<span className="text-red-500">
		// 							نام باید حداقل ۳ حرف فارسی باشد
		// 						</span>
		// 					)} */}
		// 				</div>
		// 				<button
		// 					className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors rounded-lg mt-5 p-2 text-white font-iransans-medium tracking-tight"
		// 					type="submit"
		// 				>
		// 					ثبت نام
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
	);
}

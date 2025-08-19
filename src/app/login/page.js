"use client";
import DarkVeil from "@/components/DarkWeil/DarkWeil";
import axios from "axios";
import React, { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
export default function Page() {
	const [form, setForm] = useState({ username: "", password: "" });
	const [inputPasswordType, setInputPasswordType] = useState(true);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			axios
				.post("https://fitland-3tiu.onrender.com/api/users/login", form)
				.then((res) => {
					localStorage.setItem("token", res.data.token);
					setForm({ username: "", password: "" });
					window.location.href = "/";
				});
		} catch (err) {
			console.log(err);
		}
	};
	const typeInputHandler = (e) => {
		e.preventDefault();
		setInputPasswordType(!inputPasswordType);
	};
	return (
		<div className="min-h-screen w-full relative">
			<DarkVeil hueShift={206} />
			<div className="w-full absolute top-20 flex items-center justify-center p-8 text-white">
				<div className="w-full max-w-md border border-gray-300 p-8 rounded-xl shadow-[0_0_8px_5px] shadow-amber-600">
					<h2 className="text-2xl font-iransans-bold flex items-center gap-2">
						ورود <IoIosLogIn />
					</h2>
					<form onSubmit={handleSubmit} className="mt-8 space-y-4">
						{/* Name */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								نام کاربری:
							</label>
							<div className="flex items-center px-2 h-12 border border-gray-300 rounded-lg font-iransans-regular">
								<input
									className="outline-none w-full h-full"
									type="text"
									placeholder="نام کاربری را وارد کنید"
									required
									name="username"
									autoComplete="name"
									value={form.username}
									onChange={handleChange}
								/>
								{/* {nameError && (
									<span className="text-red-500">
										نام باید حداقل ۳ حرف فارسی باشد
										</span>
										)} */}
							</div>
						</div>

						{/* Phone */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								رمزعبور:
							</label>
							<div className="flex items-center px-2 h-12 border border-gray-300 rounded-lg font-iransans-regular">
								<input
									className="outline-none w-full h-full"
									name="password"
									onChange={handleChange}
									type={inputPasswordType ? "password" : "text"}
									placeholder="رمز عبور خود را وارد کنید"
									value={form?.password}
								/>
								<button
									onClick={typeInputHandler}
									className="w-10 py-1 px-2 rounded-xl bg-amber-500 text-white cursor-pointer hover:bg-amber-600 transition-colors"
								>
									<IoMdEye className="size-5" />
								</button>
							</div>
							{/* {phoneError && (
									<span className="text-red-500">
										شماره باید با 09 شروع شده و ۱۱ رقم باشد
									</span>
								)} */}
						</div>

						<button
							className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors rounded-lg mt-5 p-2 text-white font-iransans-medium tracking-tight"
							type="submit"
						>
							ورود
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

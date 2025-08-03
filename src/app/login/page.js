"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";

export default function Login() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const [nameError, setNameError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const nameRegex = /^[آ-ی\s]{3,}$/; // فقط فارسی و حداقل ۳ حرف
	const phoneRegex = /^09\d{9}$/; // شروع با 09 و 11 رقم
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ساده ولی معتبر

	const handleSubmit = (e) => {
		e.preventDefault();

		const isNameValid = nameRegex.test(name);
		const isPhoneValid = phoneRegex.test(phone);
		const isEmailValid = email === "" || emailRegex.test(email); // اختیاری

		setNameError(!isNameValid);
		setPhoneError(!isPhoneValid);
		setEmailError(!isEmailValid);

		if (isNameValid && isPhoneValid && isEmailValid) {
			const newUser = {
				id: new Date(),
				name,
				phone,
				email,
			};

			axios.post("http://localhost:3001/users", newUser).then(() => {
				setName("");
				setPhone("");
				setEmail("");
			});
		}
	};

	return (
		<div className="flex min-h-screen overflow-hidden select-none">
			{/* Right side */}
			<div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 bg-white">
				<div className="absolute top-0 left-0 h-full w-full bg-white/50 z-10"></div>
				<div className="w-full max-w-md border border-gray-300 p-8 rounded-xl shadow-xl z-50">
					<h2 className="text-2xl font-iransans-bold">ثبت نام</h2>

					<form onSubmit={handleSubmit} className="mt-8 space-y-4">
						{/* Name */}
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
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{nameError && (
								<span className="text-red-500">
									نام باید حداقل ۳ حرف فارسی باشد
								</span>
							)}
						</div>

						{/* Phone */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								شماره تلفن همراه*
							</label>
							<input
								className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
								type="text"
								placeholder="09123456789"
								required
								autoComplete="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							{phoneError && (
								<span className="text-red-500">
									شماره باید با 09 شروع شده و ۱۱ رقم باشد
								</span>
							)}
						</div>

						{/* Email */}
						<div>
							<label className="block mb-4 font-iransans-medium tracking-tight">
								ایمیل (اختیاری)
							</label>
							<input
								className="w-full h-full border border-gray-300 outline-none p-2 rounded-lg"
								type="email"
								placeholder="Example@gmail.com"
								autoComplete="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{emailError && (
								<span className="text-red-500">ایمیل وارد شده معتبر نیست</span>
							)}
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

			{/* Left side */}
			<div
				className="w-1/2 bg-blend-color-burn hidden lg:flex items-center z-10 justify-center bg-zinc-950/70"
				style={{
					backgroundImage: "url(./img/signup/signup.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="text-white text-center flex flex-col items-center">
					<h1 className="font-extrabold text-orange-500 text-6xl">FitLand</h1>
					<div className="flex items-end gap-x-2 text-sm mt-5 hover:text-sky-600 transition-colors">
						<HiOutlineHome className="size-6" />
						<Link className="font-iransans-demibold" href="/">
							برگشت به صفحه اصلی
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

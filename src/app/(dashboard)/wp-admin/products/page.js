"use client";
import EmptyError from "@/components/EmptyError/EmptyError";
import Sidebar from "@/components/Sidebar/Sidbar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCursorText } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { IoBagOutline, IoImageOutline } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Products() {
	const [form, setform] = useState({
		title: "",
		price: 0,
		count: 0,
		img: "",
		category: "",
		size: "",
	});
	const [rows, setRows] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [currentEdit, setCurrentEdit] = useState({ category: "", id: "" });

	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			axios.post("https://fitland-3tiu.onrender.com/api/products/", form).then((res) => {
				console.log(res.data);
				setform({
					title: "",
					price: 0,
					img: "",
					count: 0,
					category: "",
					size: "",
				});
				fetchAllProduct();
			});
		} catch (err) {
			console.log(err);
		}
	};
	const handleDelete = async (category, id) => {
		// console.log(category, id);
		try {
			await axios
				.delete(`https://fitland-3tiu.onrender.com/api/products/remove/${category}/${id}`)
				.then((res) => {
					console.log(res.data);
					fetchAllProduct();
				});
		} catch (err) {
			console.log(err);
		}
	};

	const handleShowModal = async (modal, category, id) => {
		// محصول رو از دیتابیس یا همون rows پیدا می‌کنیم
		const product = rows.find((p) => p.id === id);
		console.log(product);

		if (product) {
			setform({
				title: product.title,
				price: product.price,
				count: product.count || 0,
				img: product.img,
				category: product.category,
				size: product.size,
			});
		}
		console.log(form);

		// باز کردن مودال
		setShowModal(modal);

		// ذخیره کردن شناسه فعلی برای آپدیت
		setCurrentEdit({ category, id });
	};
	const handleCloseModal = (modal) => {
		setShowModal(modal);
		setform({
			title: "",
			price: 0,
			count: 0,
			img: "",
			category: "",
			size: "",
		});
	};

	const handleUpdate = async (e) => {
		console.log(currentEdit);

		e.preventDefault();
		console.log(form);

		try {
			await axios.put(
				`https://fitland-3tiu.onrender.com/api/products/edite/${currentEdit.category}/${currentEdit.id}`,
				form,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			setShowModal(false);
			fetchAllProduct();
			setform({
				title: "",
				price: 0,
				count: 0,
				img: "",
				category: "",
				size: "",
			});
		} catch (err) {
			console.log(err);
		}
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 250 },
		{
			field: "title",
			headerName: "Title",
			width: 150,
			editable: true,
		},
		{
			field: "price",
			headerName: "Price",
			width: 150,
			editable: true,
		},
		{
			field: "colors",
			headerName: "Colors",
			type: "string",
			width: 110,
			editable: true,
			renderCell: (params) => {
				return (
					<div className="flex items-center h-full gap-1">
						<span className="size-5 rounded-full bg-red-500 block"></span>
						<span className="size-5 rounded-full bg-blue-500 block"></span>
						<span className="size-5 rounded-full bg-green-500 block"></span>
					</div>
				);
			},
		},
		{
			field: "img",
			headerName: "Img",
			width: 160,
			height: 200,
			renderCell: (params) => {
				return (
					<div className="flex items-center w-full justify-center h-full">
						<img
							className="size-22 rounded-lg  object-cover"
							src={params.row.img}
						/>
					</div>
				);
			},
		},
		{
			field: "operation",
			headerName: "عملیات",
			width: 300,
			renderCell: (params) => {
				return (
					<div className="flex items-center justify-center gap-2 w-full h-full">
						<button
							onClick={() => handleDelete(params.row.category, params.row.id)}
							className="bg-red-500 hover:bg-red-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors"
						>
							حذف
						</button>
						<button
							onClick={() =>
								handleShowModal(!showModal, params.row.category, params.row.id)
							}
							className="bg-blue-500 hover:bg-blue-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors"
						>
							ویرایش
						</button>
					</div>
				);
			},
		},
	].map((col) => ({
		...col,
		headerAlign: "center",
	}));

	const fetchAllProduct = async () => {
		await axios("https://fitland-3tiu.onrender.com/api/products/category/all")
			.then((res) => res.data)
			.then((data) => {
				const formattedData = data.map((item) => ({
					id: item._id,
					title: item.title,
					category: item.category,
					price: item.price,
					colors: "red,blue,green",
					img: item.img,
					size: item.size,
					count: item.count,
				}));
				setRows(formattedData);
			});
	};
	useEffect(() => {
		fetchAllProduct();
	}, []);

	return (
		<section className="relative">
			<Sidebar>
				<div className="mt-10">
					<h1 className="font-iransans-bold tracking-tight text-2xl">
						افزودن محصول جدید
					</h1>
					{/* start form */}
					<form
						onSubmit={handleSubmit}
						className="mt-5 bg-white p-8 shadow rounded-lg"
					>
						<div className="grid grid-cols-2 gap-5 ">
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<BsCursorText className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="text"
									name="title"
									value={form.title}
									onChange={handleChange}
									placeholder="نام محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<FaDollarSign className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="text"
									name="price"
									value={form.price}
									onChange={handleChange}
									placeholder="قیمت محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<IoBagOutline className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="number"
									name="count"
									value={form.count}
									onChange={handleChange}
									placeholder="تعداد محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<IoImageOutline className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="text"
									name="img"
									value={form.img}
									onChange={handleChange}
									placeholder="آدرس عکس محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center justify-between text-gray-400 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								دسته محصولات را انتخاب کنید
								<select
									value={form.category}
									name="category"
									onChange={handleChange}
									required
								>
									<option value="">انتخاب دسته</option>
									<option value="women">women</option>
									<option value="men">men</option>
									<option value="kid">kid</option>
								</select>
							</div>
							<div className="flex items-center justify-between text-gray-400 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								سایز محصولات را انتخاب کنید
								<select
									value={form.size}
									name="size"
									onChange={handleChange}
									required
								>
									<option value="">سایز</option>
									<option value="L">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
									<option value="XXL">XXL</option>
									<option value="L,XL">M,L</option>
									<option value="L,XL">L,XL</option>
									<option value="l,XXL">L,XXL</option>
									<option value="XL,XXL">XL,XXL</option>
									<option value="L,XL,XXL">L,XL,XXL</option>
								</select>
							</div>
						</div>
						<button className="bg-amber-500 text-white py-2 px-6 rounded-lg shadow font-iransans-medium hover:bg-amber-600 transition-colors cursor-pointer mt-5">
							ثبت محصول
						</button>
					</form>
					{/* end form */}
					{/*start data grid */}
					<div className="mt-10 shadow rounded-lg">
						{rows.length ? (
							<Box>
								<DataGrid
									sx={{
										borderRadius: 2,
										direction: "ltr",
										textAlign: "left",
										fontFamily: "IRANSansX Bold",
									}}
									pageSizeOptions={[3]}
									rowHeight={100}
									rows={rows}
									columns={columns}
									disableRowSelectionOnClick
									// checkboxSelection
									disableColumnResize
									initialState={{
										pagination: {
											paginationModel: {
												pageSize: 3,
											},
										},
									}}
								/>
							</Box>
						) : (
							<EmptyError />
						)}
					</div>
				</div>
			</Sidebar>
			{showModal && (
				<div className=" fixed z-20 w-full h-full top-0 bg-zinc-950/50 flex justify-center items-center transition-all">
					<form
						onSubmit={handleUpdate}
						className="mt-5 bg-white p-8 shadow rounded-lg relative"
					>
						<div
							onClick={() => handleCloseModal(!showModal)}
							className="absolute top-0 right-0 cursor-pointer"
						>
							<HiOutlineXMark className="text-red-600 size-6" />
						</div>
						<div className="grid grid-cols-2 gap-5 ">
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<BsCursorText className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="text"
									name="title"
									value={form.title}
									onChange={handleChange}
									placeholder="نام محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<FaDollarSign className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="text"
									name="price"
									value={form.price}
									onChange={handleChange}
									placeholder="قیمت محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<IoBagOutline className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="number"
									name="count"
									value={form.count}
									onChange={handleChange}
									placeholder="تعداد محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center text-gray-600 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								<IoImageOutline className="size-5 animate-pulse" />
								<input
									className="w-full outline-none border-none"
									type="text"
									name="img"
									value={form.img}
									onChange={handleChange}
									placeholder="آدرس عکس محصول را وارد کنید"
									required
								/>
							</div>
							<div className="flex items-center justify-between text-gray-400 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								دسته محصولات را انتخاب کنید
								<select
									value={form.category}
									name="category"
									onChange={handleChange}
									required
								>
									<option value="">انتخاب دسته</option>
									<option value="women">women</option>
									<option value="men">men</option>
									<option value="kid">kid</option>
								</select>
							</div>
							<div className="flex items-center justify-between text-gray-400 gap-1 bg-gray-100 py-5 px-2 rounded-lg shadow">
								سایز محصولات را انتخاب کنید
								<select
									value={form.size}
									name="size"
									onChange={handleChange}
									required
								>
									<option value="">سایز</option>
									<option value="L">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
									<option value="XXL">XXL</option>
									<option value="L,XL">M,L</option>
									<option value="L,XL">L,XL</option>
									<option value="l,XXL">L,XXL</option>
									<option value="XL,XXL">XL,XXL</option>
									<option value="L,XL,XXL">L,XL,XXL</option>
								</select>
							</div>
						</div>
						<button className="bg-amber-500 text-white py-2 px-6 rounded-lg shadow font-iransans-medium hover:bg-amber-600 transition-colors cursor-pointer mt-5">
							ثبت محصول
						</button>
					</form>
				</div>
			)}
		</section>
	);
}

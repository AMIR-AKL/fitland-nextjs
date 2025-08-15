"use client";
import Sidebar from "@/components/Sidebar/Sidbar";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function Comments() {
	const columns = [
		{ field: "user", headerName: "نام کاربر", width: 100 },
		{ field: "product", headerName: "محصول", width: 100 },
		{
			field: "text",
			headerName: "کامنت",
			width: 90,
			renderCell: (params) => {
				return (
					<div className="flex items-center justify-center w-full h-full">
						<button className="bg-amber-500 hover:bg-amber-600 h-8 w-full flex items-center justify-center rounded-lg text-white cursor-pointer transition-colors">
							دیدن متن
						</button>
					</div>
				);
			},
		},
		{ field: "date", headerName: "تاریخ", width: 90 },
		{ field: "hour", headerName: "ساعت", width: 90 },
		{
			field: "operation",
			headerName: "عملیات",
			width: 300,
			renderCell: (params) => {
				return (
					<div className="flex items-center justify-center gap-2 w-full h-full">
						<button className="bg-red-500 hover:bg-red-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors">
							حذف
						</button>
						<button className="bg-green-500 hover:bg-green-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors">
							تایید
						</button>
						<button className="bg-blue-500 hover:bg-blue-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors">
							ویرایش
						</button>
						<button className="bg-amber-500 hover:bg-amber-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors">
							پاسخ
						</button>
					</div>
				);
			},
		},
	].map((col) => ({
		...col,
		headerAlign: "center",
	}));

	const rows = [
		{
			id: 1,
			user: "امیرعلی اکبری",
			product: "Snow",
			text: "عالی بود",
			date: new Date().toLocaleDateString("fa-ir"),
			hour: new Date().toLocaleTimeString("fa-ir"),
			operation: { del: "حذف" },
		},
		{
			id: 2,
			user: "امیرعلی اکبری",
			product: "Snow",
			text: "عالی بود",
			date: new Date().toLocaleDateString("fa-ir"),
			hour: new Date().toLocaleTimeString("fa-ir"),
			operation: { del: "حذف" },
		},
		{
			id: 3,
			user: "امیرعلی اکبری",
			product: "Snow",
			text: "عالی بود",
			date: new Date().toLocaleDateString("fa-ir"),
			hour: new Date().toLocaleTimeString("fa-ir"),
			operation: { del: "حذف" },
		},{
			id: 3,
			user: "امیرعلی اکبری",
			product: "Snow",
			text: "عالی بود",
			date: new Date().toLocaleDateString("fa-ir"),
			hour: new Date().toLocaleTimeString("fa-ir"),
			operation: { del: "حذف" },
		},{
			id: 3,
			user: "امیرعلی اکبری",
			product: "Snow",
			text: "عالی بود",
			date: new Date().toLocaleDateString("fa-ir"),
			hour: new Date().toLocaleTimeString("fa-ir"),
			operation: { del: "حذف" },
		},
	];
	return (
		<>
			<Sidebar>
				<div className="mt-10">
					<h1 className="font-iransans-bold tracking-tight text-2xl">
						کامنت ها
					</h1>
					<div dir="ltr">
						<Box sx={{ textAlign: "center",marginTop:5 }}>
							<DataGrid
								sx={{ fontFamily: "IRANSansX Bold",borderRadius:2 }}
								rowHeight={100}
								rows={rows}
								columns={columns}
								disableRowSelectionOnClick
								checkboxSelection
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
					</div>
				</div>
			</Sidebar>
		</>
	);
}

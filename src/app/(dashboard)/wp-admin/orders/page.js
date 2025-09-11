"use client";
import Sidebar from "@/components/Sidebar/Sidbar";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function Orders() {
	const columns = [
		{ field: "product", headerName: "نام محصول خریداری شده", width: 200 },
		{ field: "user", headerName: "نام خریدار", width: 100 },
		{ field: "date", headerName: "تاریخ سفارش", width: 100 },
		{ field: "hour", headerName: "ساعت سفارش", width: 100 },
		{ field: "price", headerName: "مبلغ کل", width: 100 },
		{ field: "off", headerName: "تخفیف اعمال شده", width: 150 },
		{ field: "finallyPrice", headerName: "مبلغ پایانی", width: 100 },
	].map((col) => ({
		...col,
		headerAlign: "center",
	}));
	const rows = [
		{
			id: 1,
			product: "shirt",
			user: "amir",
			date: new Date().toLocaleDateString("fa-ir"),
			hour: new Date().toLocaleTimeString("fa-ir"),
			price: 250000,
			off: "10%",
			finallyPrice: 240000,
		},
	];
	return (
		<>
			<Sidebar>
				<div className="mt-10">
					<h1 className="font-iransans-bold tracking-tight text-2xl">
						سفارشات سایت
					</h1>
					<div dir="ltr">
						<Box sx={{ marginTop: 5 }}>
							<DataGrid
								sx={{ fontFamily: "IRANSansX Bold", borderRadius: 2 }}
								// rowHeight={100}
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

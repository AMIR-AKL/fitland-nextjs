"use client";
import Sidebar from "@/components/Sidebar/Sidbar";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function Offs() {
	const columns = [
		{ field: "code", headerName: "کدتخفیف", width: 100 },
		{ field: "percent", headerName: "درصد تخفیف", width: 100 },
		{ field: "date", headerName: "تاریخ ثبت", width: 100 },
		{ field: "admin", headerName: "ثبت شده توسط", width: 150 },
		{ field: "product", headerName: "ساخته شده برای", width: 150 },
	].map((col) => ({
		...col,
		headerAlign: "center",
	}));

	const rows = [
		{
			id: 1,
			code: "off10",
			percent: "10%",
			date: new Date().toLocaleDateString("fa-ir"),
			admin: "amirakl",
			product: "T-Shirt",
		},
	];

	return (
		<>
			<Sidebar>
				<div className="mt-10">
					<h1 className="font-iransans-bold tracking-tight text-2xl">
						لیست کدهای تخفیف ثبت شده
					</h1>
					<div dir="ltr">
						<Box sx={{ marginTop: 5 }}>
							<DataGrid
								sx={{ fontFamily: "IRANSansX Bold" }}
								rowHeight={80}
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

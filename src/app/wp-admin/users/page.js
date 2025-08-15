"use client";
import Sidebar from "@/components/Sidebar/Sidbar";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Users() {
	const [rows, setRows] = useState([]);

	const handleDelete = async (id) => {
		try {
			await axios
				.delete(`https://fitland-gtmr.onrender.com/api/users/remove/${id}`)
				.then((res) => {
					console.log(res.data);
					fetchAllUsers();
				});
		} catch (err) {
			console.log(err);
		}
	};

	const columns = [
		{ field: "firstname", headerName: "نام", width: 150 },
		{ field: "lastname", headerName: "نام خانوادگی", width: 150 },
		{ field: "username", headerName: "نام کاربری", width: 150 },
		{ field: "password", headerName: "رمزعبور", width: 500 },
		{
			field: "operation",
			headerName: "عملیات",
			width: 100,
			renderCell: (params) => {
				return (
					<div className="flex items-center justify-center w-full h-full">
						<button
							onClick={() => handleDelete(params.row.id)}
							className="bg-red-500 hover:bg-red-600 h-8 w-full flex items-center font-iransans-bold justify-center rounded-lg text-white cursor-pointer transition-colors"
						>
							حذف
						</button>
					</div>
				);
			},
		},
	].map((col) => ({
		...col,
		headerAlign: "center",
	}));

	const fetchAllUsers = async () => {
		await axios("https://fitland-gtmr.onrender.com/api/users/all")
			.then((res) => res.data)
			.then((data) => {
				const formattedData = data.map((item) => ({
					id: item._id,
					firstname: item.firstname,
					lastname: item.lastname,
					username: item.username,
					password: item.password,
				}));
				setRows(formattedData);
			});
	};

	useEffect(() => {
		fetchAllUsers();
	}, []);

	// const rows = [
	// 	{
	// 		id: 1,
	// 		firstname: "سحر",
	// 		lastname: "کریمی",
	// 		username: "sahar-karimi",
	// 		password: "sahar1378",
	// 	},
	// 	{
	// 		id: 2,
	// 		firstname: "سحر",
	// 		lastname: "کریمی",
	// 		username: "sahar-karimi",
	// 		password: "sahar1378",
	// 	},
	// 	{
	// 		id: 3,
	// 		firstname: "سحر",
	// 		lastname: "کریمی",
	// 		username: "sahar-karimi",
	// 		password: "sahar1378",
	// 	},
	// 	{
	// 		id: 4,
	// 		firstname: "سحر",
	// 		lastname: "کریمی",
	// 		username: "sahar-karimi",
	// 		password: "sahar1378",
	// 	},
	// 	{
	// 		id: 5,
	// 		firstname: "سحر",
	// 		lastname: "کریمی",
	// 		username: "sahar-karimi",
	// 		password: "sahar1378",
	// 	},
	// ];
	return (
		<>
			<Sidebar>
				<div className="mt-10">
					<h1 className="font-iransans-bold tracking-tight text-2xl">
						کاربران سایت
					</h1>
					<div dir="ltr">
						<Box sx={{ marginTop: 5 }}>
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
					</div>
				</div>
			</Sidebar>
		</>
	);
}

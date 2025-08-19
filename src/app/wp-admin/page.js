"use client";
import Sidebar from "@/components/Sidebar/Sidbar";
import { BarChart } from "@mui/x-charts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EmptyError from "@/components/EmptyError/EmptyError";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function Page() {
	const [stats, setStats] = useState({
		users: 0,
		products: 0,
		womenCounts: 0,
		menCounts: 0,
		kidCounts: 0,
	});
	const fetchStats = async () => {
		const res = await axios("https://fitland-3tiu.onrender.com/api/dashboard/stats");
		setStats(res.data);
	};
	useEffect(() => {
		fetchStats();
	}, []);

	const [rows, setRows] = useState([]);

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
	].map((col) => ({
		...col,
		headerAlign: "center",
	}));

	const fetchAllProduct = async () => {
		await axios("https://fitland-3tiu.onrender.com`/api/products/category/all")
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
		<>
			<Sidebar>
				<div className="mt-20 shadow bg-white rounded-lg p-2">
					<BarChart
						xAxis={[
							{
								data: [
									"کاربران",
									"محصولات",
									"محصولات زنانه",
									"محصولات مردانه",
									"محصولات بچه گانه",
								],
							},
						]}
						series={[
							{
								data: [
									stats.users,
									stats.products,
									stats.womenCounts,
									stats.menCounts,
									stats.kidCounts,
								],
							},
						]}
						height={300}
					/>
				</div>
				<div className="mt-5 shadow rounded-lg">
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
			</Sidebar>
		</>
	);
}

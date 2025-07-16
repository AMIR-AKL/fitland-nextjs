export const formatNumber = (num) => {
	return num.toLocaleString('fa-ir').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

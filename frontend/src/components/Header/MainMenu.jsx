import { FaRegStar } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { BiMedal } from "react-icons/bi";
import LinksHeader from "./LinksHeader";
function MainMenu() {
	return (
		<nav className="md:flex hidden justify-between items-center py-3 px-3 text-xs lg:text-sm rounded-xl mx-auto w-full bg-gray-100 font-iransans-medium mt-10">
			<LinksHeader />
			<ul className="flex *:flex *:items-center *:gap-x-2 lg:gap-x-10">
				<li>
					<FaRegStar className="text-primary" />
					<a href="#">جدیدترین محصولات</a>
				</li>
				<li>
					<BsLightningCharge className="text-primary" />
					<a href="#">تخفیفات ویژه</a>
				</li>
				<li>
					<BiMedal className="text-primary" />
					<a href="#">پرفروش ترین ها</a>
				</li>
			</ul>
		</nav>
	);
}
export default MainMenu;

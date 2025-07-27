import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
function BtnProduct({ text, className, className: textColor ,link}) {
  return (
    <button
      className={`py-2 px-6 text-white ${className}  flex items-center w-50 h-12 rounded-lg font-iransans-medium hover:shadow-2xl transition-all`}
    >
      <Link href={'/'}  className={`flex items-center gap-x-2 ${textColor}`}>
        <FaRegArrowAltCircleLeft />
        <span>{text}</span>
      </Link>
    </button>
  );
}
export default BtnProduct;

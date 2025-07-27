import { BsShop } from "react-icons/bs";
function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-center gap-x-2.5 w-full">
      <div className="bg-secondary-black p-4  rounded-2xl *:text-secondary *:size-6">
        {icon}
      </div>
      <div>
        <h3 className="text-secondary font-iransans-demibold">{title}</h3>
        <span className="text-natural text-xs font-iransans-medium">
          {text}
        </span>
      </div>
    </div>
  );
}
export default InfoItem;

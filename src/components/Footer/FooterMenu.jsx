import React from "react";

export default function FooterMenu({ title, link1, link2, link3, link4 }) {
  return (
    <div className="text-white text-sm tracking-tight">
      <h3 className="text-sm text-white font-iransans-demibold tracking-tight">
        {title}
      </h3>
      <ul className="text-gray-300 font-iransans-medium list-disc pr-5 mt-5 flex flex-col gap-4">
        <li>
          <a href="#">{link1}</a>
        </li>
        <li>
          <a href="#">{link2}</a>
        </li>
        <li>
          <a href="#">{link3}</a>
        </li>
        <li>
          <a href="#">{link4}</a>
        </li>
      </ul>
    </div>
  );
}

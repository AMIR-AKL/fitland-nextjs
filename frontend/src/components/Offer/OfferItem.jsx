import React from "react";

export default function OfferItem({
  srcImg,
  offerText1,
  offerText2,
  offer1,
  offer2,
  cardName,
  cardPrice,
  cardSize,
  className,
  offerVisibility,
  classImg,
}) {
  return (
    <div className={`${className}`}>
      <div
        className={`absolute top-2 left-2 flex items-center w-22 justify-between ${offerVisibility}`}
      >
        <span
          className={` ${offer1} size-10 flex items-center justify-center rounded-full text-xs font-iransans-medium text-white`}
        >
          {offerText1}
        </span>
        <span
          className={` ${offer2} size-10 flex items-center justify-center rounded-full text-xs font-iransans-medium text-white`}
        >
          {offerText2}
        </span>
      </div>
      <img className={`${classImg}`} src={srcImg} alt="" />
      <div className="p-5 space-y-2">
        <h3 className="text-base font-iransans-medium tracking-tight">
          {cardName}
        </h3>
        <h3 className="text-sm font-iransans-medium">{cardPrice}</h3>
        <h5 className="text-xs font-iransans-medium">{cardSize}</h5>
        <div className="flex p-5">
          <div className="relative ">
            <span className="bg-black size-4 rounded-full block absolute"></span>
            <span className="bg-natural size-4 rounded-full block absolute -right-2"></span>
            <span className="bg-sky-800 size-4 rounded-full block absolute -right-4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

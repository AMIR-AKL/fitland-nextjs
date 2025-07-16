import React from "react";
import MiniBox from "./MiniBox";

export default function BeforeFooter() {
  return (
    <section className="my-20 bg-secondary-sky p-10">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex gap-10">
          <MiniBox
            iconShow2={`hidden`}
            iconShow1={`hidden`}
            text={`ارسال سریع`}
          />
          <MiniBox
            iconShow1={`hidden`}
            iconShow3={`hidden`}
            text={`پرداخت قسطی`}
          />
          <MiniBox
            iconShow2={`hidden`}
            iconShow3={`hidden`}
            text={`پرداخت درب منزل`}
          />
        </div>
        <h3 className="md:text-xl lg:text-2xl text-secondary text-center max-w-90 tracking-tight font-iransans-demibold">
          با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی
        </h3>
      </div>
    </section>
  );
}

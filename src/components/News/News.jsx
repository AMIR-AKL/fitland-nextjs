import React from "react";
import NewsItem from "./NewsItem";

export default function News() {
  return (
    <section>
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
        <NewsItem
          srcImg={`./img/news/news2.jpg`}
          title1={`افزایش دریافتی فوتبالیست ها و معافیت از سربازی`}
          title2={`خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین وی گفت...`}
        />
        <NewsItem
          srcImg={`./img/news/news1.png`}
          title1={`شکست استرالیا در گام نخست جام جهانی فوتبال زنان!`}
          title2={`
          تیم‌ها در روز اول مسابقات جام جهانی فوتبال زنان در شهر مادرید اسپانیا
          با یکدیگر به رقابت پرداختند.`}
        />
      </div>
    </section>
  );
}

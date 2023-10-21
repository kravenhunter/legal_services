"use client";

import { ButtonReview, Title } from "@/components";
import style from "@/components/Main/latest_news.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

const title = "Latest From Blog";
const news = [
  {
    title: "Algeria Procedures for Auto Dealerships",
    imgBg:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/94c96a63-e31f-443c-bd4d-529ee4cb3a85_galary_law_news2.webp",
    category: "Cyber Law",
    date: "01-Jan-2023",
    desc: `In recent news, several car brands have been granted licenses to begin operations in Algeria. Fiat Algeria, JAC, and Opel have received the go-ahead to introduce their vehicles to Algerian consumers. Emin Auto, JAC's representative, hinted that the company's vehicles would be available in May. Geely is also preparing to enter the market soon.`,
  },
  {
    title: "Challenges and Opportunities for Labor Law in Slovenia",
    imgBg:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8a7fc317-58d8-43f2-8484-0f953999f336_galary_law_news1.webp",
    category: "Cyber Law",
    date: "01-Jan-2023",
    desc: "Labor law is continually evolving, due to various social, economic, and political influences. Slovenian labor law is at a significant crossroads, with the Proposal for Amendments to the Employment Relationship Act (ZDR-1C) currently under consideration.",
  },
  {
    title: "Real Property in Thailand",
    imgBg:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/38ab3318-4f61-4fee-8c73-29eb3b68b4e9_galary_law_news3.webp",
    category: "Cyber Law",
    date: "01-Jan-2023",
    desc: "The Thai Land Code provides generally that foreign individuals or foreign companies are prohibited from owning land in the Kingdom. The rule results in obvious practical difficulties in common scenarios where foreign buyers wish to purchase real property (or real estate) in Thailand.",
  },
];
const LatestNews = () => {
  const [page, setValue] = useState(0);
  return (
    <div className='latest_news  grid gap-10'>
      <Title title={title} />
      <div className='news_list flex flex-wrap justify-center gap-14'>
        {news?.map((el, index) => (
          <article key={index} className={`${style.card} h-full grid gap-3 w-96`}>
            <Image src={el.imgBg} alt={el.title} width={364} height={239} sizes='100vw' priority />
            <div className='news_title h-16 '>
              <h4 className=' font-mono italic text-2xl font-semibold'>{el.title}</h4>
            </div>

            <div className='news_sub flex justify-between  '>
              <div className='category flex'>
                <IoNewspaperOutline size={20} />
                <span className='text-gray-600/75 ml-2'>{el.category}</span>
              </div>
              <div className='date flex'>
                <LuCalendarDays size={20} />
                <span className='text-gray-600/75 ml-2'>{el.date}</span>
              </div>
            </div>
            <p className='desc'>{el.desc}</p>
            <div className='reade_more grid content-end'>
              <Link href='#' className='colorText font-bold'>
                READ MORE &gt;
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className='pagination w-full flex justify-center gap-5 '>
        {news?.map((value, index) => (
          <ButtonReview key={index} index={index} pageNum={page} setPag={setValue} />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;

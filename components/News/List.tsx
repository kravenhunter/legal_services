"use client";

import { ButtonReview } from "@/components";
import style from "@/components/Main/latest_news.module.scss";
import { IArticle } from "@/types/ITypes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

const List = ({ news }: { news: IArticle[] }) => {
  const [page, setValue] = useState(0);
  return (
    <div className='latest_news  grid gap-10'>
      <div className='news_list flex flex-wrap justify-center gap-14'>
        {news?.map((el, index) => (
          <article key={index} className={`${style.card} h-full grid gap-3 w-96`}>
            <Image src={el.imgBg} alt={el.title} width={356} height={234} priority />
            <div className='news_title h-16 '>
              <h4 className=' font-mono italic text-2xl font-semibold'>{el.title} </h4>
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
            <p className='desc'>{el.shorDesc}</p>
            <div className='reade_more grid content-end'>
              <Link href={`/blog/news/read/${el.id}`} className='colorText font-bold'>
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

export default List;

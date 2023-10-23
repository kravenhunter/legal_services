"use client";

import { NewsList, Title } from "@/components";
import { IArticle } from "@/types/ITypes";

// const title = "Latest From Blog";

const LatestNews = ({ title, news }: { title: string; news: IArticle[] }) => {
  return (
    <div className='latest_news  grid gap-10'>
      <Title title={title} />
      <NewsList news={news} />
    </div>
  );
};

export default LatestNews;

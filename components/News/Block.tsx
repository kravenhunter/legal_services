import { NewsList, Title } from "@/components";
import { IArticle } from "@/types/ITypes";
import Image from "next/image";

const content = {
  coverMain:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8d5f39a2-7c78-4cfd-8f52-5a9e434ca762_galary_cover_legacy.webp",

  title: "Our Blog",
  subtitle: "Always on your side to defend you...",
};

const List = ({ newsList }: { newsList: IArticle[] }) => {
  return (
    <section className='news grid gap-14'>
      <div className='cover'>
        <Image
          src={content.coverMain}
          alt={content.title}
          width={1659}
          height={179}
          priority
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className='news_title size_block_second mx-auto w-full'>
        <Title title='Articles' />
      </div>
      <div className='news_content size_block_second mx-auto grid gap-8'>
        <div className='search max-w-3xl w-full mx-auto  p-3 colorBg flex gap-2'>
          <div className='input_block p-1 bg-white flex w-full '>
            <input
              className='w-full pl-2 h-11 border-solid border-2 border-gray-400'
              name='search'
              type='text'
              placeholder='SEARCH'
            />
            <button
              type='button'
              className={`         
          grid 
          place-content-center
          hover:bg-yellow-800        
          bg-zinc-900 text-white        
          w-44 
          h-11                 
          text-base
          border-solid border-2
          border-yellow-800  
          `}>
              <span>SEARCH</span>
            </button>
          </div>
        </div>
        <NewsList news={newsList} />
      </div>
    </section>
  );
};

export default List;

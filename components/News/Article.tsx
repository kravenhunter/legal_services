import { Title } from "@/components";
import { IArticle } from "@/types/ITypes";
import Image from "next/image";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

const content = {
  coverMain:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8d5f39a2-7c78-4cfd-8f52-5a9e434ca762_galary_cover_legacy.webp",

  title: "Our Blog",
  subtitle: "Always on your side to defend you...",
};

const Article = ({ post }: { post: IArticle }) => {
  return (
    <article className='article'>
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
      <div className='size_block_second mx-auto grid gap-5'>
        <div className='news_title my-5 '>
          <Title title={post.title} />
        </div>

        <div className='cover grid justify-self-center'>
          <Image
            src={post.imgPreview}
            alt={post.title}
            width={1363}
            height={907}
            priority
            style={{
              width: "1024px",
            }}
          />
          <div className='news_sub flex justify-between my-3   '>
            <div className='author'>
              <span className='font-semibold'>Author:</span>
              <span className='italic text-gray-600/75 ml-2'>Admin</span>
            </div>
            <div className='category_data flex gap-5'>
              <div className='flex'>
                <IoNewspaperOutline size={20} />
                <span className='text-gray-600/75 ml-2'>{post.category}</span>
              </div>
              <div className='date flex'>
                <LuCalendarDays size={20} />
                <span className='text-gray-600/75 ml-2'>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='content  justify-self-center'>
          <pre className='text-lg'>{post.description}</pre>
        </div>
      </div>
    </article>
  );
};

export default Article;

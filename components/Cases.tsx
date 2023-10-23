import { Title } from "@/components";
import Image from "next/image";
import Link from "next/link";

const content = {
  coverMain:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8d5f39a2-7c78-4cfd-8f52-5a9e434ca762_galary_cover_legacy.webp",

  coverContent:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/5a0de383-355d-4e94-b949-d99fe394e7c0_galary_cases.jpg",

  title: "Case Studies",
  subtitle: "Always on your side to defend you...",
};

const categories = ["ALL", "CIVIL", "CRIMINAL", "BUSINESS", "FAMALY", "POLITICS"];
const cases = [
  {
    title: "Murder Case",
    category: "Crime",
    date: "01-Jan-2023",
    path: "#",
  },
  {
    title: "Political Case",
    category: "Politics",
    date: "01-Jan-2023",
    path: "#",
  },
  {
    title: "Divorce Case",
    category: "Famaly",
    date: "01-Jan-2023",
    path: "#",
  },
  {
    title: "Money Laundering",
    category: "Busines",
    date: "01-Jan-2023",
    path: "#",
  },
  {
    title: "Weber & Partners",
    category: "Busines",
    date: "01-Jan-2023",
    path: "#",
  },
  {
    title: "Property Sharing Case",
    category: "Busines",
    date: "01-Jan-2023",
    path: "#",
  },
];
const Cases = () => {
  return (
    <div className='section cases'>
      <div className={`grid gap-16`}>
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
            <Title title={content.title} />
          </div>
          <div className='caregories flex mx-auto'>
            {categories?.map((el, index) => (
              <Link
                key={index}
                href='#'
                className={`
                            bg-zinc-900
                            colorText
                                   grid 
                                    place-content-center
                                    hover:bg-yellow-800
                                    hover:text-white
                                    bg-transparent
                                    w-32 
                                    h-11                 
                                    text-base
                                    border-solid border-2
                                    border-yellow-800  
                              `}>
                <span>{el}</span>
              </Link>
            ))}
          </div>
          <div className='news_list flex flex-wrap justify-center gap-14'>
            {cases?.map((el, index) => (
              <article key={index} className='case grid relative'>
                <Image
                  src={content.coverContent}
                  alt={content.title}
                  width={321}
                  height={241}
                  priority
                  style={{
                    width: "100%",
                  }}
                />
                <div className='text absolute bottom-4 grid gap-1 p-4'>
                  <h4 className=' text-white  italic underline  underline-offset-8'>
                    {el.category}
                  </h4>
                  <h4 className='colorText text-lg '>
                    <Link href='#'>{el.title}</Link>
                  </h4>
                  <span className='text-gray-400'>{el.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;

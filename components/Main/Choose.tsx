import { Title } from "@/components";
import style from "@/components/Main/choose.module.scss";
import Image from "next/image";
import { GiGraduateCap } from "react-icons/gi";

const choose = {
  imgBg:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/9430d0c3-660e-4163-89c7-dcb322e50a4d_galary_choose.webp",

  title: "Why Choose Us",
};
const chooseList = [
  {
    title: "Best law practices",
    subtitle: "We are serving you the best a team of our well skilled professional team.",
    icons: (size: number) => <GiGraduateCap size={size} className={style.color} />,
  },
  {
    title: "Efficiency & Trust",
    subtitle: "Quick and effective.",
    icons: (size: number) => <GiGraduateCap size={size} className={style.color} />,
  },
  {
    title: "Results you deserve",
    subtitle: "Results in time beyond your expectations.",
    icons: (size: number) => <GiGraduateCap size={size} className={style.color} />,
  },
];
const Choose = () => {
  return (
    <div className='choose flex gap-10'>
      <div className='choose_block grid gap-5'>
        <Title title={choose.title} />
        {chooseList?.map((item, index) => (
          <div key={index} className='chose_list flex gap-5  '>
            <div className='bg-black  w-48 h-44  grid place-content-center'>
              <div className='icon_block bg-zinc-900 w-32 h-32 grid place-content-center'>
                {item.icons(75)}
              </div>
            </div>
            <div className='text_block'>
              <h4 className='font-mono italic text-2xl font-semibold  '> {item.title}</h4>
              <hr className='h-0.5 bg-black w-20 my-2' />
              <p className=' text-gray-600/75 '>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='cover bg-black p-2'>
        <Image src={choose.imgBg} alt={choose.title} width={543} height={807} priority />
      </div>
    </div>
  );
};

export default Choose;

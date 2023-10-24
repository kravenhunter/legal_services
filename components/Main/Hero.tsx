import style from "@/components/Main/hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

const serviceList = [
  {
    title: "Legal",
    subtitle: "Give Approved",
    icons: (size: number) => <AiOutlineSafetyCertificate size={size} className={style.icon} />,
  },
  {
    title: "Attorneys",
    subtitle: "Expert Attorneys",
    icons: (size: number) => <FaUsers size={size} className={style.icon} />,
  },
  {
    title: "Attorneys",
    subtitle: "Expert Attorneys",
    icons: (size: number) => <AiOutlineSafetyCertificate size={size} className={style.icon} />,
  },
  {
    title: "Success",
    subtitle: "99,9 Case Won",
    icons: (size: number) => <FiThumbsUp size={size} className={style.icon} />,
  },
  {
    title: "Support",
    subtitle: "Quick Support",
    icons: (size: number) => <MdSupportAgent size={size} className={style.icon} />,
  },
];

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_cover grid relative '>
        <Image
          src='https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/1074d34a-0a21-42cb-8d61-5aa3fd931300_galary_hero_section.webp'
          alt='Femida'
          width={1659}
          height={529}
          priority
        />
        <div className='hero_text grid gap-5 absolute place-self-center'>
          <h2 className='text-white text-center text-4xl  font-mono italic font-semibold'>
            We fight for your justice
          </h2>
          <h4 className='text-white garamond_regular text-2xl font-mono  font-normal'>
            We fight, we dare, we end our hunger for justice
          </h4>
          <Link
            href='/blog/contacts'
            className={`
            mx-auto
                    colorText
                     grid 
                      place-content-center
                      hover:bg-yellow-800
                      hover:text-white
                      bg-zinc-900
                      w-72 
                      h-14                 
                      text-base
                      border-solid border-2
                      border-yellow-800  
                `}>
            <span>GET FREE CONSULTATION</span>
          </Link>
        </div>
      </div>

      <div className='hero_icons grid content-center  text-white h-96 bg-zinc-900'>
        <ul className='flex justify-around'>
          {serviceList?.map((icon, index) => (
            <li key={index} className='grid justify-items-center '>
              {icon.icons(50)}

              <h2 className={`${style.title} text-xl font-medium  font-mono `}>{icon.title}</h2>
              <span className='text-lg  text-gray-400/75'>{icon.subtitle}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;

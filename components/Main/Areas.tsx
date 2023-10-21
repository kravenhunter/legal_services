import { Title } from "@/components";
import style from "@/components/Main/areas.module.scss";
import Link from "next/link";
import { FaBuildingColumns, FaPeopleGroup, FaSackDollar } from "react-icons/fa6";
import { GiGraduateCap, GiSurprisedSkull } from "react-icons/gi";
import { RiCriminalFill } from "react-icons/ri";
// FaBuildingColumns
const title = "Our Practices Areas";
const serviceList = [
  {
    title: "Civil Law",
    subtitle: "All the civil matters, along with servce and contract laws.",
    icons: (size: number) => <FaBuildingColumns size={size} className={style.color} />,
  },
  {
    title: "Family Law",
    subtitle: "All the family and personal laws",
    icons: (size: number) => <FaPeopleGroup size={size} className={style.color} />,
  },
  {
    title: "Business Law",
    subtitle: "All type of business law in your territory.",
    icons: (size: number) => <FaSackDollar size={size} className={style.color} />,
  },
  {
    title: "Civil Law",
    subtitle: "All the civil matters, along with servce and contract laws.",
    icons: (size: number) => <GiGraduateCap size={size} className={style.color} />,
  },
  {
    title: "Criminal Law",
    subtitle: "Protecting you the best and getting you best way for you.",
    icons: (size: number) => <RiCriminalFill size={size} className={style.color} />,
  },
  {
    title: "Cyber Law",
    subtitle: "Latest and updated cyberlaw with professional skill as per your territorial laws.",
    icons: (size: number) => <GiSurprisedSkull size={size} className={style.color} />,
  },
];
const Areas = () => {
  return (
    <div className='areas'>
      <Title title={title} />
      <div className='card_list mt-8 flex flex-wrap justify-between '>
        {serviceList?.map((service, index) => (
          <article key={index} className={`${style.card} mb-10  w-full bg-black grid grid-rows-2 `}>
            <div className='h-full grid place-content-center'>
              <div className='icon_block bg-zinc-900 w-32 h-32 grid place-content-center'>
                {service.icons(75)}
              </div>
            </div>

            <div className='card_desc grid justify-items-center gap-5 py-5  bg-zinc-900 text-white  '>
              <h4 className={`${style.color} text-2xl italic font-mono font-bold`}>
                {service.title}
              </h4>
              <p className='w-56 text-gray-400/75 text-center'>{service.subtitle}</p>
              <Link
                href='#'
                className={`
                ${style.color}
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
                <span>LEARN MORE</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Areas;

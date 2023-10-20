import styles from "@/components/ui/default/navBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiSolidPhoneCall } from "react-icons/bi";

const navlinks = [
  {
    path: "#",
    title: "Home",
  },
  {
    path: "#",
    title: "Get Help",
  },
  {
    path: "#",
    title: "For citizen",
  },

  {
    path: "#",
    title: "For busines",
  },
  {
    path: "#",
    title: "News",
  },
  {
    path: "#",
    title: "Information",
  },
  {
    path: "#",
    title: "Public Activities",
  },
  {
    path: "#",
    title: "Volunteer",
  },
  {
    path: "#",
    title: "About Us",
  },
  {
    path: "#",
    title: "Contacts",
  },
];

const NavBar = () => {
  return (
    <nav className={`${styles.block} h-40 mx-auto pt-5`}>
      <div className='nav__top  flex justify-between  w-full'>
        <div className='nav__top__logo'>
          <Image
            alt='logo'
            title='Legal Logo'
            src='https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/3bfc92d0cd396914e87a41243a2e2fc2%201.jpg'
            width={124}
            height={84}
            style={{
              height: "84px",
            }}
            priority
          />
        </div>
        <div className='nav__top__contacts flex items-center gap-10'>
          <div className='nav__top__contacts__dates '>
            <h4>09:00 - 20:00</h4>
            <h4>ежедневно по будням </h4>
          </div>
          <div className='nav__top__contacts__call flex flex-col items-center'>
            <h4>8 (495) 153-75-45</h4>
            <h4>звоните нам для консультации </h4>
          </div>
          <div className='nav__top__contacts__socials flex items-center'>
            <ul className='nav__top__contacts__list flex gap-5 align-middle'>
              <li className='hover:bg-yellow-800'>
                <Link href='https://facebook.com' title='facebook'>
                  <h4 className='m-2'>
                    <BiLogoFacebook size={30} />
                  </h4>
                </Link>
              </li>
              <li className='hover:bg-yellow-800'>
                <Link href='https://twitter.com' title='twitter'>
                  <h4 className='m-2'>
                    <AiOutlineTwitter size={30} />
                  </h4>
                </Link>
              </li>
              <li className='hover:bg-yellow-800'>
                <Link href='https://youtube.com' title='youtube'>
                  <h4 className='m-2'>
                    <AiFillYoutube size={30} />
                  </h4>
                </Link>
              </li>
              <li className='hover:bg-yellow-800'>
                <Link href='https://instagram.com' title='instagram'>
                  <h4 className='m-2'>
                    <AiOutlineInstagram size={30} />
                  </h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bottom flex justify-between '>
        <ul className='bottom__list flex gap-1 items-center '>
          {navlinks?.map((link, index) => (
            <li
              key={index}
              className={`${styles.bottom__block} 
              text-center 
              hover:bg-yellow-800
              border-solid border-2
               border-gray-600 py-1`}>
              <Link href={link.path} className={`${styles.bottom__block__link}`}>
                <h4>{link.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav__bottom_call'>
          <button
            type='button'
            className='flex items-center gap-2
            hover:bg-yellow-800
            bg-slate-800 w-48 h-full
            border-solid border-2
          border-yellow-600
           py-2
           px-3

          rounded-md'>
            <BiSolidPhoneCall size={20} /> <span>Заказать звонок</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

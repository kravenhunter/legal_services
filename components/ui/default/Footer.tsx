import { Subscribe } from "@/components";
import styles from "@/components/ui/default/footer.module.scss";
import Link from "next/link";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiSolidPhoneCall } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const socials = [
  {
    title: "facebook",
    path: "https://facebook.com",
    icon: () => <BiLogoFacebook className='text-white' size={20} />,
  },
  {
    title: "twitter",
    path: "https://twitter.com",
    icon: () => <AiOutlineTwitter className='text-white' size={20} />,
  },
  {
    title: "youtube",
    path: "https://youtube.com",
    icon: () => <AiFillYoutube className='text-white' size={20} />,
  },
  {
    title: "instagram",
    path: "https://instagram.com",
    icon: () => <AiOutlineInstagram className='text-white' size={20} />,
  },
];

const contacts = [
  {
    title: "Head Office: 145 C/1 Shiv Nagar Allahpur, Allahabad",

    icon: () => <HiOutlineLocationMarker className=' text-white' size={20} />,
  },
  {
    title: "+91-9212344567",

    icon: () => <BiSolidPhoneCall className='text-white' size={20} />,
  },
  {
    title: "123-452-746",

    icon: () => <GiRotaryPhone className='text-white' size={20} />,
  },
  {
    title: "maulayuouts@gmail.com",

    icon: () => <AiOutlineMail className='text-white' size={20} />,
  },
];
const serviceArease = [
  {
    title: "Civil Law",
    path: "#",
  },
  {
    title: "Famaly Law",
    path: "#",
  },
  {
    title: "Business Law",
    path: "#",
  },
  {
    title: "Education Law",
    path: "#",
  },
  {
    title: "Immortation Law",
    path: "#",
  },
];
const usefullPages = [
  {
    title: "About Us",
    path: "#",
  },
  {
    title: "Practices",
    path: "#",
  },
  {
    title: "Attorneys",
    path: "#",
  },
  {
    title: "Case Studies",
    path: "#",
  },
  {
    title: "FAQ's",
    path: "#",
  },
];
const Footer = () => {
  return (
    <footer className={`${styles.container} bg-zinc-900  mt-36`}>
      <div className={`${styles.container__subscribe_block} mx-auto`}>
        <Subscribe />
      </div>
      <section className={`${styles.container__content} mx-auto grid gap-5 pt-28 pb-14`}>
        <div className='contant_main flex gap-20 justify-between'>
          <ul className='about w-72 grid gap-2 '>
            <li className='colorText font-mono italic text-2xl'>About Us</li>
            <li className='text-lg text-gray-400 '>
              <p>Justice for the sake of Justice Everywhere in world to protect and serve you.</p>
            </li>
          </ul>

          <ul className='useful grid gap-2'>
            <li className='colorText font-mono italic text-2xl'>Services Areas</li>
            {serviceArease?.map((el, index) => (
              <li key={index}>
                <span className='colorText mr-3 text-2xl'>&gt;</span>
                <Link href={el.path} className='text-lg text-gray-400 '>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='in_touch grid gap-2'>
            <li className='colorText font-mono italic text-2xl'>Useful Pages</li>
            {usefullPages?.map((el, index) => (
              <li key={index}>
                <span className='colorText mr-3 text-2xl'>&gt;</span>
                <Link href={el.path} className='text-lg text-gray-400 '>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='usefull grid gap-2'>
            <li className='colorText font-mono italic text-2xl'>Get In Touch</li>
            {contacts?.map((el, index) => (
              <li key={index} className='flex gap-2'>
                {el.icon()}
                <p className='text-lg text-gray-400'>{el.title}</p>
              </li>
            ))}

            <li className='flex gap-4'>
              {socials?.map((el, index) => (
                <Link key={index} href={el.path} title={el.title}>
                  {el.icon()}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <div className='terms bg-black py-5 flex justify-center '>
          <ul className='flex gap-5 text-gray-500'>
            <li>
              <Link href='#' title='Terms'>
                Terms of use
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href='#' title='policy'>
                Privacy policy
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href='#' title='Cookies'>
                Cookies
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href='#' title='Help'>
                Help
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href='#' title=" FAQ's">
                FAQ's
              </Link>
            </li>
          </ul>
        </div>
        <div className='copyright flex justify-between text-gray-500'>
          <span>© HTML Codex, All Right Reserved.</span>
          <span>Designed Sergey Belov</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

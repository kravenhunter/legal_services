import Link from "next/link";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

//Props
type Props = {
  newClass?: string;
  sizeIcon?: number;
};
//Default condition props
const Socials = ({ newClass = "socials", sizeIcon = 30 }: Props) => {
  return (
    <div className={`${newClass}  flex items-center`}>
      <ul className='socials__list flex gap-5 align-middle'>
        <li className='colorBg '>
          <Link href='https://facebook.com' title='facebook'>
            <h4 className='m-2 text-white'>
              <BiLogoFacebook size={sizeIcon} />
            </h4>
          </Link>
        </li>
        <li className='colorBg'>
          <Link href='https://twitter.com' title='twitter'>
            <h4 className='m-2 text-white'>
              <AiOutlineTwitter size={sizeIcon} />
            </h4>
          </Link>
        </li>
        <li className='colorBg'>
          <Link href='https://youtube.com' title='youtube'>
            <h4 className='m-2 text-white'>
              <AiFillYoutube size={sizeIcon} />
            </h4>
          </Link>
        </li>
        <li className='colorBg'>
          <Link href='https://instagram.com' title='instagram'>
            <h4 className='m-2 text-white'>
              <AiOutlineInstagram size={sizeIcon} />
            </h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

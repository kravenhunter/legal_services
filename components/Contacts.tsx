import { Title } from "@/components";
import styles from "@/components/contacts.module.scss";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const content = {
  coverMain:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8d5f39a2-7c78-4cfd-8f52-5a9e434ca762_galary_cover_legacy.webp",

  title: "Contact Us",
  subtitle: "Always on your side to defend you...",
};

const contacts = [
  {
    title: "Location",
    desc: "Head Office: 145 C/1 Shiv Nagar Allahpur, Allahabad",

    icon: () => <HiOutlineLocationMarker size={30} />,
  },
  {
    title: "Mobile",
    desc: "+91-9212344567",

    icon: () => <BiSolidPhoneCall size={30} />,
  },
  {
    title: "Phone",
    desc: "123-452-746",

    icon: () => <GiRotaryPhone size={30} />,
  },
  {
    title: "Email",
    desc: "maulayuouts@gmail.com",

    icon: () => <AiOutlineMail size={30} />,
  },
];
const Contacts = () => {
  return (
    <section className='contacts grid gap-14'>
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
      <div className='contact_title size_block_second mx-auto w-full'>
        <Title title='Message Us' />
      </div>
      <div className='contacts_content size_block_second mx-auto flex flex-col justify-center'>
        <div className='contacts_block  grid grid-flow-col auto-cols-fr gap-10'>
          <div className='contact_data bg-zinc-900 grid gap-4  p-7'>
            {contacts?.map((el, index) => (
              <div key={index} className={`${styles.border} p-4 flex gap-3`}>
                <div className={`${styles.border} colorText p-4 grid place-content-start`}>
                  {el.icon()}
                </div>
                <div className='contact_text p-1'>
                  <h4 className='colorText font-mono font-semibold italic text-2xl'> {el.title}</h4>
                  <p className='text-gray-400'> {el.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='contact_form'>
            <form className='flex flex-col gap-5 '>
              <input
                className='pl-2 h-11 border-solid border-2 border-gray-400'
                name='name'
                type='text'
                placeholder='Your name'
              />
              <input
                className='pl-2 h-11 border-solid border-2 border-gray-400'
                name='email'
                type='text'
                placeholder='Your email'
              />
              <input
                className='pl-2 h-11 border-solid border-2 border-gray-400'
                name='subject'
                type='text'
                placeholder='Subject'
              />
              <textarea
                className='pl-2 border-solid border-2 border-gray-400 '
                placeholder='Message'
                name='message'
                id=''
                cols={30}
                rows={10}></textarea>

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
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

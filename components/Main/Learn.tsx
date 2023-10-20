import { Title } from "@/components";
import style from "@/components/Main/learn.module.scss";
import Image from "next/image";
import Link from "next/link";

const learcCard = {
  imgBg:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/81dfaec0-698a-47a7-bf94-79c3d7900eac_galary_team_attorney.webp",
  title: "Learn About Us",
  text: `Always finding the best to suit your need from the every nook and corner of the world. We own a team of professional layers for your help in emergency 24x7x365.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quis numquam modi nemo doloribus deserunt reiciendis obcaecati possimus at nesciunt minima iste laboriosam dolorem! Voluptate sint consequatur quos, soluta odio molestias? Illum odit architecto, quo iste adipisci ab, nulla pariatur ut magni animi in, natus vero voluptatum. Cum, voluptates pariatur!
       
    We are here to represent you before any court of justice throughout the world.`,
};

const Learn = () => {
  return (
    <div className='learn flex gap-10'>
      <Image src={learcCard.imgBg} alt={learcCard.title} width={612} height={408} priority />
      <div className='desctiprtion grid gap-10 grid-cols-[minmax(auto,_663px)] w-full '>
        <Title title={learcCard.title} />

        <pre className={`${style.pre}`}>{learcCard.text}</pre>
        <Link
          href='#'
          className='
          mx-auto
          grid 
          place-content-center
          hover:bg-yellow-800
         bg-slate-800 
          w-48 
          h-14
          text-white
          border-solid border-2
          border-yellow-600           
          rounded-md         
          '>
          <span>LEARN MORE</span>
        </Link>
      </div>
    </div>
  );
};

export default Learn;

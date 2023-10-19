import Image from "next/image";

const Hero = () => {
  return (
    <div className='hero flex justify-center '>
      <Image
        src='https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/1074d34a-0a21-42cb-8d61-5aa3fd931300_galary_hero_section.webp'
        alt='Femida'
        width={1659}
        height={529}
      />
    </div>
  );
};

export default Hero;

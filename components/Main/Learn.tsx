import Image from "next/image";
const learcCard = {
  imgBg:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/81dfaec0-698a-47a7-bf94-79c3d7900eac_galary_team_attorney.webp",
  title: "Learn About Us",
  text: `Always finding the best to suit your need from the every nook and corner of the world. We own a team of professional layers for your help in emergency 24x7x365.

    We are here to represent you before any court of justice throughout the world.`,
};

const Learn = () => {
  return (
    <div className='learn flex'>
      <Image src={learcCard.imgBg} alt={learcCard.title} width={612} height={408} priority />
      <div className='dexription grid gap-10'>
        <h1 className='font-mono'>{learcCard.title}</h1>
        <pre className='text-gray-400/75 w-1/2'>{learcCard.text}</pre>
      </div>
    </div>
  );
};

export default Learn;

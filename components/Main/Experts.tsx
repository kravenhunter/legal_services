import { Socials, Title } from "@/components";
import Image from "next/image";

const title = "Meet Our Experts";

const expertList = [
  {
    title: "Samuel El Jackson",
    subtitle: "Expert",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/7ff342c0-7ff7-4109-bb13-0277d66aed5d_galary_expert1.webp",
  },
  {
    title: "Samuel El Jackson",
    subtitle: "Expert",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/1cfe0174-e3ba-40c4-8e87-fa68ce40dd3e_galary_expert2.webp",
  },
  {
    title: "Samuel El Jackson",
    subtitle: "Expert",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/3c929f1b-667c-4f98-8796-3cf504e77f4b_galary_expert3.webp",
  },
  {
    title: "Samuel El Jackson",
    subtitle: "Expert",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/85666caf-c60d-4749-a3ae-ebbc2e127dd1_galary_expert4.webp",
  },
  {
    title: "Samuel El Jackson",
    subtitle: "Expert",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/c0726a05-75ea-4f55-aa47-930f48db8fc0_galary_expert5.webp",
  },
];

const Experts = () => {
  return (
    <div className='experts grid gap-10'>
      <Title title={title} />
      <div className='expert_cards  flex gap-10 justify-center flex-wrap'>
        {expertList?.map((expert, index) => (
          <article key={index} className='card bg-black'>
            <div className='avatar p-2 relative flex justify-center  '>
              <Image
                src={expert.imageCover}
                alt={expert.title}
                width={298}
                height={289}
                sizes='100vw'
                style={{
                  width: "298px",
                  height: "289px",
                }}
                priority
              />
              <Socials newClass='absolute bottom-0 ' sizeIcon={30} />
            </div>
            <div className='description grid justify-items-center gap-5 py-5  bg-zinc-900 text-white'>
              <h4 className={`colorText  text-2xl italic font-mono font-bold`}>{expert.title}</h4>
              <p className='w-56 text-gray-400/75 text-center'>{expert.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experts;

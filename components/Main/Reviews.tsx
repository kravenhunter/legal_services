"use client";

import { ButtonReview, Title } from "@/components";
import Image from "next/image";
import { useState } from "react";

const title = "Our Practices Areas";

const reviwers = [
  {
    title: "Sam  Jackson",
    subtitle: " It is a team of well equipped professional lawyer from every corner of India.",
    job: "Attorneys",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/7ff342c0-7ff7-4109-bb13-0277d66aed5d_galary_expert1.webp",
  },
  {
    title: "Samuel El ",
    subtitle: " It is a team of well equipped professional lawyer from every corner of India.",
    job: "Attorneys",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/1cfe0174-e3ba-40c4-8e87-fa68ce40dd3e_galary_expert2.webp",
  },
  {
    title: "El Jackson",
    subtitle: " It is a team of well equipped professional lawyer from every corner of India.",
    job: "Staff Engineer",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/3c929f1b-667c-4f98-8796-3cf504e77f4b_galary_expert3.webp",
  },
];
const Reviews = () => {
  const [page, setValue] = useState(0);

  //   useEffect(() => {
  //     console.log(page);
  //   }, [setValue, page]);

  return (
    <div className='reviews  grid gap-10'>
      <Title title={title} />
      <div className='rewiews_list flex justify-center gap-5'>
        {reviwers?.map((review, index) => (
          <article key={index} className='review flex bg-zinc-900  rounded-xl '>
            <div className='avatar'>
              <Image
                src={review.imageCover}
                alt={review.title}
                width={298}
                height={289}
                sizes='100vw'
                style={{
                  width: "370px",
                  height: "auto",
                }}
                priority
              />
            </div>
            <div className='desc p-3 grid justify-between'>
              <p className='text-white'>{review.subtitle}</p>
              <div className='sub'>
                <h6 className='colorText font-bold'>{review.title}</h6>
                <span className='text-slate-500'>{review.job}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className='pagination w-full flex justify-center gap-5 '>
        {reviwers?.map((value, index) => (
          <ButtonReview key={index} index={index} pageNum={page} setPag={setValue} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

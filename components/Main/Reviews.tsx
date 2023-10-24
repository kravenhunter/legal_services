"use client";

import { ButtonReview, Title } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IReviews {
  title: string;
  subtitle: string;
  job: string;
  imageCover: string;
}

const modes = ["out-in", "in-out"];
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
  {
    title: "Samackson J",
    subtitle: " It is a team of well equipped corner of India.",
    job: "Attorneys",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/7ff342c0-7ff7-4109-bb13-0277d66aed5d_galary_expert1.webp",
  },
  {
    title: "Samurai El ",
    subtitle: " It is  lawyer from every corner of India.",
    job: "Attorneys",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/1cfe0174-e3ba-40c4-8e87-fa68ce40dd3e_galary_expert2.webp",
  },
  {
    title: "Jackson El",
    subtitle: " It lawyer ",
    job: "Staff Engineer",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/3c929f1b-667c-4f98-8796-3cf504e77f4b_galary_expert3.webp",
  },
  {
    title: "Jamackson J",
    subtitle: " Great service.",
    job: "Attorneys",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/7ff342c0-7ff7-4109-bb13-0277d66aed5d_galary_expert1.webp",
  },
  {
    title: "Samurai",
    subtitle: "Nice lawyers .",
    job: "Attorneys",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/1cfe0174-e3ba-40c4-8e87-fa68ce40dd3e_galary_expert2.webp",
  },
  {
    title: "ElJackson ",
    subtitle: "Exelent!!!",
    job: "Staff Engineer",
    imageCover:
      "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/3c929f1b-667c-4f98-8796-3cf504e77f4b_galary_expert3.webp",
  },
];
const Reviews = () => {
  const [page, setValue] = useState(0);
  const [stateReviews, setReviews] = useState<IReviews[]>();

  useEffect(() => {
    const startIndex = page * 3;
    const endIndes = startIndex + 3;
    const res = reviwers.slice(startIndex, endIndes);
    setReviews(res);
  }, [page, setReviews]);

  return (
    <div className='reviews h-96 grid relative'>
      <Title title={title} />
      <AnimatePresence>
        <motion.div
          key={page}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: "100%" }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          className='rewiews_list flex justify-center gap-5 absolute place-self-center'>
          {stateReviews?.map((review, index) => (
            <article key={index} className='review flex bg-zinc-900  rounded-xl '>
              <div className='avatar w-40'>
                <Image
                  src={review.imageCover}
                  alt={review.title}
                  width={150}
                  height={289}
                  style={{
                    width: "260px",
                    height: "166px",
                  }}
                  priority
                />
              </div>
              <div className='desc w-64  p-3 grid justify-between'>
                <p className='text-white text-sm'>{review.subtitle}</p>
                <div className='sub'>
                  <h6 className='colorText font-bold'>{review.title}</h6>
                  <span className='text-slate-500'>{review.job}</span>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className='pagination w-full flex items-end justify-center gap-5 '>
        <ButtonReview index={0} pageNum={page} setPag={setValue} />
        <ButtonReview index={1} pageNum={page} setPag={setValue} />
        <ButtonReview index={2} pageNum={page} setPag={setValue} />
      </div>
    </div>
  );
};

export default Reviews;

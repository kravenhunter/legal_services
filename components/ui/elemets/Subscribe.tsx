import style from "@/components/ui/elemets/subscribe.module.scss";

const title = "Subscribe Our Newsletter";

const Subscribe = () => {
  return (
    <article className={`${style.container} colorBg p-5 grid gap-3 mx-auto`}>
      <div className={`${style.container__block} h-16`}>
        <h1
          className={`${style.container__block__title} text-4xl  font-mono italic font-bold text-center`}>
          {title}
        </h1>
        <div className={`${style.container__block__lines} w-full`}>
          <hr className='h-px bg-white w-full mb-1' />
          <hr className='h-px bg-white w-full mb-1' />
          <hr className='h-px bg-white w-full mb-1' />
          <hr className='h-px bg-white w-full mb-1' />
        </div>
      </div>
      <div className='form flex gap-1 bg-white p-1 mx-5 '>
        <input type='text' className='w-full pl-2' autoComplete='off' placeholder='Email' />
        <button
          type='button'
          className={`         
          grid 
          place-content-center
          hover:bg-yellow-800        
          bg-zinc-900 text-white        
          w-40 
          h-11                 
          text-base
          border-solid border-2
          border-yellow-800  
          `}>
          <span>LEARN MORE</span>
        </button>
      </div>
    </article>
  );
};

export default Subscribe;

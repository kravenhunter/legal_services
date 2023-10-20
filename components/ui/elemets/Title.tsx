import style from "@/components/Main/learn.module.scss";

const Title = ({ title }: { title: string }) => {
  return (
    <div className={`${style.block} h-16`}>
      <h1 className={`${style.block__title} font-mono text-5xl italic font-bold text-center`}>
        {title}
      </h1>
      <div className={`${style.block__lines} w-full`}>
        <hr className='h-0.5 bg-black w-full mb-1' />
        <hr className='h-0.5 bg-black w-full mb-1' />
        <hr className='h-0.5 bg-black w-full mb-1' />
        <hr className='h-0.5 bg-black w-full mb-1' />
      </div>
    </div>
  );
};

export default Title;

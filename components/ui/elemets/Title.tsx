import style from "@/components/Main/learn.module.scss";

//Props with defaults
type Props = {
  title: string;
  sizeTitle?: string;
  lineClass?: string;
};
const Title = ({ title, sizeTitle = "text-5xl", lineClass = "bg-black" }: Props) => {
  return (
    <div className={`${style.block} h-16`}>
      <h1 className={`${style.block__title} ${sizeTitle}  font-mono  italic font-bold text-center`}>
        {title}
      </h1>
      <div className={`${style.block__lines} w-full`}>
        <hr className={`${lineClass} h-0.5 bg-black w-full mb-1`} />
        <hr className={`${lineClass} h-0.5 bg-black w-full mb-1`} />
        <hr className={`${lineClass} h-0.5 bg-black w-full mb-1`} />
        <hr className={`${lineClass} h-0.5 bg-black w-full mb-1`} />
      </div>
    </div>
  );
};

export default Title;

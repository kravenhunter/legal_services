import React from "react";
interface IPag {
  isActive: boolean;
}
interface IProps {
  index: number;
  pageNum: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const ButtonText = ({ index, pageNum, setValue }: IProps) => {
  return (
    <div>
      <button
        className='bg-slate-500 text-white p-2 mx-2'
        onClick={() =>
          setValue((prev) => {
            prev = index;
            return prev;
          })
        }>
        Change
      </button>
      <strong className={index === pageNum ? "text-red-400" : "text-emerald-700"}>Some text</strong>
    </div>
  );
};

export default ButtonText;

// const ButtonText = ({ text, setValue }: IPag) => {
//     return (
//       <div>
//         <button
//           className='bg-slate-500 text-white'
//           onClick={() => setValue(`My NEW Value ${Math.ceil(Math.random() * 1000)}`)}>
//           Change
//         </button>
//         <strong>{text}</strong>
//       </div>
//     );
//   };

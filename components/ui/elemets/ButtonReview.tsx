"use client";

import React from "react";

interface IProps {
  index: number;
  pageNum: number;
  setPag: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonReview = ({ index, pageNum, setPag }: IProps) => {
  return (
    <button
      onClick={() =>
        setPag((prev) => {
          prev = index;
          return prev;
        })
      }
      type='button'
      title='pag'
      className={`${
        index === pageNum ? "bg-yellow-800" : "bg-zinc-900 "
      } w-4 h-4 rounded-lg`}></button>
  );
};

export default ButtonReview;

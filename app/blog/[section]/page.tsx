import { About } from "@/components";

type Props = {
  params: {
    section: string;
  };
};

export default async function Section({ params: { section } }: Props) {
  console.log(section);
  if (section === "about") {
    return <About />;
  } else {
    throw new Error("Bad Request");
  }
}

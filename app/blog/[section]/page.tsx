import { About, Cases, Contacts, NewsBlock } from "@/components";
import { newsList } from "@/utils/seed";

type Props = {
  params: {
    section: string;
  };
};

export default async function Section({ params: { section } }: Props) {
  console.log(section);
  switch (section) {
    case "about":
      return <About />;
    case "contacts":
      return <Contacts />;
    case "news":
      return <NewsBlock newsList={newsList} />;
    case "cases":
      return <Cases />;

    default:
      throw new Error("Bad Request");
  }

  // if (section === "about") {
  //   return <About />;
  // } else {
  //   throw new Error("Bad Request");
  // }
}

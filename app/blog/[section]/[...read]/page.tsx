import { Article } from "@/components";
import { newsList } from "@/utils/seed";
type Props = {
  params: {
    read: string[];
  };
};

export default async function Section({ params }: Props) {
  console.log(params.read);
  switch (params.read[0]) {
    case "read":
      const getArticle = newsList.find((el) => el.id === Number(params.read[1]));
      if (getArticle) {
        return <Article post={getArticle} />;
      }
      throw new Error("Bad Request");

    default:
      throw new Error("Bad Request");
  }
}

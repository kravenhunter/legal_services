import styles from "@/app/page.module.scss";
import { Areas, Choose, Experts, Hero, LatestNews, Learn, Reviews } from "@/components";
import { newsList } from "@/utils/seed";

// const newsList = [
//   {
//     id: 1,
//     title: "Algeria Procedures for Auto Dealerships",
//     imgBg:
//       "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/94c96a63-e31f-443c-bd4d-529ee4cb3a85_galary_law_news2.webp",
//     category: "Cyber Law",
//     date: "01-Jan-2023",
//     shorDesc: `In recent news, several car brands have been granted licenses to begin operations in Algeria. Fiat Algeria, JAC, and Opel have received the go-ahead to introduce their vehicles to Algerian consumers. Emin Auto, JAC's representative, hinted that the company's vehicles would be available in May. Geely is also preparing to enter the market soon.`,
//     description: "",
//   },
//   {
//     id: 2,
//     title: "Challenges and Opportunities for Labor Law in Slovenia",
//     imgBg:
//       "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8a7fc317-58d8-43f2-8484-0f953999f336_galary_law_news1.webp",
//     category: "Cyber Law",
//     date: "01-Jan-2023",
//     shorDesc:
//       "Labor law is continually evolving, due to various social, economic, and political influences. Slovenian labor law is at a significant crossroads, with the Proposal for Amendments to the Employment Relationship Act (ZDR-1C) currently under consideration.",
//     description: "",
//   },
//   {
//     id: 3,
//     title: "Real Property in Thailand",
//     imgBg:
//       "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/38ab3318-4f61-4fee-8c73-29eb3b68b4e9_galary_law_news3.webp",
//     category: "Cyber Law",
//     date: "01-Jan-2023",
//     shorDesc:
//       "The Thai Land Code provides generally that foreign individuals or foreign companies are prohibited from owning land in the Kingdom. The rule results in obvious practical difficulties in common scenarios where foreign buyers wish to purchase real property (or real estate) in Thailand.",
//     description: "",
//   },
// ];

export default async function Home() {
  console.log("App");

  return (
    <main className='min-h-screen overflow-hidden flex justify-center'>
      <div className={`${styles.content} grid gap-40`}>
        <Hero />
        <div className={`${styles.content__other} mx-auto grid gap-20`}>
          <Learn />
          <Areas />
          <Choose />
          <Experts />
          <Reviews />
          <LatestNews title='Latest From Blog' news={newsList} />
        </div>
      </div>
    </main>
  );
}

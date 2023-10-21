import styles from "@/app/page.module.scss";
import { Areas, Choose, Experts, Hero, LatestNews, Learn, Reviews } from "@/components";

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
          <LatestNews />
        </div>
      </div>
    </main>
  );
}

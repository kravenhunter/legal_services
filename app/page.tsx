import styles from "@/app/page.module.scss";
import { Areas, Choose, Hero, Learn } from "@/components";

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
        </div>
      </div>
    </main>
  );
}

import styles from "@/app/page.module.scss";
import { Hero, Learn } from "@/components";

export default async function Home() {
  console.log("App");

  return (
    <main className='min-h-screen overflow-hidden flex justify-center'>
      <div className={styles.content}>
        <Hero />
        <div className={styles.content__other}>
          <Learn />
        </div>
      </div>
    </main>
  );
}

import { Experts, Title } from "@/components";
import styles from "@/components/about.module.scss";
import Image from "next/image";

const content = {
  coverMain:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/8d5f39a2-7c78-4cfd-8f52-5a9e434ca762_galary_cover_legacy.webp",

  coverContent:
    "https://eczanyjbasiipyhbsoep.supabase.co/storage/v1/object/public/images/galary/fcfcb23a-2404-4db1-bcd7-98e334c033c5_galary_about_team.webp",

  title: "About US",
  subtitle: "Always on your side to defend you...",
};

const contentText = [
  {
    title: "HG.org - Overview",
    text: `HG.org was one of the very first online law information sites and has grown to be a top-most popular legal resource on the internet. It includes extensive directories of law firms and lawyers for more than 200 countries, along with law information, legal articles published by law firms, and legal guides for more than 260 areas of practice.

         One of the oldest and largest non-subscription legal information sites, HG.org was launched in 1995 by Lex Mundi, the world's leading network of independent law firms, and its founder, Steve McGarry. Its purpose is to make information about lawyers, law firms, and the law easily and freely accessible to the legal profession, businesses, and consumers.

         Today, 1,200,000 visitors each month turn to HG.org when looking for lawyers and legal help. Offering highly engaged interaction with visitors, thousands and thousands of lawyers and law firms enjoy the benefits of being included in HG.org's directories and taking advantage of its other services, such as free leads, for focused marketing to their target audiences.`,
  },
  {
    title: "Lawyers' Global Directory",
    text: `Lawyers Directory - HG.org sought to change the law firm advertising model in 1995, with remarkable success. Before the advent of the Internet, law firms typically spent tens of thousands of dollars to have their information included in published directories, in order to advertise their businesses.

         HG.org, realizing the power and the reach of the Internet, developed the first self-listing directories online, where lawyers can provide comprehensive information about their individual law firm and their services directly to the legal community and the public, for a nominal cost, accessible at the click of a button..

         HG.org provides these listing services worldwide:

        * Africa and the Middle East;
        * Asia and the Pacific;
        * Europe;
        * North America by Country;
        * South America/Latin America and the Caribbean; and
        * The U.S.A
        
         In order to make the search information as accessible as possible, HG.org allows potential customers to search by geographic area, by country and practice area, by state and city, as well as by practice area.

         Today, when someone is searching for a lawyer or a law firm online, the search results from all the major search engines show the HG.org Law Firm Directory at or near the top of the page for most states and countries. This creates a remarkable presence in the market for each listed firm.`,
  },
  {
    title: "Legal Service Provider Directory",
    text: `Expert Witnesses with General Expert Witness and and Medical Expert Witness sections cover expert witness in 1,500 categories including 700 medical diseases and conditions. The pages are almost always found in the top 10 search results in Google and Bing searches for experts.`,
  },
  {
    title: "Law & Practice",
    text: `This section provides extensive information about many and varied areas of law and government for the general public

         Areas of Practice - This Law Center provides information, overviews, definitions, links and more for over 70 core areas of law, which are then broken down into a number of legal subcategories, resulting in over 120 practice areas. Business Law - The Guide to Business Law includes information about businesses, including starting and forming a business, financing, different legal business structures, E-commerce, and more. Divorce - The U.S. Divorce Law Center presents comprehensive information about the many facets of divorce throughout the United States. Visitors may obtain an overview of divorce law and other related topics, such as legal separation and its counterparts; annulment; property division; maintenance, alimony or spousal support; child custody and visitation; child support; and domestic partnership and/or civil union dissolution on the Center's homepage. The Divorce Law Center's

         State Pages reference the most recent, up-to-date statutes. These pages also provide resource links allowing visitors to pursue further independent research should they choose. Lawyer links throughout the center assist our visitors in identifying and locating local lawyers and law firms that specialize in divorce and its sub-category practice areas.

         Estate Planning - The Estate Planning Center includes wide-ranging information regarding the many elements of estate planning - from the basics to some of the more complicated aspects, such as community property issues and prenuptial agreements. The topics covered include Wills, Advance Medical Directives, Medical Powers of Attorney, Trusts, Living Wills, Probate, and many other related subjects. There are also links to informative related articles, various state resources, and statutes.`,
  },
];

const About = () => {
  return (
    <section className='about'>
      <div className={`${styles.content} mx-auto grid gap-16`}>
        <div className='cover'>
          <Image
            src={content.coverMain}
            alt={content.title}
            width={1659}
            height={179}
            priority
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className='about_content grid gap-12'>
          <div className={`${styles.content__title} w-full mx-auto`}>
            <Title title='Our Best Team' />
          </div>

          <Image
            src={content.coverContent}
            alt={content.title}
            width={1659}
            height={421}
            priority
          />
          {contentText?.map((el, index) => (
            <div key={index} className='about_text'>
              <h3 className='colorText text-2xl font-bold my-3'>{el.title}</h3>
              <pre className='text-lg'>{el.text}</pre>
            </div>
          ))}
        </div>

        <div className={`${styles.content__title} experts w-full mx-auto`}>
          <Experts />
        </div>
      </div>
    </section>
  );
};

export default About;

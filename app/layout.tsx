import "@/app/globals.css";
import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

//React Query Provider
// import { QueryClient } from "@tanstack/react-query";
// import { TanstackProvider } from "@/components";
// const queryClient = new QueryClient();
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal Services",
  description: "Proviing help for sitizen",
};
//SSR
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

//React Query
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en'  className={roboto.className}>
//       <body>
//         <NavBar />
//         <TanstackProvider>
//           <main>{children}</main>
//         </TanstackProvider>
//       </body>
//     </html>
//   );
// }

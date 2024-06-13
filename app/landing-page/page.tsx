import { Outfit } from "next/font/google";
import HeroSection from "./_component/hero-section";
import Navbar from "./_component/navbar/navbar";
import FourthSection from "./_component/fourth-section";
import Footer from "./_component/footer";

// const LandingPage = () => {
//   return (
//     <div className="">
//       <Navbar />
//       <HeroSection />
//       {/* <SecondSection />
//         <ThirdSection />
//         <FourthSection />
//         <FifthSection />

//         <SixthSection />
//         <SeventhSection />
//         <GetStartedFree />
//         <Footer /> */}
//     </div>
//   );
// };
const font = Outfit({ subsets: ["latin"] });

// export default LandingPage;
export default function Page() {
  return (
    <div className={font.className}>
      <Navbar />
      <HeroSection />
      {/* <SecondSection />
          <ThirdSection /> */}
      <FourthSection />
      {/* <FifthSection />
          <SixthSection />
          <SeventhSection />
          <GetStartedFree />
          <Footer /> */}
      <Footer />
    </div>
  );
}

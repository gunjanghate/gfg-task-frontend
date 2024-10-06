import Image from "next/image";
import Header from "./components/Header";
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
import ContainerThree from "./components/ContainerThree";
import ContainerFour from "./components/ContainerFour";
import Footer from "./components/Footer";
export default function Home() {
  return (
      <>
      <header>
      <Header />
      </header>
      <main className="min-h-screen min-w-screen flex flex-col justify-around mx-5 md:mx-12 lg:mx-44 pt-0">
        <ContainerOne/>
        <ContainerTwo/>
        <ContainerThree/>
        <ContainerFour/>
      </main>
      <Footer>
        <Footer />
      </Footer>
         </>
  );
}

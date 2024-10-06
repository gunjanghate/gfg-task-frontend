import Image from "next/image";
import Header from "./components/Header";
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
import ContainerThree from "./components/ContainerThree";
import ContainerFour from "./components/ContainerFour";
export default function Home() {
  return (
      <>
      <header>
      <Header />
      </header>
      <main className="min-h-screen flex flex-col justify-around mx-44 pt-0">
        <ContainerOne/>
        <ContainerTwo/>
        <ContainerThree/>
        <ContainerFour/>
      </main>
         </>
  );
}

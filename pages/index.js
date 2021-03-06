import Head from "next/head";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useWindowDimensions } from "../styles/useDimensionHook";
import Card from "../Components/Card/index";
import Navbar from "../Components/Navbar";

export default function Home({ riversData }) {
  const [showRivers, setShowRivers] = useState(false);
  const [showData, setShowData] = useState([]);
  const [quantity, setQuantity] = useState(3);
  const { height, width } = useWindowDimensions();
  const breakpoint_1 = width < 520;
  const breakpoint_2 = width > 520 && width < 1000;

  const sortHighestToLowest = (data) => {
    data.sort(
      (a, b) =>
        b.length.split(" ")[0].replace(",", "") -
        a.length.split(" ")[0].replace(",", "")
    );

    return data;
  };

  useEffect(() => {
    if (riversData) {
      const data = sortHighestToLowest(riversData);

      const datos = data.map((res, index) => {
        return <Card {...res} key={index}></Card>;
      });

      setShowData(datos);
    }
  }, [riversData]);

  useEffect(() => {
    if (breakpoint_1) {
      setQuantity(1);
    } else if (breakpoint_2) {
      setQuantity(2);
    } else {
      setQuantity(3);
    }
  }, [height, width]);

  return (
    <div className="bg-white  h-screen dark:bg-gray-800">
      <Head>
        <title>Discover the rivers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar handleShowRivers={(e) => setShowRivers(e)}></Navbar>

      {showRivers && (
        <main className="w-full bg-white text-gray-800 dark:bg-gray-800 dark:text-white px-3 py-3">
          <Carousel itemsToShow={quantity}>{showData}</Carousel>
        </main>
      )}
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.nuxtjs.dev/rivers");
  const data = await res.json();
  return { riversData: data };
};

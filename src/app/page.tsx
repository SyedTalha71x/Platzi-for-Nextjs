import Image from "next/image";
import Heroesection from '../app/Herosection/page'
import Trending from '../app/Trending/page'
import Categories from '../app/Categories/page'

export default function Home() {
  return (
    <>
      <Heroesection />
      <Trending />
      <Categories />
    </>
  );
}

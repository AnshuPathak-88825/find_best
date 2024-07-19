"use client";
import Image from "next/image";
import { UserNav } from "./component/user-nav";
import { Search } from "./component/search";
import { MainNav } from "./component/main-nav";
import HomePageOverview from "./component/HomePageOverview";
import Categories from "./component/Categories";
import { Full_NavBar, Mobile_NavBar } from "./component/NavBar";
import { useEffect, useState } from "react";
export default function Home() {
  const [IsMobile, SetIsMohile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        console.log("hello");
        SetIsMohile(true);
      } else {
        SetIsMohile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <div>
      {!IsMobile && <Full_NavBar />}
      {IsMobile && <Mobile_NavBar />}
      <div>
        <HomePageOverview />
      </div>
      <div>
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

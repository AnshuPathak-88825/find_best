import Image from "next/image";
import { UserNav } from "./component/user-nav";
import { Search } from "./component/search";
import { MainNav } from "./component/main-nav";
import HomePageOverview from "./component/HomePageOverview";
export default function Home() {
  return (
    <div>
      <div className="border-b">
          <div className="flex  h-16 items-center px-4 bg-transparent	backdrop-blur-md	">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div>
          <HomePageOverview/>

        </div>
    </div>
  );
}

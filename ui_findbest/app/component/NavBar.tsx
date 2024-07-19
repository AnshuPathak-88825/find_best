"use client"
import React, { useState } from "react";
import { MainNav } from "./main-nav";
import { Search } from "./search";
import { UserNav } from "./user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SquareMenu, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";


import {
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenu,
    NavigationMenuTrigger,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export function Full_NavBar() {
    return (
        <div>

            <div className="border-b sticky top-0">
                <div className="flex  h-16 items-center px-4 bg-transparent	backdrop-blur-md	">
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <UserNav />
                    </div>
                </div>
            </div>
        </div>
    );
}
const components = [
    {
        title: "Medicine",
        href: "/categories/medicine",
        description:
            "A category that includes various types of medications and healthcare products.",
    },
    {
        title: "Food",
        href: "/categories/food",
        description:
            "A category that includes all kinds of food products, ranging from groceries to ready-to-eat items.",
    },
    {
        title: "Smartphone",
        href: "/categories/smartphone",
        description:
            "A category dedicated to the latest smartphones, accessories, and related gadgets.",
    },
    {
        title: "Grocery",
        href: "/categories/grocery",
        description:
            "A category that includes a wide variety of grocery items, including fresh produce, canned goods, and more.",
    },
    {
        title: "Electronics",
        href: "/categories/electronics",
        description:
            "A category that encompasses a broad range of electronic devices and gadgets.",
    },
    {
        title: "Clothing",
        href: "/categories/clothing",
        description:
            "A category featuring a variety of clothing items for men, women, and children.",
    },
];
export function Mobile_NavBar() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className="absolute top-2 left-2 z-16  bg-transparent	backdrop-blur-md  " >
            <div onClick={() => setToggle(!toggle)} className="font-medium text-lg text-muted-foreground cursor-pointer">
                {!toggle && <SquareMenu />}
            </div>
            {toggle && <div className="w-[200px] p-1 m-2 border rounded">

                <div className="flex-col p-2">
                    <div className="flex justify-between">
                        <div>
                            <Link
                                href="/examples/dashboard"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Overview
                            </Link>
                        </div>
                        <div onClick={() => setToggle(!toggle)} className="font-medium text-lg text-muted-foreground cursor-pointer rotate-45">
                            <Plus />
                        </div>
                    </div>


                    <div >
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className=" p-0">Categories</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="w-[300px] ">
                                            {components.map((value, index) => (
                                                <div key={index}>
                                                    <ListItem {...value} />
                                                </div>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="p-2">
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Products
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Settings
                        </Link>
                    </div>
                    <div className="p-2 w-full">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="md:w-full "
                        />
                    </div>
                    <div className="p-2"><UserNav /></div>

                </div>
            </div>}
        </div>

    );
}
type CategoryType = {
    title: string,
    href: string,
    description: string
};
const ListItem = ({ title, href, description }: CategoryType) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};

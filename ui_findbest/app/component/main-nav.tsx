 
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils";
import {NavigationMenuLink, NavigationMenuList,NavigationMenuItem,NavigationMenuContent,NavigationMenuTrigger,NavigationMenu } from "@/components/ui/navigation-menu";

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
  
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      {/* <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        
      </Link> */}
      <div>
      <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenuList>

        </NavigationMenu>


      </div>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
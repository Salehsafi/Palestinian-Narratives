
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-gradient-to-r from-[#0B1437] via-[#1a237e] to-[#0B1437] dark:from-[#0B1437] dark:via-[#1a237e] dark:to-[#0B1437] backdrop-blur-lg">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white shadow-lg">
            <Globe className="size-5" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Palestinian Heritage
            </span>
            <span className="text-xs text-gray-400">
              Interactive Cultural Archive
            </span>
          </div>
        </div>

        <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              {/* Fixed: Removed nested anchor tags by using NavigationMenuLink directly */}
              <NavigationMenuLink asChild>
                <Link to="/" className="text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 hover:bg-white/10 rounded-md">
                  Explorer
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* Fixed: Removed nested anchor tags by using NavigationMenuLink directly */}
              <NavigationMenuLink asChild>
                <Link to="/cultural-products" className="text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 hover:bg-white/10 rounded-md">
                  Cultural Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;

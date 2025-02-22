import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Menu = () => {
  return (
    <div className="">
      <nav className="hidden md:flex gap-1">
        <ModeToggle />
        <Button asChild variant={"ghost"}>
          <Link href="/">
            <ShoppingCart /> Cart
          </Link>
        </Button>

        <Button asChild>
          <Link href="/">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>

      {/* sheet component */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetHeader className="flex items-center">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <ModeToggle />
            <Button asChild variant={"ghost"}>
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>

            <Button asChild>
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;

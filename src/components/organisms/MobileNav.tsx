import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@components/ui/sheet";
import { navLinks } from "@data/data";
import Brand from "@components/atoms/Brand";

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-8">
            <Brand label="Brand" />
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
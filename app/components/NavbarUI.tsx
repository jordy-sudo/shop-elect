'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Servicios", href: "/services" },
    { label: "Sobre Nosotros", href: "/about" },
    { label: "Contactanos", href: "/contact" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}

    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">MegaOHM</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">MegaOHM</p>
          </Link>
        </NavbarBrand>
        <NavbarItem isActive={pathname === '/services'}>
          <Link color="foreground" href="/services">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/about'}>
          <Link href="/about" aria-current="page" >
            Sobre Nostros
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/contact'}>
          <Link color="foreground" href="/contact">
            Contactanos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          pathname == item.href ?
            <NavbarMenuItem key={`${item.label}-${index}`} isActive>
              <Link
                className="w-full"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
            :
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

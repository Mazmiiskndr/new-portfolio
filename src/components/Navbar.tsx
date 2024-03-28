"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { TbExternalLink, TbLogin2 } from "react-icons/tb";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className={clsx("drop-shadow-sm mb-3 bg-transparent backdrop-blur-md ")}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Taskify</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link  href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-2">
          {/* <Button
            as={Link}
            href={`/sign-in`}
            color="default"
            variant="solid"
            size="sm"
            className="flex font-semibold"
          >
            Sign In
            <TbLogin2 size={20} />
          </Button> */}

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

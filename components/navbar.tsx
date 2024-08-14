"use client"
import React from 'react'
import Link from 'next/link'
import Logo from "./../public/assets/logo.svg"
import LogoDark from "./../public/assets/logo-dark.svg";
import Search from "./../public/assets/search.svg";
import MessageIcon from "../public/assets/message.svg";
import SendIcon from "../public/assets/send.svg";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from 'lucide-react';

const Navbar = () => {

  const { theme, setTheme } = useTheme();

  return (
    <nav className='fixed z-[999] w-full top-0 dark:bg-black p-3 py-2 border-b max-w-default mx-auto flex items-center justify-between '>
        <div className="flex-1 flex flex-col items-start justify-start">
            <Link href={"/"}>
              {theme === "dark" ? <Logo /> : <LogoDark />}
                <strong className='hidden'>Tiktok</strong>
            </Link>
        </div>
        <div className="flex-1 hidden lg:inline-block relative">
        <form
            className="flex flex-row items-center bg-gray-200/50 dark:!bg-[rgba(255,255,255,0.12)] rounded-[92px] group relative z-1 m-0
            focus-within:ring-2 focus-within:ring-gray-300 duration-300 overflow-hidden w-full
            "
          >

            <Input
              name="q"
              type="search"
              role="combobox"
              aria-label="Search"
              aria-autocomplete="list"
              autoComplete="off"
              placeholder="Search accounts and videos"
              className="relative flex-1 font-normal -tracking-tight p-5 pr-[48px] !h-[21px] text-[16px] leading-[21px] !bg-transparent w-[50px] !text-[rgba(83,83,83,0.9)] placeholder:text-gray-400 caret-[#ff3b5c] !appearance-none
                  shadow-none rounded-r-none !outline-0 focus:visible:border-0 focus-visible:outline-0 focus-visible:ring-0 !border-0
                "
            />
             {/* <span className="w-[1px] h-[28px] my-[-3px] bg-black/10 dark:bg-[rgba(255,255,255,0.12)]"></span> */}
            <Button
            type='button'
            variant={"ghost"}
              className="absolute top-0 right-0 flex items-center justify-center  cursor-pointer hover:bg-gray-200 duration-300 outline-none rounded-l-none !border-l ml-2"
            >
              <Search className="text-black/40 dark:text-[rgba(255,255,255,.34)]" />
            </Button>
            </form>
        </div>
        
        <div className="flex-1 flex items-center justify-end space-x-4">

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-52 py-1 mt-3 px-2 pb-2"
            >
              <DropdownMenuLabel className="text-[15px] font-medium">
                Dark mode
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={theme}
                onValueChange={(value) => setTheme(value)}
              >
                <DropdownMenuRadioItem
                  className="cursor-pointer text-[15px] font-medium"
                  value="light"
                >
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className="cursor-pointer text-[15px] font-medium"
                  value="dark"
                >
                  Dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className="cursor-pointer text-[15px] font-medium"
                  value="system"
                >
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>




        <div className="relative cursor-pointer">
            <Link href="/">
              <SendIcon className="w-6 h-6" />
            </Link>
            <sup
              className="absolute -top-2 left-4 font-semibold text-sm text-center 
            rounded-[10px] bg-[rgb(255,59,92)] text-white min-w-[20px] h-[20px]"
            >
              5
            </sup>
          </div>
          <div className="relative cursor-pointer">
            <Link href="/">
              <MessageIcon className="w-8 h-8" />
            </Link>
            <sup
              className="absolute -top-1 left-4 font-semibold text-sm text-center 
            rounded-[10px] bg-[rgb(255,59,92)] text-white min-w-[20px] h-[20px]"
            >
              13
            </sup>
          </div>

          <Link href="/">
            <Avatar className="w-[32px] h-[32px]">
              <AvatarImage src="https://i.pravatar.cc/150?img=1" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>

        </div>
    </nav>
  )
}

export default Navbar
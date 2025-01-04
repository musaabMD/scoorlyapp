// // "use client";

// // import { useState, useEffect } from "react";
// // import { useSearchParams } from "next/navigation";
// // import Link from "next/link";
// // import Image from "next/image";
// // import ButtonSignin from "./ButtonSignin";
// // import logo from "@/app/icon.png";
// // import config from "@/config";

// // const links = [
// //   {
// //     href: "/#pricing",
// //     label: "Pricing",
// //   },
// //   {
// //     href: "/#testimonials",
// //     label: "Reviews",
// //   },
// //   {
// //     href: "/#faq",
// //     label: "FAQ",
// //   },
// // ];

// // const cta = <ButtonSignin extraStyle="btn-primary" />;

// // // A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// // // The header is responsive, and on mobile, the links are hidden behind a burger button.
// // const Header = () => {
// //   const searchParams = useSearchParams();
// //   const [isOpen, setIsOpen] = useState(false);

// //   // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [searchParams]);

// //   return (
// //     <header className="bg-base-200">
// //       <nav
// //         className="container flex items-center justify-between px-8 py-4 mx-auto"
// //         aria-label="Global"
// //       >
// //         {/* Your logo/name on large screens */}
// //         <div className="flex lg:flex-1">
// //           <Link
// //             className="flex items-center gap-2 shrink-0 "
// //             href="/"
// //             title={`${config.appName} hompage`}
// //           >
// //             <Image
// //               src={logo}
// //               alt={`${config.appName} logo`}
// //               className="w-8"
// //               placeholder="blur"
// //               priority={true}
// //               width={32}
// //               height={32}
// //             />
// //             <span className="font-extrabold text-lg">{config.appName}</span>
// //           </Link>
// //         </div>
// //         {/* Burger button to open menu on mobile */}
// //         <div className="flex lg:hidden">
// //           <button
// //             type="button"
// //             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
// //             onClick={() => setIsOpen(true)}
// //           >
// //             <span className="sr-only">Open main menu</span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth={1.5}
// //               stroke="currentColor"
// //               className="w-6 h-6 text-base-content"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// //               />
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Your links on large screens */}
// //         <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
// //           {links.map((link) => (
// //             <Link
// //               href={link.href}
// //               key={link.href}
// //               className="link link-hover"
// //               title={link.label}
// //             >
// //               {link.label}
// //             </Link>
// //           ))}
// //         </div>

// //         {/* CTA on large screens */}
// //         <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
// //       </nav>

// //       {/* Mobile menu, show/hide based on menu state. */}
// //       <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
// //         <div
// //           className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
// //         >
// //           {/* Your logo/name on small screens */}
// //           <div className="flex items-center justify-between">
// //             <Link
// //               className="flex items-center gap-2 shrink-0 "
// //               title={`${config.appName} hompage`}
// //               href="/"
// //             >
// //               <Image
// //                 src={logo}
// //                 alt={`${config.appName} logo`}
// //                 className="w-8"
// //                 placeholder="blur"
// //                 priority={true}
// //                 width={32}
// //                 height={32}
// //               />
// //               <span className="font-extrabold text-lg">{config.appName}</span>
// //             </Link>
// //             <button
// //               type="button"
// //               className="-m-2.5 rounded-md p-2.5"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               <span className="sr-only">Close menu</span>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth={1.5}
// //                 stroke="currentColor"
// //                 className="w-6 h-6"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M6 18L18 6M6 6l12 12"
// //                 />
// //               </svg>
// //             </button>
// //           </div>

// //           {/* Your links on small screens */}
// //           <div className="flow-root mt-6">
// //             <div className="py-4">
// //               <div className="flex flex-col gap-y-4 items-start">
// //                 {links.map((link) => (
// //                   <Link
// //                     href={link.href}
// //                     key={link.href}
// //                     className="link link-hover"
// //                     title={link.label}
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="divider"></div>
// //             {/* Your CTA on small screens */}
// //             <div className="flex flex-col">{cta}</div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// 'use client'
// // components/Header.js
// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Avatar } from "@/components/ui/avatar"
// import { BookOpen, Users, Calendar, BarChart2, Settings, GraduationCap, Bell } from 'lucide-react'

// const Header = () => {
//   const navigationItems = [
//     { icon: <BookOpen className="h-4 w-4" />, label: 'Study Room', isActive: true },
//     { icon: <Users className="h-4 w-4" />, label: 'Find Partners', isActive: false },
//     { icon: <Calendar className="h-4 w-4" />, label: 'Schedule', isActive: false },
//     { icon: <BarChart2 className="h-4 w-4" />, label: 'Analytics', isActive: false },
//   ]

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b h-16">
//       <div className="flex items-center justify-between px-4 h-full">
//         {/* Logo and Exam Info */}
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <BookOpen className="h-6 w-6 text-blue-600" />
//             <span className="font-bold text-xl">StudyWithMe</span>
//           </div>
//           <div className="hidden md:flex items-center divide-x divide-gray-200">
//             <div className="pr-4 flex items-center gap-2">
//               <GraduationCap className="h-4 w-4 text-blue-600" />
//               <span className="font-medium">USMLE Step 1</span>
//             </div>
//             <div className="pl-4 text-blue-600 font-medium">
//               45 days until exam
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center space-x-1">
//           {navigationItems.map((item, index) => (
//             <Button
//               key={index}
//               variant={item.isActive ? "secondary" : "ghost"}
//               className="flex items-center gap-2"
//             >
//               {item.icon}
//               <span className="hidden md:inline">{item.label}</span>
//             </Button>
//           ))}
//         </div>

//         {/* User Menu */}
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon">
//             <Bell className="h-5 w-5" />
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Settings className="h-5 w-5" />
//           </Button>
//           <Avatar>
//             <img
//               src="https://i.pravatar.cc/150?u=current_user"
//               alt="Current user"
//               className="rounded-full"
//             />
//           </Avatar>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
// Header.js
import React from 'react';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background border-b z-50 h-16">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-xl font-bold text-primary">Your Logo</div>
        
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild>
            <a href="#">Home</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">About</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">Contact</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Button variant="ghost" asChild>
                <a href="#">Home</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#">About</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#">Contact</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;

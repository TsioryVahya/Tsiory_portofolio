"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "Accueil", path: "/" },
    { name: "services", path: "/services" },
    { name: "résumé", path: "/resumer" },
    { name: "projets", path: "/projets" },
    { name: "contacts", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col max-w-xs mx-auto px-4">
                <div className="mt-16 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-3xl font-semibold">
                            Tsiory <span className="text-accent">Vahya</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                            } hover:text-accent text-xl capitalize transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;

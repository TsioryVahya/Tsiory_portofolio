import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl font-semibold">
                        Tsiory <span className="text-accent">Vahya</span>
                    </h1>
                </Link>



                {/* desktop nav & hire me button*/}
                    <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button>
                            Recrute moi
                        </Button>
                    </Link>
                    </div>
                    {/* mobile nav*/}
                    <div className="xl:hidden">
                        <MobileNav/>
                    </div>
            </div>
        </header>
    );
};

export default Header;

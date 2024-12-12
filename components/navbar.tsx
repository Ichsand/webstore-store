import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import Logo from "../public/logo.png"
import LogoDark from "../public/logo-dark.png"

const Navbar = async () => {
    const categories = await getCategories();
    return ( 
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-8 gap-x-2">
                    {/* <h1 className="font-bold text-3xl">sAN'D</h1><p className="font-bold text-x1">STORE</p> */}
                    <Image
                    alt="Image"
                    src={Logo}
                    width={200}
                    height={200}
                    className="priority max-w-7xl lg:max-w-12xl sm:block  object-contain"
                    />
                    </Link>
                    <MainNav data={categories} />
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;
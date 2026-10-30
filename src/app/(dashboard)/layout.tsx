import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        {/* left */}
        <div className="w-[14%] md:w-[18%] lg:w-[16%] xl:w-[14%] shrink-0 m-3">
            <Link href="/" 
            className="flex items-center justify-center lg:justify-start gap-2"
            >
                <Image src="/logo.png" alt="logo" width={32} height={32}/>
                <span className="hidden lg:block">School</span>
            </Link>
            <Menu/>
        </div>
        {/* right */}
        <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto bg-[#F7F8FA]">
            <Navbar/>
            {children}
        </div>
    </div>
  );
}

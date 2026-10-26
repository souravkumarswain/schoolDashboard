import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-[68px] w-full">
            <nav className="fixed top-0 right-0 left-[calc(14vw+24px)] md:left-[calc(18vw+24px)] lg:left-[calc(16vw+24px)] xl:left-[calc(14vw+24px)] flex h-[68px] box-border items-center justify-between bg-[#F7F8FA] p-4">
                {/* searchBar */}
                <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                    <Image src="/search.png" alt="" width={14} height={14} />
                    <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
                </div>
                {/* icons and user */}
                <div className="flex items-center gap-6 justify-end w-full">
                    <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                        <Image src="/message.png" alt="" width={20} height={20} />
                    </div>
                    <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                        <Image src="/announcement.png" alt="" width={20} height={20} />
                        <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                            1
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs leading-3 font-medium">Jhon Doe</span>
                        <span className="text-[10px] text-gray-500 text-right">Admin</span>
                    </div>
                    <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
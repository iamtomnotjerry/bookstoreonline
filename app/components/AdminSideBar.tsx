import Image from "next/image"
import fonts from '@/app/configs/fonts'
import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar() {
    const pathname = usePathname();
    
    return (
        <>
            <div className="flex justify-center items-center py-3">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={67}
                    height={50}
                    className="w-8"
                />
                <h1
                    className={cn(
                        fonts.logoFont.className,
                        'text-2xl text-primary-700',
                    )}
                >
                    Admin
                </h1>
            </div>
            <hr />
            <Link href="/admin/products">
            <div className={cn('px-4 py-2 hover:bg-ferra-400 hover:text-white duration-300 border-l-8 cursor-pointer', pathname == '/admin/products' ? 'border-ferra-700' : 'border-transparent')}>
                Products
            </div>
            </Link>
            <hr />
            <Link href="/admin/orders">
            <div className={cn('px-4 py-2 hover:bg-ferra-400 hover:text-white duration-300 border-l-8 cursor-pointer', pathname == '/admin/orders' ? 'border-ferra-700' : 'border-transparent')}>
                Orders
            </div>
            </Link>
            <hr />
            <Link href="/admin/categories">
            <div className={cn('px-4 py-2 hover:bg-ferra-400 hover:text-white duration-300 border-l-8 cursor-pointer', pathname == '/admin/categories' ? 'border-ferra-700' : 'border-transparent')}>
                Categories
            </div>
            </Link>
            <hr />
        </>
    )
}
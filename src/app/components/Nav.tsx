"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const items = [
    { href: "/", label: "젬 계산기" },
    { href: "/my-tasks", label: "내 숙제(X)" },
    { href: "/party-tasks", label: "파티 숙제(X)" },
    // { href: "/dps-share", label: "딜 지분" },
    // { href: "/gem-setup", label: "젬 세팅" },
    // { href: "/crafting-efficiency", label: "제작 효율" },
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav
            className={[
                "sticky top-0 z-40",
                "bg-[#1B1D22] border-b border-[#5C5C5C]",
                "h-20",
            ].join(" ")}
        >
            <div
                className={[
                    "w-full h-full",
                    "flex items-center justify-between",
                    "px-4 sm:px-6",
                ].join(" ")}
            >
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="font-semibold tracking-wide text-gray-200 text-lg whitespace-nowrap"
                    >
                        THISISLOGO
                    </Link>
                    <ul
                        className={[
                            "hidden md:flex items-center",
                            "gap-3 lg:gap-4",
                            "text-sm text-gray-400",
                            "pl-10",
                        ].join(" ")}
                    >
                        {items.map((it) => {
                            const active =
                                pathname === it.href ||
                                (it.href !== "/" && pathname.startsWith(it.href));
                            return (
                                <li key={it.href}>
                                    <Link
                                        href={it.href}
                                        className={[
                                            "inline-block rounded-md transition-colors",
                                            "px-3 py-2",
                                            active
                                                ? "text-white font-semibold"
                                                : "hover:text-white",
                                        ].join(" ")}
                                    >
                                        {it.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>


            </div>
        </nav>
    );
}
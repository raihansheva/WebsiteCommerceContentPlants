import { Link } from '@inertiajs/react';
import { BookOpen, ClipboardList, Folder, LayoutGrid, Route, ShoppingCart } from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { LayoutDashboard, FilePlus } from "lucide-react";
import { Leaf } from "lucide-react";
import { FolderTree } from "lucide-react";
import { CreditCard } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';

type NavGroup = {
  title: string
  items: NavItem[]
}

const mainNavItems: NavGroup[] = [
  {
    title: "Analytics",
    items: [
      {
        title: "Dashboard",
        href: dashboard(),
        icon: LayoutGrid,
      },
    ],
  },
  {
    title: "Data Master",
    items: [
      {
        title: "Data Tanaman",
        href: "/adminTanaman",
        icon: Leaf,
      },
      {
        title: "Data Kategori",
        href: "/adminKategori",
        icon: FolderTree,
      },
    ],
  },
  {
    title: "Data Payment",
    items: [
      {
        title: "Keranjang",
        href: "/adminKeranjang",
        icon: ShoppingCart,
      },
      {
        title: "Transaksi",
        href: "/adminTransaksi",
        icon: ClipboardList,
      },
      {
        title: "Pembayaran",
        href: "/adminPembayaran",
        icon: CreditCard,
      },
    ],
  },
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

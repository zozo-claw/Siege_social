"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Wallet, 
  CheckSquare, 
  LayoutDashboard 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Organigramme", href: "/organigramme", icon: Users },
  { name: "Timeline", href: "/timeline", icon: Calendar },
  { name: "Conversations", href: "/conversations", icon: MessageSquare },
  { name: "Coûts API", href: "/couts", icon: Wallet },
  { name: "Demandes", href: "/demandes", icon: CheckSquare },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
      <div className="p-6 border-b border-zinc-800 bg-zinc-900/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black">D</div>
          <h1 className="text-xl font-bold tracking-tight">Dver Dashboard</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium",
              pathname === item.href 
                ? "bg-zinc-800 text-emerald-400" 
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">A</div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">Admin User</span>
            <span className="text-[10px] text-zinc-500">nora@dver.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

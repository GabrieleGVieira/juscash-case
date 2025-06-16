"use client"

import { LogOut } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function Navbar() {
   const router = useRouter();
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      router.push("/login");
    };
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image src="/juscash-logo.png" alt="Logo" width={30} height={24} />
          <span className="text-xl font-bold text-gray-800">
            Jus<span className="text-gray-900">Cash</span>
          </span>
        </div>

        <Button variant="ghost" className="flex items-center gap-1 text-sm text-muted-foreground" onClick={handleLogout}>
          <LogOut size={16} />
          Sair
        </Button>
      </div>
    </header>
  )
}

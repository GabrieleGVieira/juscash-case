"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erroLogin, setErroLogin] = useState(false);
  const router = useRouter();

   async function fetchLogin() {
    setLoading(true);
    setErroLogin(false);
      try {
        const res = await fetch(`http://localhost:3001/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
           body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            setErroLogin(true);
            const errorData = await res.json();
            console.error("Erro ao tentar logar: ", errorData);
        }

        const token = await res.json();
        localStorage.setItem("token", token);
        router.push("/kanban");
      } catch (error) {
      setErroLogin(true);
    } finally {
      setLoading(false);
    }
    }


  const handleLogin = () => {
    if (email && password) {
      fetchLogin()
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm space-y-6 px-6">
       <div className="flex items-center justify-center mb-6 space-x-2">
            <Image
                src="/juscash-logo.png"
                alt="JusCash"
                width={40}
                height={40}
            />
            <span className="text-2xl font-bold text-gray-800">
                JusCash
            </span>
            </div>



    
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="senha">Senha:</Label>
            <div className="relative">
              <Input
                id="password"
                type={mostrarSenha ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {loading ? (
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
              ) : null}
              {loading ? "Entrando..." : "Login"}
            </Button>

          {/* <p className="text-center text-sm text-muted-foreground">
            Não possui uma conta?{" "}
            <a href="/cadastro" className="text-blue-600 underline">
              Cadastre-se
            </a>
          </p> */}
        </div>
      </div>
    <Dialog open={erroLogin} onOpenChange={setErroLogin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Erro ao fazer login</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            Verifique seu e-mail e senha e tente novamente.
          </p>
        </DialogContent>
      </Dialog>
    </div>
    
  );
}

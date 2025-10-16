import "./globals.css";

import Logo from "./components/Logo";




export const metadata = {
  title: 'ShiftsApp Legal',
  description: 'Documentación legal de la app ShiftsApp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#E6F2F0] text-[#3E3E3E]">
        <header className="flex items-center justify-between px-6 py-4 bg-[#ffffff] shadow-8xl">
          <Logo />
          <nav className="space-x-6">
            <a href="/" className="text-[#6B9080] hover:underline">Privacidad</a>
            <a href="/deleteaccount" className="text-[#6B9080] hover:underline">Eliminar cuenta</a>
            <a href="/deletedata" className="text-[#6B9080] hover:underline">Eliminar datos</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="text-center py-4 text-sm text-[#6B9080] bg-[#FAFAF7]">
          © {new Date().getFullYear()} ShiftsApp. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}


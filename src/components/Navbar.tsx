"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Projetos", href: "#projetos" },
        { name: "Diferenciais", href: "#diferenciais" },
        { name: "Sobre", href: "#sobre" },
        { name: "Avaliações", href: "#avaliacoes" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <Image
                        src="/portfolio/Logo/logo.png"
                        alt="Salvador Móveis"
                        width={48}
                        height={48}
                        className="object-contain"
                        priority
                    />
                    <span className={cn(
                        "font-outfit font-bold text-xl tracking-tight transition-colors",
                        isScrolled ? "text-brand-dark" : "text-white"
                    )}>
                        Salvador Móveis
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-brand-primary",
                                isScrolled ? "text-brand-dark/80" : "text-white/90 font-medium"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5554991404852"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary transition-colors"
                    >
                        Fazer Orçamento
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-brand-dark" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />
                    )}
                </button>
            </Container>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-dark font-medium py-2 border-b border-gray-100 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5554991404852"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-brand-primary text-white px-6 py-3 rounded-md font-semibold mt-2"
                    >
                        Fazer Orçamento
                    </a>
                </div>
            )}
        </header>
    );
}

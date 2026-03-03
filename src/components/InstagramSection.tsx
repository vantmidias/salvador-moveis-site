"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function InstagramSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.querySelector('script')) return;

        // O Novo Script do TrustIndex
        const script = document.createElement("script");
        script.src = "https://cdn.trustindex.io/loader-feed.js?0cb46d4664f3164e9b96fb5a8ce";
        script.async = true;
        script.defer = true;
        containerRef.current.appendChild(script);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <FadeIn direction="up">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] font-bold text-lg flex items-center gap-2">
                                    <Instagram className="w-6 h-6 text-[#e6683c]" />
                                    @salvadormoveis.rs
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-brand-dark">
                                Acompanhe nosso trabalho em tempo real
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <a
                            href="https://www.instagram.com/salvadormoveis.rs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20"
                        >
                            Seguir no Instagram
                        </a>
                    </FadeIn>
                </div>

                <FadeIn direction="up" delay={0.2}>
                    <div ref={containerRef} className="w-full relative min-h-[400px]">
                        {/* A div do TrustIndex será renderizada aqui via JS */}
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}

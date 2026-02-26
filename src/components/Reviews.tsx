"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/fade-in";

export function Reviews() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // Check if script already exists to prevent duplicate loading on re-renders in strict mode
        if (containerRef.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://cdn.trustindex.io/loader.js?07c5fe3659dc67496d16743b9b7";
        script.async = true;
        script.defer = true;
        containerRef.current.appendChild(script);
    }, []);

    return (
        <section id="avaliacoes" className="py-24 bg-brand-dark text-white overflow-hidden">
            <Container>
                <FadeIn direction="up">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold">
                            Aprovado por quem já transformou seu lar
                        </h2>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <div
                        ref={containerRef}
                        className="w-full relative min-h-[300px] flex justify-center items-center overflow-hidden"
                    >
                        {/* O script do Trustindex renderizará o widget internamente aqui */}
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}

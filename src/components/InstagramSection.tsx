"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef } from "react";
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
                <FadeIn direction="up">
                    <div ref={containerRef} className="w-full relative min-h-[400px]">
                        {/* A div do TrustIndex será renderizada aqui via JS */}
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}

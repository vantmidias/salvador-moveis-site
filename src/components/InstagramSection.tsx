"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function InstagramSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://cdn.trustindex.io/loader-feed.js?73bc50365d59817b1216754133a";
        script.async = true;
        script.defer = true;
        containerRef.current.appendChild(script);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                {/* TrustIndex Feed Script */}
                <FadeIn direction="up" delay={0.2}>
                    <div
                        ref={containerRef}
                        className="w-full relative min-h-[400px] flex items-center justify-center overflow-hidden"
                    >
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}

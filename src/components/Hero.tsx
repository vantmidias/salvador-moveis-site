"use client";

import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/portfolio/1.JPG"
                    alt="Cozinha de alto padrão sob medida"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay with increased opacity for better text readability */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <Container className="relative z-10 w-full">
                <div className="max-w-2xl text-left">
                    <FadeIn delay={0.1}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
                                Bento Gonçalves e Região
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="font-outfit text-4xl md:text-6xl text-white font-bold tracking-tight mb-6 leading-[1.1]">
                            Transforme seu lar com móveis <span className="text-brand-primary">exclusivos</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                            Qualidade, durabilidade e design exclusivo. Seu projeto fabricado 100% com MDF de alta qualidade e com garantia de 5 anos.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/555496575742"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-semibold transition-all group shadow-lg shadow-brand-primary/20"
                            >
                                Fazer Orçamento Gratuito
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#projetos"
                                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all"
                            >
                                Ver Projetos
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}

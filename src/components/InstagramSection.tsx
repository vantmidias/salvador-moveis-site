"use client";

import { Container } from "@/components/ui/container";
import Script from "next/script";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function InstagramSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                {/* Custom Instagram Header */}
                <FadeIn direction="down">
                    <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-4 sm:gap-6">
                            {/* Profile Picture with Instagram-like gradient ring */}
                            <a href="https://www.instagram.com/salvador.moveis" target="_blank" rel="noopener noreferrer" className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shrink-0 block hover:opacity-90 transition-opacity">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-brand-dark p-1 border-2 border-white relative">
                                    <Image
                                        src="/portfolio/Logo/logo.png"
                                        alt="Salvador Móveis e Decoração"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                            </a>

                            {/* Profile Info */}
                            <a href="https://www.instagram.com/salvador.moveis" target="_blank" rel="noopener noreferrer" className="flex flex-col group block">
                                <h2 className="font-outfit font-bold text-lg sm:text-2xl text-brand-dark leading-tight group-hover:text-brand-primary transition-colors">
                                    Salvador • Móveis e Decoração
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base">
                                    @salvador.moveis
                                </p>
                            </a>
                        </div>

                        {/* Follow Button */}
                        <a
                            href="https://www.instagram.com/salvador.moveis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#0095F6] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold hover:bg-[#1877F2] transition-colors whitespace-nowrap"
                        >
                            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            Seguir
                        </a>
                    </div>
                </FadeIn>

                {/* LightWidget Script */}
                <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js" strategy="lazyOnload" />

                {/* LightWidget Iframe */}
                <FadeIn direction="up" delay={0.2}>
                    <div className="w-full relative min-h-[400px]">
                        <iframe
                            src="//lightwidget.com/widgets/c29854b056f65bcfb977b45221cddee8.html"
                            scrolling="no"
                            // @ts-ignore: Propriedade legacy exigida pelo Lightwidget
                            allowtransparency="true"
                            className="lightwidget-widget"
                            style={{ width: "100%", border: 0, overflow: "hidden" }}
                        ></iframe>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}

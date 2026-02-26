"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import CountUp from "react-countup";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function AboutSection() {
    return (
        <section id="sobre" className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Text Column */}
                    <StaggerContainer className="flex flex-col">
                        <StaggerItem className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-brand-dark inline-block relative">
                                Sobre a Salvador
                                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-brand-primary/60 rounded-full"></span>
                            </h2>
                        </StaggerItem>

                        <StaggerItem>
                            <p className="text-gray-700 text-lg leading-relaxed mb-10">
                                Uma empresa que fabrica móveis sob medida com o intuito de transformar o seu lar trazendo mais funcionalidade, elegância e sofisticação com produtos de alta qualidade.
                            </p>
                        </StaggerItem>

                        {/* Estatísticas Integradas */}
                        <StaggerItem className="flex flex-wrap mb-10 divide-x divide-gray-200">
                            <div className="flex flex-col pr-3 md:pr-5">
                                <span className="font-outfit text-xl md:text-2xl font-bold text-brand-dark tracking-tight leading-none">
                                    <CountUp end={50} duration={2.5} prefix="+" enableScrollSpy scrollSpyOnce />
                                </span>
                                <span className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase">
                                    Projetos Entregues
                                </span>
                            </div>
                            <div className="flex flex-col px-3 md:px-5">
                                <span className="font-outfit text-xl md:text-2xl font-bold text-brand-dark tracking-tight leading-none">
                                    <CountUp end={6} duration={2.5} prefix="+" enableScrollSpy scrollSpyOnce />
                                </span>
                                <span className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase">
                                    Anos no Mercado
                                </span>
                            </div>
                            <div className="flex flex-col pl-3 md:pl-5">
                                <span className="font-outfit text-xl md:text-2xl font-bold text-brand-dark tracking-tight leading-none">
                                    <CountUp end={5} duration={2.5} prefix="+" enableScrollSpy scrollSpyOnce />
                                </span>
                                <span className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase">
                                    Cidades Atendidas
                                </span>
                            </div>
                        </StaggerItem>

                        {/* Social Buttons */}
                        <StaggerItem className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=100063502662418"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-md bg-brand-primary hover:bg-brand-dark flex items-center justify-center text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            <a
                                href="https://wa.me/555496575742"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-md bg-brand-primary hover:bg-brand-dark flex items-center justify-center text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                            </a>
                            <a
                                href="https://instagram.com/salvador.moveis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-md bg-brand-primary hover:bg-brand-dark flex items-center justify-center text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Image Column */}
                    <FadeIn direction="left" className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square md:aspect-[4/3] overflow-hidden">
                            <Image
                                src="/portfolio/Foto cliente.png"
                                alt="Sócios da Salvador Móveis"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}

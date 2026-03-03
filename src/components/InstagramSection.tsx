"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const IG_POSTS = [
    { id: 1, src: "/portfolio/cozinhas/1.JPG", likes: 142, comments: 12 },
    { id: 2, src: "/portfolio/Painéis/3.JPG", likes: 89, comments: 5 },
    { id: 3, src: "/portfolio/Dormitórios/5.JPG", likes: 214, comments: 18 },
    { id: 4, src: "/portfolio/Banheiros/1.JPG", likes: 167, comments: 9 },
    { id: 5, src: "/portfolio/Todos/12.JPG", likes: 134, comments: 14 },
    { id: 6, src: "/portfolio/cozinhas/9.JPG", likes: 256, comments: 22 },
];

export function InstagramSection() {
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

                <StaggerContainer>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {IG_POSTS.map((post) => (
                            <StaggerItem key={post.id}>
                                <a
                                    href="https://www.instagram.com/salvadormoveis.rs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative aspect-square block rounded-xl overflow-hidden bg-gray-100"
                                >
                                    <Image
                                        src={post.src}
                                        alt="Instagram Post"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay On Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                                            <Heart className="w-5 h-5 fill-white" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                                            <MessageCircle className="w-5 h-5 fill-white" />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </a>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </Container>
        </section>
    );
}

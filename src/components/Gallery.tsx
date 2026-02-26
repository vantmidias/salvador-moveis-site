"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

import portfolioImagesData from "@/data/portfolio.json";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function Gallery() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Ordem específica solicitada: Todos, cozinhas, Painéis, Dormitórios, Banheiros
    const predefinedOrder = ["Todos", "cozinhas", "Painéis", "Dormitórios", "Banheiros"];
    const uniqueExtracted = [...new Set(portfolioImagesData.map((img) => img.category))];

    // Mesclamos a ordem preferencial com outras categorias que possam existir (rejeitando duplicatas)
    const dynamicCategories = Array.from(new Set([...predefinedOrder, ...uniqueExtracted]));

    const portfolioImages = portfolioImagesData;

    // Filtra as imagens ativas
    const filteredImages = portfolioImages.filter(img =>
        activeCategory === "Todos" ? true : img.category === activeCategory
    );

    // Impede rolagem do body quando o modal está aberto
    if (typeof window !== 'undefined') {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    return (
        <section id="projetos" className="py-24 bg-gray-50 overflow-hidden">
            <Container>
                <FadeIn direction="up">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-brand-dark mb-4">
                            Confira alguns de nossos projetos
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Inspire-se com ambientes exclusivos, pensados para unir funcionalidade e beleza.
                        </p>
                    </div>
                </FadeIn>

                {/* Filters */}
                <FadeIn direction="up" delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {dynamicCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-brand-primary text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Grid - 4 columns on large screens. Limiting to 16 images on "Todos" to fill precisely 4x4 */}
                <StaggerContainer delayChildren={0.3} staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredImages.slice(0, activeCategory === "Todos" ? 16 : undefined).map((img) => (
                        <StaggerItem key={img.id}>
                            <div
                                onClick={() => setSelectedImage(img.src)}
                                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200"
                            >
                                <Image
                                    src={img.src}
                                    alt={`Projeto de ${img.category}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-outfit font-bold tracking-wide border border-white/50 px-4 py-2 text-sm rounded-full backdrop-blur-sm">
                                        Ampliar
                                    </span>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-16 text-center">
                    <FadeIn direction="up">
                        <a
                            href="https://wa.me/5554991404852"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Quero um projeto assim
                        </a>
                    </FadeIn>
                </div>
            </Container>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    onClick={() => setSelectedImage(null)} // Click outside to close
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-[60]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="relative w-full h-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image area
                    >
                        <Image
                            src={selectedImage}
                            alt="Projeto Ampliado"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

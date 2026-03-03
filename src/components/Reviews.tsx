"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const reviewsData = [
    {
        id: 1,
        name: "Leonardo Campiol",
        date: "2 dias atrás",
        initials: "L",
        avatar: "/portfolio/Logo/logo.png", // Imagem genérica para exemplificar 
        text: "Ótima qualidade em materiais e acabamentos muito bons, projetos personalizados de acordo com o desejo do client...",
        imageUrl: null,
        bgColor: "bg-gray-500"
    },
    {
        id: 2,
        name: "Carina Raquelen T...",
        date: "2 meses atrás",
        initials: "C",
        avatar: null,
        text: "Indicação de olhos fechados para Salvador móveis. Minha experiência com eles foi muito boa. Desde o atendimento...",
        imageUrl: null,
        bgColor: "bg-green-600"
    },
    {
        id: 3,
        name: "Nicolas B. Buratti",
        date: "6 meses atrás",
        initials: "N",
        avatar: null,
        text: "Satisfeitos com ambos(produto e serviço)!",
        imageUrl: null,
        bgColor: "bg-[#5E35B1]" // Roxo como na imagem
    },
    {
        id: 4,
        name: "Fernando Costa",
        date: "6 meses atrás",
        initials: "F",
        avatar: null,
        text: "Estão de parabéns!! Projetos bem executados com qualidade e...",
        imageUrl: "/portfolio/Todos/1.JPG", // Imagem de placeholder
        bgColor: "bg-red-600"
    }
];

// Ícones SVG do Google
const GoogleG = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.31-1.03 2.41-2.16 3.14v2.6h3.49c2.04-1.88 3.21-4.65 3.21-7.75z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.49-2.6c-.99.66-2.26 1.05-3.79 1.05-2.91 0-5.38-1.97-6.26-4.61h-3.61v2.8C3.9 19.96 7.6 23 12 23z" fill="#34A853" />
        <path d="M5.74 14.18c-.23-.66-.36-1.37-.36-2.18s.13-1.52.36-2.18V7.02H2.13C1.4 8.48 1 10.18 1 12s.4 3.52 1.13 4.98l3.61-2.8z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.6 1 3.9 4.04 1.93 7.02l3.61 2.8C6.62 7.15 9.09 5.38 12 5.38z" fill="#EA4335" />
    </svg>
);

const VerifiedCheck = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 ml-1" fill="#1b74e4">
        <path d="M12 2l2.6 1.8 3.1-.9.9 3.1 3.2.7-1 3.1 2.1 2.5-2.1 2.5 1 3.1-3.2.7-.9 3.1-3.1-.9L12 22l-2.6-1.8-3.1.9-.9-3.1-3.2-.7 1-3.1-2.1-2.5 2.1-2.5-1-3.1 3.2-.7.9-3.1 3.1.9L12 2z" fill="#3b82f6" />
        <path d="M10.5 15.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#fff" />
    </svg>
);

const StarIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fbbc04">
        <path d="M12 17.27l5.18 3.73-1.64-6.81L21 9.24l-6.81-.61L12 2 9.81 8.63 3 9.24l5.46 4.73L6.82 21z" />
    </svg>
);

export function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    return (
        <section id="avaliacoes" className="py-24 bg-[#111111] text-white overflow-hidden">
            <Container>
                {/* Título */}
                <FadeIn direction="up">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold">
                            Aprovado por quem já transformou seu lar
                        </h2>
                    </div>
                </FadeIn>

                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 relative">
                    {/* Bloco Resumo da Esquerda */}
                    <FadeIn direction="right" delay={0.1}>
                        <div className="flex flex-col items-center justify-center shrink-0 w-64">
                            <h3 className="text-white font-bold text-lg mb-2">EXCELENTE</h3>
                            <div className="flex gap-1 mb-2">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <p className="text-gray-300 text-sm mb-2">
                                Com base em <strong className="text-white font-bold">12 avaliações</strong>
                            </p>
                            <div className="flex gap-1 items-center mt-2 group cursor-pointer">
                                {/* Letras com cores do Google */}
                                <span className="text-4xl font-bold font-sans tracking-tighter text-[#4285F4]">G</span>
                                <span className="text-4xl font-bold font-sans tracking-tighter text-[#EA4335]">o</span>
                                <span className="text-4xl font-bold font-sans tracking-tighter text-[#FBBC05]">o</span>
                                <span className="text-4xl font-bold font-sans tracking-tighter text-[#4285F4]">g</span>
                                <span className="text-4xl font-bold font-sans tracking-tighter text-[#34A853]">l</span>
                                <span className="text-4xl font-bold font-sans tracking-tighter text-[#EA4335]">e</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Lista Horizontal de Cards */}
                    <FadeIn direction="left" delay={0.2} className="w-full relative">
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            {reviewsData.map((review) => (
                                <div
                                    key={review.id}
                                    className="snap-start shrink-0 w-[300px] bg-[#1a1a1a] rounded-2xl border border-brand-primary p-6 flex flex-col justify-between"
                                >
                                    {/* Cabecalho Card */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            {review.avatar ? (
                                                <Image
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover w-10 h-10"
                                                />
                                            ) : (
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.bgColor}`}>
                                                    {review.initials}
                                                </div>
                                            )}
                                            <div className="flex flex-col">
                                                <span className="font-bold text-white text-md leading-tight">{review.name}</span>
                                                <span className="text-gray-400 text-sm mt-0.5">{review.date}</span>
                                            </div>
                                            <GoogleG />
                                        </div>
                                        <div className="flex items-center gap-1 mb-3">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <VerifiedCheck />
                                        </div>
                                        <div className="flex gap-3">
                                            <p className="text-white text-[15px] leading-relaxed line-clamp-4">
                                                {review.text}
                                            </p>
                                            {review.imageUrl && (
                                                <div className="shrink-0">
                                                    <Image
                                                        src={review.imageUrl}
                                                        alt="Review Image"
                                                        width={70}
                                                        height={70}
                                                        className="rounded-xl object-cover h-[70px]"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="flex justify-between items-end mt-4">
                                        <span className="text-gray-400 font-medium text-sm cursor-pointer hover:text-white transition-colors">
                                            Consulte Mais informações
                                        </span>
                                        <Quote className="w-8 h-8 text-[#cda25b] rotate-180 opacity-80" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botão de Avançar Slider Direita */}
                        <button
                            onClick={scrollRight}
                            className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1a1a1a] border border-brand-primary rounded-full hidden md:flex items-center justify-center text-white hover:bg-brand-primary/20 transition-all shadow-xl shadow-black"
                            aria-label="Avançar avaliações"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}

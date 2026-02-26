"use client";

import { Container } from "@/components/ui/container";
import { Shield, Box, Truck, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function Features() {
    const features = [
        {
            icon: <Shield className="w-10 h-10 text-brand-primary" />,
            title: "Garantia de 5 anos",
            description: "Nossos móveis sob medida são assegurados com garantia total para uma durabilidade que atravessa gerações.",
        },
        {
            icon: <Box className="w-10 h-10 text-brand-primary" />,
            title: "100% MDF",
            description: "Fabricação exclusiva com painéis MDF da mais alta qualidade do mercado visando máxima durabilidade e resistência.",
        },
        {
            icon: <Truck className="w-10 h-10 text-brand-primary" />,
            title: "Entrega Rápida",
            description: "Planejamento eficiente que garante a execução e entrega do seu projeto personalizado em 20 a 40 dias.",
        },
        {
            icon: <Wrench className="w-10 h-10 text-brand-primary" />,
            title: "Montagem Especializada",
            description: "Contamos com uma equipe própria de profissionais rigorosamente treinados na montagem impecável dos seus móveis.",
        },
    ];

    return (
        <section id="diferenciais" className="py-24 bg-gray-50/50">
            <Container>
                <FadeIn direction="up">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-brand-dark mb-4">
                            Por que escolher a Salvador Móveis?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Muito além de fabricar móveis, nosso compromisso é com a otimização inteligente do seu espaço e a concretização do seu sonho.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer delayChildren={0.2} staggerChildren={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <StaggerItem key={idx}>
                            <div className="bg-white h-full p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                                <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="font-outfit text-xl font-bold mb-3 text-brand-dark">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
}

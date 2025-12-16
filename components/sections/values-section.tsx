"use client";

import { Leaf, Calendar, Globe } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const stats = [
  { value: "100%", label: "Murni & Alami", icon: Leaf },
  { value: "2+", label: "Tahun Pengalaman", icon: Calendar },
  { value: "3+", label: "Mitra Lokal", icon: Globe },
];

export default function ValuesSection() {
  return (
    <div className="relative z-20 px-4 -mt-16 md:-mt-20 ">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-xl shadow-md overflow-hidden">
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary/20`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} animation="fadeInUp" delay={150 * index}>
                  <div
                    className="p-4 sm:p-5 flex flex-col items-center text-center gap-2"
                  >
                    <div className="rounded-full bg-primary/10 p-1.5 inline-flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <p className="text-2xl font-bold text-primary leading-tight">
                      {stat.value}
                    </p>

                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
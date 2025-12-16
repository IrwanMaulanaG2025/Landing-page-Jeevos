"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./scroll-reveal";

import allTestimonials from "@/lib/data/testimonials.json";

const CARDS_PER_PAGE = 3;

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(allTestimonials.length / CARDS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const startIndex = currentPage * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentTestimonials = allTestimonials.slice(startIndex, endIndex);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-balance">
              Apa Kata Mereka Tentang Jeevos
            </h2>
            <p className="text-gray-600 text-lg text-pretty max-w-3xl mx-auto">
              Dipercaya oleh pemilik bisnis kuliner, pegiat gaya hidup sehat, hingga keluarga di seluruh Indonesia.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              animation="fadeInUp"
              delay={index * 300}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-[320px] overflow-y-auto"
            >
              {/* Card Header */}
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.batch}</p>
                </div>
              </div>
              {/* Card Body */}
              <p className="text-gray-600 leading-relaxed flex-1">
                &quot;{testimonial.quote}&quot;
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation Controls */}
        <ScrollReveal animation="fadeInUp" delay={400}>
          <div className="flex items-center justify-center mt-12 space-x-6">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-emerald-600 text-white rounded-md flex items-center justify-center hover:bg-emerald-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Navigation Dots */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    currentPage === index
                      ? "bg-emerald-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-emerald-600 text-white rounded-md flex items-center justify-center hover:bg-emerald-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </ScrollReveal>

        <div className="mt-16 text-center">
          <a
            href="/testimonials"
            className="inline-block px-8 py-3 text-base font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-transform duration-200 hover:scale-105"
          >
            pelajari Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
}

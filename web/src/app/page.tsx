"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import { Agenda, Reviews } from "@/components/sections/Agenda";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Hero />
      <Reviews />
      <Services addToCart={addToCart} />
      <Agenda />
      <Gallery />
    </>
  );
}

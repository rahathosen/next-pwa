"use client";


import OffersCard from "@/components/core/OffersCard";
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Page = () => {
  // Carousel state for Featured Promotions
  const [currentSlide, setCurrentSlide] = useState(0);

  // Static data for demonstration
  const featuredPromotions = [
    {
      title: "Gold Exchange Bonus",
      description: "10% bonus on exchanges over 5000 BDT",
      image: "/retail_partner.png",
    },
    {
      title: "Low Fee Day",
      description: "Reduced transaction fees for today only!",
      image: "/travel_deals.jpg",
    },
    {
      title: "VIP Discount",
      description: "Exclusive discounts on high-value trades",
      image: "/dining_special.jpg",
    },
  ];

  const personalizedOffers = [
    {
      title: "Frequent Trader Bonus",
      description: "Get a 2% discount on transaction fees",
    },
    {
      title: "Loyalty Reward",
      description: "Exclusive rates for returning customers",
    },
    {
      title: "Referral Bonus",
      description: "Earn rewards for referring friends",
    },
  ];

  const externalPartnerOffers = [
    {
      title: "Retail Partner",
      discount: "15%",
      terms: "On purchases over 2000 BDT",
      image: "/retail_partner.png",
    },
    {
      title: "Dining Special",
      discount: "20%",
      terms: "At select restaurants",
      image: "/dining_special.jpg",
    },
    {
      title: "Travel Deals",
      discount: "10%",
      terms: "On flight bookings",
      image: "/travel_deals.jpg",
    },
  ];

  // Carousel controls
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % featuredPromotions.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) =>
        (prev - 1 + featuredPromotions.length) % featuredPromotions.length,
    );

  // Auto-play carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="container mx-auto p-6 dark:bg-neutral-900 dark:text-neutral-100">
      {/* Featured Promotions Carousel */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Featured Promotions</h2>
        <div className="relative h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-md dark:bg-neutral-800">
          <img
            src={featuredPromotions[currentSlide].image}
            alt={featuredPromotions[currentSlide].title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                {featuredPromotions[currentSlide].title}
              </h3>
              <p className="mt-2 text-sm text-white">
                {featuredPromotions[currentSlide].description}
              </p>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-30 px-4 py-2 text-white"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-30 px-4 py-2 text-white"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Personalized Offers */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Personalized Offers</h2>
        <div className="space-y-4">
          {personalizedOffers.map((offer, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-neutral-800"
            >
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* External Partner Offers */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">External Partner Offers</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {externalPartnerOffers.map((offer, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-neutral-800"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="mb-4 h-32 w-full rounded-lg object-cover"
              />
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm font-bold text-green-700">
                {offer.discount} off
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {offer.terms}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Offers card */}
  <OffersCard/>
    </div>
  );
};

export default Page;

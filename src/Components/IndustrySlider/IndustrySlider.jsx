// src/components/engagement/IndustrySlider.jsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import IndustryCard from "../Common/IndustryCard";

// icons (update paths to your existing assets)
import realEstate from "../../assets/realEstate.png";
import it from "../../assets/itIMg.png";
import manufacturing from "../../assets/manufacImg.png";
import franchising from "../../assets/franchiseImg.png";
import hospitality from "../../assets/hospitality.png";
import retail from "../../assets/retail.png";
import food from "../../assets/foodBev.png";
import marketing from "../../assets/marketing.png";

const items = [
  { title: "Real Estate", icon: realEstate },
  { title: "Information Technology", icon: it },
  { title: "Manufacturing", icon: manufacturing },
  { title: "Franchising", icon: franchising },
  { title: "Hospitality", icon: hospitality },
  { title: "Retail", icon: retail },
  { title: "Food & Beverages", icon: food },
  { title: "Marketing Agencies", icon: marketing },
];

const IndustrySlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Duplicate items to ensure smooth loop and 4-per-view fill
  const slides = items;

  return (
    <div className="industries-embla">
      <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous">
        ‹
      </button>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((s, i) => (
            <div className="embla__slide" key={`${s.title}-${i}`}>
              <IndustryCard icon={s.icon} title={s.title} alt={s.title} />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next">
        ›
      </button>

      <div className="embla__dots">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            className={`embla__dot ${i === selectedIndex ? "is-selected" : ""}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustrySlider;
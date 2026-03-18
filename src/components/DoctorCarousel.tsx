"use client";

import { useRef } from "react";

const doctors = [
  { id: 1, name: "Dr. Sarah Williams",  specialty: "Dermatologist",     credentials: "MD (Dermatology), Board Certified",  price: "$25 30 min call", rating: "4.8", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=231&fit=crop" },
  { id: 2, name: "Dr. James Carter",    specialty: "Cardiologist",       credentials: "MD (Cardiology), Board Certified",    price: "$30 30 min call", rating: "4.9", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=231&fit=crop" },
  { id: 3, name: "Dr. Emily Nguyen",    specialty: "Pediatrician",       credentials: "MD (Pediatrics), Board Certified",    price: "$20 30 min call", rating: "4.7", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=231&fit=crop" },
  { id: 4, name: "Dr. Mark Hassan",     specialty: "Neurologist",        credentials: "MD (Neurology), Board Certified",     price: "$35 30 min call", rating: "4.8", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=231&fit=crop" },
  { id: 5, name: "Dr. Priya Sharma",    specialty: "Gynecologist",       credentials: "MD (Gynecology), Board Certified",    price: "$28 30 min call", rating: "4.9", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=231&fit=crop" },
  { id: 6, name: "Dr. Ahmed Siddiqui", specialty: "Orthopedic Surgeon", credentials: "MD (Orthopedics), Board Certified",  price: "$40 30 min call", rating: "4.6", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=231&fit=crop" },
  { id: 7, name: "Dr. Lisa Chen",       specialty: "Psychiatrist",       credentials: "MD (Psychiatry), Board Certified",    price: "$30 30 min call", rating: "4.8", image: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=231&fit=crop" },
];

export default function DoctorReel() {
  const reelRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = reelRef.current!;
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.active) return;
    e.preventDefault();
    const el = reelRef.current!;
    el.scrollLeft = drag.current.scrollLeft - (e.pageX - el.offsetLeft - drag.current.startX);
  };

  const onMouseUp = () => {
    drag.current.active = false;
    if (reelRef.current) reelRef.current.style.cursor = "grab";
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 py-8">
      <div
        ref={reelRef}
        className="flex gap-7 overflow-x-scroll py-2 px-1 select-none"
        style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex-shrink-0 bg-white rounded-[13px] overflow-hidden"
            style={{ border: "4px solid rgba(49,65,88,0.2)", width: "392px", height: "402px" }}
          >
            <img src={doc.image} alt={doc.name} draggable={false} className="w-full object-cover" style={{ height: "231px" }} />
            <div className="flex justify-end items-start gap-[14px] pt-[14px]" style={{ width: "346px", margin: "0 auto" }}>
              <div className="flex flex-col gap-3" style={{ width: "266px" }}>
                <p className="font-semibold text-[#0F172A]" style={{ fontSize: "28px", lineHeight: "34px" }}>{doc.name}</p>
                <p className="font-medium text-[#0F172A]"   style={{ fontSize: "24px", lineHeight: "29px" }}>{doc.specialty}</p>
                <p className="text-[#5B697E]"               style={{ fontSize: "16px", lineHeight: "19px" }}>{doc.credentials}</p>
                <p className="font-bold text-[#0DA1E5]"     style={{ fontSize: "16px", lineHeight: "19px" }}>{doc.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="#EAF827">
                  <path d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z" />
                </svg>
                <span style={{ fontSize: "20px" }}>{doc.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
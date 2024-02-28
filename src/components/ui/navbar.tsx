"use client";

import { useState } from "react";

export default function Navbar() {
  const NavItems = [
    "Acceuil",
    "Adopter",
    "Recrutement",
    "Faire un don",
    "Signaler un animal",
    "À propos",
    "Nous contacter",
  ];

  const [active, setActive] = useState<number>(0);
  return (
    <nav className="flex justify-between px-5">
      <h2 className="cursor-pointer text-2xl font-bold tracking-widest text-secondary">
        RAHMA
      </h2>

      <div className="text-md">
        {NavItems.map((e: string, i: number) => (
          <a
            key={i}
            onClick={() => setActive(i)}
            className={
              active == i
                ? "mx-6 text-accent font-bold cursor-pointer"
                : "mx-6 hover:text-accent cursor-pointer"
            }
          >
            {e}
          </a>
        ))}
      </div>
    </nav>
  );
}

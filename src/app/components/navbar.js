
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./cartcontext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const links = [
    { href: "/feather-pop",   label: "Feather Pop"   },
    { href: "/gilled-popper", label: "Gilled Popper" },
    { href: "/topwalker",     label: "TopWalker"     },
    { href: "/knight-series", label: "Knight Series" },
    { href: "/about",         label: "About"         },
    { href: "/contact",       label: "Contact"       },
  ];

  return (
    <>
      <nav
        style={{
          background: "#241508",
          borderBottom: "2px solid #7A5020",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "4.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo / Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="Topwater Reaction Baits"
              width={52}
              height={52}
              priority
              style={{ height: "2.8rem", width: "auto" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "1rem",
                  color: "#D4A96A",
                  letterSpacing: "0.03em",
                }}
              >
                Topwater Reaction Baits
              </span>
              <span
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C07830",
                }}
              >
                Lafayette, Tennessee
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="hidden md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#D4A96A",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#C07830")}
                onMouseLeave={(e) => (e.target.style.color = "#D4A96A")}
              >
                {l.label}
              </Link>
            ))}

            {/* Cart */}
            <Link
              href="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#3D5230",
                color: "#F2E8D0",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.45rem 1rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#5A7040")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3D5230")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Cart
              {itemCount > 0 && (
                <span
                  style={{
                    background: "#C07830",
                    color: "#241508",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile: cart + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="flex md:hidden">
            <Link
              href="/cart"
              style={{ color: "#D4A96A", position: "relative", textDecoration: "none" }}
              aria-label="Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {itemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-6px",
                    background: "#C07830",
                    color: "#241508",
                    borderRadius: "50%",
                    width: "16px",
                    height: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", color: "#D4A96A", cursor: "pointer", padding: "4px" }}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "4.5rem",
            left: 0,
            right: 0,
            background: "#3A2010",
            borderBottom: "2px solid #7A5020",
            zIndex: 49,
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#D4A96A",
                  textDecoration: "none",
                  padding: "0.85rem 0",
                  borderBottom: "1px solid rgba(122,80,32,0.25)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

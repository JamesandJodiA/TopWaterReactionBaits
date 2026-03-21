
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A0D04",
        borderTop: "2px solid #7A5020",
        marginTop: "5rem",
      }}
    >
      {/* Lure banner strip */}
      <div
        style={{
          background: "#3A2010",
          borderBottom: "1px solid rgba(122,80,32,0.3)",
          overflow: "hidden",
          height: "180px",
          position: "relative",
        }}
      >
        <img
          src="/topwalkerhomepage.jpg"
          alt="Topwater Reaction Baits handmade lure"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C07830",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ display: "inline-block", width: "22px", height: "2px", background: "#C07830" }} />
            Handmade in Tennessee
            <span style={{ display: "inline-block", width: "22px", height: "2px", background: "#C07830" }} />
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              fontStyle: "italic",
              color: "#F2E8D0",
              textAlign: "center",
            }}
          >
            Built for the Strike.
          </p>
        </div>
      </div>

      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 2rem 2rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "2.5rem",
        }}
        className="grid-cols-1 md:grid-cols-footer"
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <Image
              src="/logo.png"
              alt="Topwater Reaction Baits"
              width={48}
              height={48}
              style={{ height: "2.5rem", width: "auto" }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "1.05rem",
                color: "#D4A96A",
              }}
            >
              Topwater Reaction Baits
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(212,169,106,0.6)",
              lineHeight: 1.75,
              maxWidth: "280px",
            }}
          >
            Small-batch topwater poppers painted, assembled, and tuned in Lafayette, Tennessee. Every lure leaves our shop ready to fish.
          </p>
          <p
            style={{
              marginTop: "1rem",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#C07830",
            }}
          >
            Lafayette, TN — Est. by anglers, for anglers
          </p>
        </div>

        {/* Shop links */}
        <div>
          <h3
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C07830",
              marginBottom: "1.1rem",
            }}
          >
            Shop
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {[
              { href: "/feather-pop",   label: "Feather Pop"   },
              { href: "/gilled-popper", label: "Gilled Popper" },
              { href: "/topwalker",     label: "TopWalker"     },
              { href: "/knight-series", label: "Knight Series" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(212,169,106,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#D4A96A")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(212,169,106,0.6)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info links */}
        <div>
          <h3
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C07830",
              marginBottom: "1.1rem",
            }}
          >
            Info
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {[
              { href: "/about",   label: "About Us" },
              { href: "/contact", label: "Contact"  },
              { href: "/cart",    label: "Cart"     },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(212,169,106,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#D4A96A")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(212,169,106,0.6)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(122,80,32,0.2)",
          padding: "1.2rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.7rem",
            color: "rgba(212,169,106,0.35)",
          }}
        >
          &copy; {new Date().getFullYear()} Topwater Reaction Baits. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.7rem",
            color: "rgba(212,169,106,0.35)",
          }}
        >
          Proudly made in Lafayette, TN
        </span>
      </div>
    </footer>
  );
}

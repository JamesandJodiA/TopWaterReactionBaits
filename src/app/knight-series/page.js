
"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../components/cartcontext";
import { priceIds } from "../lib/priceIds";

const MODE = process.env.NEXT_PUBLIC_STRIPE_MODE === "live" ? "live" : "test";

const PAIRS = [
  {
    model: "Feather Pop",
    white: {
      id: "featherpop-whiteknight",
      name: "White Knight Feather Pop",
      price: 15.78,
      image: "/featherWhiteKnight.jpg",
    },
    black: {
      id: "featherpop-blackknight",
      name: "Black Knight Feather Pop",
      price: 15.78,
      image: "/featherBlackKnight.jpg",
    },
  },
  {
    model: "Gilled Popper",
    white: {
      id: "gilledpopper-whiteknight",
      name: "White Knight Gilled Popper",
      price: 15.78,
      image: "/gilledWhiteKnight.jpg",
    },
    black: {
      id: "gilledpopper-blackknight",
      name: "Black Knight Gilled Popper",
      price: 15.78,
      image: "/gilledBlackKnight.jpg",
    },
  },
  {
    model: "TopWalker",
    white: {
      id: "topwalker-whiteknight",
      name: "White Knight TopWalker",
      price: 15.78,
      image: "/topwalkerWhiteKnight.jpg",
    },
    black: {
      id: "topwalker-blackknight",
      name: "Black Knight TopWalker",
      price: 15.78,
      image: "/topwalkerBlackKnight.jpg",
    },
  },
];

function WhiteCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const priceId = priceIds[item.id]?.[MODE];

  const handleAdd = () => {
    addToCart({ id: item.id, name: item.name, price: item.price, quantity, image: item.image, priceId });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      style={{
        background: "#BCA882",
        border: "1px solid rgba(240,237,232,0.4)",
        borderRadius: "4px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ background: "#E8E4DC" }}>
        <Image
          src={item.image}
          alt={item.name}
          width={1670}
          height={600}
          style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
        />
      </div>
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#7A5020",
        }}>
          White Knight
        </p>
        <h2 style={{
          fontFamily: "'Bitter', serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#241508",
        }}>
          {item.name}
        </h2>
        <p style={{
          fontFamily: "'Bitter', serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#3A2010",
        }}>
          ${item.price.toFixed(2)}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(58,32,16,0.55)",
            }}>
              Qty
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              style={{
                background: "#D4C4A8",
                border: "1px solid rgba(122,80,32,0.4)",
                color: "#241508",
                width: "54px",
                textAlign: "center",
                padding: "5px 4px",
                fontSize: "0.875rem",
                borderRadius: "2px",
              }}
            />
          </div>
          <button
            onClick={handleAdd}
            style={{
              flex: 1,
              background: added ? "#5A7040" : "#3D5230",
              color: "#F2E8D0",
              border: "none",
              padding: "0.6rem",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderRadius: "2px",
              cursor: "pointer",
              height: "36px",
              transition: "background 0.2s",
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

function BlackCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const priceId = priceIds[item.id]?.[MODE];

  const handleAdd = () => {
    addToCart({ id: item.id, name: item.name, price: item.price, quantity, image: item.image, priceId });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      style={{
        background: "#1A1008",
        border: "1px solid rgba(122,80,32,0.3)",
        borderRadius: "4px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "#C07830";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(122,80,32,0.3)";
      }}
    >
      <div style={{ background: "#120A04" }}>
        <Image
          src={item.image}
          alt={item.name}
          width={1670}
          height={600}
          style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
        />
      </div>
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#C07830",
        }}>
          Black Knight
        </p>
        <h2 style={{
          fontFamily: "'Bitter', serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#FAF6EE",
        }}>
          {item.name}
        </h2>
        <p style={{
          fontFamily: "'Bitter', serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#D4A96A",
        }}>
          ${item.price.toFixed(2)}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(212,169,106,0.55)",
            }}>
              Qty
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              style={{
                background: "#241508",
                border: "1px solid rgba(122,80,32,0.45)",
                color: "#F2E8D0",
                width: "54px",
                textAlign: "center",
                padding: "5px 4px",
                fontSize: "0.875rem",
                borderRadius: "2px",
              }}
            />
          </div>
          <button
            onClick={handleAdd}
            style={{
              flex: 1,
              background: added ? "#3D5230" : "#C07830",
              color: added ? "#F2E8D0" : "#241508",
              border: "none",
              padding: "0.6rem",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderRadius: "2px",
              cursor: "pointer",
              height: "36px",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function KnightSeriesPage() {
  return (
    <main style={{ background: "#241508", minHeight: "100vh", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Limited Edition</p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "#FAF6EE",
          marginBottom: "0.5rem",
        }}>
          Knight Series
        </h1>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "1rem",
          color: "rgba(242,232,208,0.6)",
          lineHeight: 1.7,
          maxWidth: "520px",
          marginBottom: "0.5rem",
        }}>
        Fishing&apos;s not luck — it&apos;s strategy. Move smart. Strike fast.
        </p>
        <hr style={{ border: "none", borderTop: "1px solid rgba(122,80,32,0.3)", margin: "1.5rem 0 2.5rem" }} />

        {/* Pairs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {PAIRS.map((pair) => (
            <section key={pair.model}>
              <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{pair.model}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WhiteCard item={pair.white} />
                <BlackCard item={pair.black} />
              </div>
            </section>
          ))}
        </div>

        {/* About strip */}
        <div style={{
          marginTop: "4rem",
          background: "#3A2010",
          border: "1px solid rgba(122,80,32,0.3)",
          borderRadius: "4px",
          padding: "2rem 2.5rem",
        }}>
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>About the Knight Series</p>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.4rem",
            color: "#FAF6EE",
            marginBottom: "0.75rem",
          }}>
            Hand-finished. Small-batch.{" "}
            <em style={{ color: "#D4A96A" }}>Chess-inspired.</em>
          </h3>
          <p style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(242,232,208,0.7)",
            lineHeight: 1.8,
            maxWidth: "600px",
          }}>
            White and Black finishes nod to the chessboard — tuned for long casts
            and explosive strikes. Available in Feather Pop, Gilled Popper, and TopWalker.
          </p>
        </div>

      </div>
    </main>
  );
}

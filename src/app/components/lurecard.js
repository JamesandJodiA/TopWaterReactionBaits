
"use client";
import { useState } from "react";
import { useCart } from "./cartcontext";

export default function LureCard({ id, name, price, image, priceId, variant }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, price, quantity, image, priceId });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      style={{
        background: "#3A2010",
        border: "1px solid rgba(122,80,32,0.3)",
        borderRadius: "4px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#C07830";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(122,80,32,0.3)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          background: "#f0ede8",
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
            transition: "transform 0.35s",
            background: "#c8a97a",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Body */}
      <div
        style={{
          padding: "1rem 1.1rem 1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flex: 1,
        }}
      >
        {/* Name */}
        <div>
          <p
            style={{
              fontFamily: "'Bitter', serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#F2E8D0",
              lineHeight: 1.2,
              marginBottom: "2px",
            }}
          >
            {name}
          </p>
          {variant && (
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C07830",
              }}
            >
              {variant}
            </p>
          )}
        </div>

        {/* Price */}
        <p
          style={{
            fontFamily: "'Bitter', serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#D4A96A",
          }}
        >
          ${price.toFixed(2)}
        </p>

        {/* Qty + Add to cart */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(212,169,106,0.55)",
              }}
            >
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
                fontFamily: "'Source Sans 3', sans-serif",
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
              padding: "0.6rem 0.5rem",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              alignSelf: "flex-end",
              height: "36px",
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

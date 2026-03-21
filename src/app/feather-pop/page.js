"use client";
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";
import { priceIds } from "../lib/priceIds";

export default function FeatherPopPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "bluegill",
            name: "Blue with Bluegill Skirt",
            price: 15.78,
            image: "/featherpopblue1.jpg",
            priceId: priceIds["bluegill"]
        },
        {
            id: "greenchartreuse",
            name: "Green with Chartreuse Shad Skirt",
            price: 15.78,
            image: "/featherpopgrn1.jpg",
            priceId: priceIds["greenchartreuse"]
        },
        {
            id: "pumpkinseed",
            name: "Purple with Pumpkin Seed Skirt",
            price: 15.78,
            image: "/featherpoppurple1.jpg",
            priceId: priceIds["pumpkinseed"]
        },
        {
            id: "gizzardshad",
            name: "Red with Gizzard Shad Skirt",
            price: 15.78,
            image: "/featherpopred1.jpg",
            priceId: priceIds["gizzardshad"]
        },
        {
            id: "sexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 15.78,
            image: "/featherpopyellow1.jpg",
            priceId: priceIds["sexyshad"]
        },
    ]

    return (
        <main style={{ background: "#241508", minHeight: "100vh", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>{"2½\" · ⅓ oz · Smooth Body"}</p>
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: "#FAF6EE",
                    marginBottom: "0.5rem",
                }}>
                    Feather Pop
                </h1>
                <hr style={{ border: "none", borderTop: "1px solid rgba(122,80,32,0.3)", margin: "1.5rem 0 2.5rem" }} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lures.map((lure) => (
                        <LureCard key={lure.id} {...lure} />
                    ))}
                </div>

            </div>
        </main>
    );
}
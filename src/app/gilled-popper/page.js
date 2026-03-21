"use client"
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";
import { priceIds } from "../lib/priceIds";

export default function GilledPopperPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "gilled-blackwalleye",
            name: "Black with Walleye Skirt",
            price: 15.78,
            image: "/gilledpopperblack1.jpg",
            priceId: priceIds["gilled-blackwalleye"]
        },
        {
            id: "gilled-bluecitrus",
            name: "Blue with Citrus Shad Skirt",
            price: 15.78,
            image: "/gilledpopperblueblack1.jpg",
            priceId: priceIds["gilled-bluecitrus"]
        },
        {
            id: "gilled-greenbabybass",
            name: "Green with Baby Bass Skirt",
            price: 15.78,
            image: "/gilledpoppergreenblack1.jpg",
            priceId: priceIds["gilled-greenbabybass"]
        },
        {
            id: "gilled-orangebluegill",
            name: "Orange with Bluegill Skirt",
            price: 15.78,
            image: "/gilledpopperorangeblack1.jpg",
            priceId: priceIds["gilled-orangebluegill"]
        },
        {
            id: "gilled-purplepumpkin",
            name: "Purple with Pumpkin Seed Skirt",
            price: 15.78,
            image: "/gilledpopperpurpleblack1.jpg",
            priceId: priceIds["gilled-purplepumpkin"]
        },
        {
            id: "gilled-redgizzard",
            name: "Red with Gizzard Shad Skirt",
            price: 15.78,
            image: "/gilledpopperredblack1.jpg",
            priceId: priceIds["gilled-redgizzard"]
        },
        {
            id: "gilled-yellowsexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 15.78,
            image: "/gilledpopperyellowblack1.jpg",
            priceId: priceIds["gilled-yellowsexyshad"]
        },

        
    ]
    return (
        <main style={{ background: "#241508", minHeight: "100vh", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>{"2½\" · ½ oz · Gilled Body"}</p>
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: "#FAF6EE",
                    marginBottom: "0.5rem",
                }}>
                    Gilled Popper
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


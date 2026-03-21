"use client";
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";
import { priceIds } from "../lib/priceIds";

export default function TopWalkerPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "topwalker-blackcrappie",
            name: "Black with Crappie Skirt",
            price: 15.78,
            image: "/topwalkerblack1.jpg",
            priceId: priceIds["topwalker-blackcrappie"]
        },
        {
            id: "topwalker-bluechartreuse",
            name: "Blue with Chartreuse Shad Skirt",
            price: 15.78,
            image: "/topwalkerblue1.jpg",
            priceId: priceIds["topwalker-bluechartreuse"]
        },
        {
            id: "topwalker-graytennessee",
            name: "Gray with Tennessee Shad Skirt",
            price: 15.78,
            image: "/topwalkergray1.jpg",
            priceId: priceIds["topwalker-graytennessee"]
        },
        {
            id: "topwalker-ivorywalleye",
            name: "Ivory with Walleye Skirt",
            price: 15.78,
            image: "/topwalkerivoryblack1.jpg",
            priceId: priceIds["topwalker-ivorywalleye"]
        },
        {
            id: "topwalker-orangebluegill",
            name: "Orange with Bluegill Skirt",
            price: 15.78,
            image: "/topwalkerorange1.jpg",
            priceId: priceIds["topwalker-orangebluegill"]
        },
        {
            id: "topwalker-orangecitrus",
            name: "Orange with Citrus Shad Skirt",
            price: 15.78,
            image: "/topwalkerorangeblack1.jpg",
            priceId: priceIds["topwalker-orangecitrus"]
        },
        {
            id: "topwalker-purplepumpkin",
            name: "Purple with Pumpkin Seed Skirt",
            price: 15.78,
            image: "/topwalkerpurple1.jpg",
            priceId: priceIds["topwalker-purplepumpkin"]
        },
        {
            id: "topwalker-redgizzard",
            name: "Red with Gizzard Shad Skirt",
            price: 15.78,
            image: "/topwalkerred1.jpg",
            priceId: priceIds["topwalker-redgizzard"]
        },
        {
            id: "topwalker-redblackgizzard",
            name: "Red/Black with Gizzard Shad Skirt",
            price: 15.78,
            image: "/topwalkerredblack1.jpg",
            priceId: priceIds["topwalker-redblackgizzard"]
        },
        {
            id: "topwalker-whitegoldshiner",
            name: "White with Golden Shiner Skirt",
            price: 15.78,
            image: "/topwalkerwhite1.jpg",
            priceId: priceIds["topwalker-whitegoldshiner"]
        },
        {
            id: "topwalker-yellowsexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 15.78,
            image: "/topwalkeryellow1.jpg",
            priceId: priceIds["topwalker-yellowsexyshad"]
        },
        {
            id: "topwalker-yellowperch",
            name: "Yellow with Yellow Perch Skirt",
            price: 15.78,
            image: "/topwalkeryellowblack1.jpg",
            priceId: priceIds["topwalker-yellowperch"]
        },
        {
            id: "topwalker-browntrout",
            name: "Yellow/Brown with Rainbow Trout Skirt",
            price: 15.78,
            image: "/topwalkeryellowbrown1.jpg",
            priceId: priceIds["topwalker-browntrout"]
        },
        {
            id: "topwalker-candyshad",
            name: "Yellow/Green with Candy Shad Skirt",
            price: 15.78,
            image: "/topwalkeryellowgreen1.jpg",
            priceId: priceIds["topwalker-candyshad"]
        },
        
    ]
    return(
        <main style={{ background: "#241508", minHeight: "100vh", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>{"3½\" · ⅝ oz · Streamline Body with gills and scales"}</p>
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
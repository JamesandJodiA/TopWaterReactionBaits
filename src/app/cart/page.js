"use client";
import { useCart } from "../components/cartcontext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


export default function CartPage() {
    const {cartItems, removeFromCart, clearCart, updateQuantity} = useCart();
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <p>Your cart is currently empty.</p>
            </div>
        );
    }

    return (
    <div className="p-8 text-center text-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <ul className="space-y-4 max-w-3xl mx-auto text-left">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="bg-black rounded-lg p-4 flex items-center gap-4"
          >
            <img src={item.image} alt={item.name} className="w-28 h-20 object-contain rounded" style={{background: "#C8A97A"}} />
            <div className="flex-1">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm opacity-80">${item.price.toFixed(2)} each</div>
              <div className="mt-2 flex items-center gap-2">
                <button
                  className="px-2 py-1 rounded bg-gray-800"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >−</button>

                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value) || 1)}
                  className="w-16 bg-gray-900 rounded px-2 py-1 text-center"
                />

                <button
                  className="px-2 py-1 rounded bg-gray-800"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="mt-2 text-red-400 hover:text-red-300"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-xl font-semibold">
        Total: ${cartTotal.toFixed(2)}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={clearCart}
          className="bg-red-900 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
        <button
            onClick={async () => {
                const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: cartItems }),
                });
                const data = await res.json();
                if (data?.url) {
                window.location.href = data.url;
                } else {
                alert("Could not start checkout.");
                }
            }}
            className="bg-odgreen hover:bg-green-700 text-white px-4 py-2 rounded"
        >
            Checkout
        </button>     
      </div>
    </div>
  );
}

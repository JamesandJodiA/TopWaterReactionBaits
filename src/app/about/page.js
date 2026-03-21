

// export const metadata = {
//   title: "About | Topwater Reaction Baits",
//   description:
//     "Handmade topwater lures painted, assembled, and packaged in Lafayette, Tennessee.",
// };

// export default function AboutPage() {
//   return (
//     <main className="bg-black text-zinc-100">
//       {/* Accent stripe to match site vibe */}
//       <div className="h-1 w-full bg-odgreen/70" />

//       <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
//         <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
//           About <span className="text-odgreen">Topwater Reaction Baits</span>
//         </h1>

//         <p className="mt-4 text-zinc-300 leading-relaxed">
//           We paint, assemble, and package our unique poppers in our shop in
//           <span className="font-medium text-white"> Lafayette, Tennessee</span>.
//           As the name implies, <span className="font-semibold">TOP WATER REACTION BAITS</span> might
//           just be the answer to maximize your topwater fishing experience.
//         </p>

//         <p className="mt-4 text-zinc-300 leading-relaxed">
//           After fishing with these lures for many years, topwater enthusiasts find fish are easily
//           attracted to these simple baits. You should be able to choose one of these unique lures to
//           match your fishing conditions.
//         </p>

//         {/* Content grid */}
//         <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
//           {/* Photo / card — swap the bg for a real image when ready */}
//           <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[url('/smallbass.jpg')] bg-cover bg-center">
//             {/* Size spacer so the card has a fixed aspect ratio */}
//             <div className="aspect-[4/3] w-full" />

//             {/* Bottom gradient overlay */}
//             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3
//                             bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
//             <div className="absolute inset-x-0 bottom-0 p-5">
//               <h3 className="text-lg font-medium text-white">Handmade. Tuned. Ready.</h3>
//               <p className="mt-2 text-sm text-zinc-300">
//                 Small-batch poppers crafted for serious topwater strikes—painted, cleared,
//                 and assembled in Tennessee.
//               </p>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold">Why anglers choose us</h2>
//             <ul className="mt-4 space-y-3 text-zinc-300">
//               <li className="flex gap-3">
//                 <span className="mt-1 h-2 w-2 rounded-full bg-odgreen" />
//                 Consistent action and castability—tested on local rivers & lakes.
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-1 h-2 w-2 rounded-full bg-odgreen" />
//                 Durable finishes with crisp, high-contrast patterns.
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-1 h-2 w-2 rounded-full bg-odgreen" />
//                 Built by anglers—each lure is checked before it ships.
//               </li>
//             </ul>

//             {/* Info tiles */}
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
//                 <div className="text-xs uppercase text-zinc-400">Made in</div>
//                 <div className="text-sm font-medium">Lafayette, TN</div>
//               </div>
//               <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
//                 <div className="text-xs uppercase text-zinc-400">Contact</div>
//                 <div className="text-sm font-medium break-words whitespace-normal">topwaterreactionbaits.com</div>
//               </div>
//             </div>

//             {/* CTA back to products */}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

export default function AboutPage() {
  return (
    <main style={{ background: "#241508", color: "#F2E8D0" }}>

      {/* ── HEADER ── */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem 3rem",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Our Story</p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#FAF6EE",
            lineHeight: 1.1,
            maxWidth: "680px",
          }}
        >
          About{" "}
          <span style={{ color: "#D4A96A", fontStyle: "italic" }}>
            Topwater Reaction Baits
          </span>
        </h1>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section
        style={{
          background: "#3A2010",
          borderTop: "1px solid rgba(122,80,32,0.3)",
          borderBottom: "1px solid rgba(122,80,32,0.3)",
          padding: "4rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Photo */}
          <div
            style={{
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(122,80,32,0.3)",
            }}
          >
            <img
              src="/smallbass.jpg"
              alt="Bass caught on a Topwater Reaction Bait"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                aspectRatio: "4/3",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,8,4,0.75) 0%, transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Bitter', serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#FAF6EE",
                  marginBottom: "4px",
                }}
              >
                Handmade. Tuned. Ready.
              </h3>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(242,232,208,0.7)",
                  lineHeight: 1.55,
                }}
              >
                Small-batch poppers crafted for serious topwater strikes — painted,
                cleared, and assembled in Tennessee.
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1rem",
                color: "rgba(242,232,208,0.8)",
                lineHeight: 1.85,
                marginBottom: "1.25rem",
              }}
            >
              We paint, assemble, and package our unique poppers in our shop in{" "}
              <strong style={{ color: "#FAF6EE" }}>Lafayette, Tennessee</strong>.
              As the name implies,{" "}
              <strong style={{ color: "#FAF6EE" }}>TOP WATER REACTION BAITS</strong>{" "}
              might just be the answer to maximize your topwater fishing experience.
            </p>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1rem",
                color: "rgba(242,232,208,0.8)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              After fishing with these lures for many years, topwater enthusiasts
              find fish are easily attracted to these simple baits. You should be
              able to choose one of these unique lures to match your fishing conditions.
            </p>

            {/* Why anglers choose us */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#FAF6EE",
                marginBottom: "1rem",
              }}
            >
              Why anglers choose us
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Consistent action and castability — tested on local rivers and lakes.",
                "Durable finishes with crisp, high-contrast patterns.",
                "Built by anglers — each lure is inspected before it ships.",
                "Over 25 color patterns across four series.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(242,232,208,0.75)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      marginTop: "7px",
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#C07830",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stat tiles */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {[
                { label: "Made in",  value: "Lafayette, TN" },
                { label: "Series",   value: "4 Lure Lines"  },
                { label: "Colors",   value: "25+ Patterns"  },
                { label: "Contact",  value: "topwaterreactionbaits.com" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#241508",
                    border: "1px solid rgba(122,80,32,0.25)",
                    borderRadius: "4px",
                    padding: "0.9rem 1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#C07830",
                      marginBottom: "4px",
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Bitter', serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#FAF6EE",
                      wordBreak: "break-word",
                    }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATCH PHOTOS ── */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
        <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>In Action</p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.6rem",
            color: "#FAF6EE",
            marginBottom: "1.75rem",
          }}
        >
          Proof on the Water
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {["/IMG_0936.jpg", "/IMG_0937.jpg", "/IMG_0938.jpg", "/IMG_0940.jpg"].map((src, i) => (
            <div
              key={i}
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                aspectRatio: "3/4",
                border: "1px solid rgba(122,80,32,0.25)",
              }}
            >
              <img
                src={src}
                alt="Bass caught on a Topwater Reaction Bait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  transition: "transform 0.4s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

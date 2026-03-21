
"use client";

export default function Home() {
  const series = [
    {
      name: "Feather Pop",
      size: "2½\"",
      image: "/featherpopgrn1.jpg",
      link: "/feather-pop",
      desc: "Cupped mouth, dressed tail. Splash, gurgle, strike.",
    },
    {
      name: "Gilled Popper",
      size: "2½\"",
      image: "/gilledpopperyellowblack1.jpg",
      link: "/gilled-popper",
      desc: "Precision gill detail that mimics baitfish in distress.",
    },
    {
      name: "TopWalker",
      size: "3½\"",
      image: "/topwalkerhomepage.jpg",
      link: "/topwalker",
      desc: "Walk-the-dog action with lifelike finishes.",
    },
  ];

  const proof = [
    { image: "/hero.jpg",     caption: "Feather Pop — Blue Chartreuse" },
    { image: "/IMG_0937.jpg", caption: "Feather Pop — Blue Chartreuse" },
    { image: "/smallbass.jpg",caption: "TopWalker — White Gold Shiner" },
    { image: "/IMG_0940.jpg", caption: "Feather Pop — Black" },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        {/* Gradient overlay — dark at bottom, lighter at top */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(26,8,4,0.97) 0%, rgba(26,8,4,0.6) 45%, rgba(26,8,4,0.25) 100%)",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "0 2rem 4rem",
          }}
        >
          <p
            className="eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            Handmade in Lafayette, Tennessee
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "#FAF6EE",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
              maxWidth: "720px",
            }}
          >
            Built for the{" "}
            <em style={{ color: "#D4A96A", fontStyle: "italic" }}>Strike.</em>
          </h1>

          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(242,232,208,0.75)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "480px",
            }}
          >
            Small-batch topwater poppers painted, assembled, and tuned right here
            in Lafayette, Tennessee. Every lure leaves our shop ready to fish.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="/topwalker" className="btn-primary">Shop Lures</a>
            <a href="/about" className="btn-outline">Our Story</a>
          </div>
        </div>
      </section>

      {/* ── SERIES GRID ── */}
      <section
        style={{
          background: "#241508",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "2.5rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid rgba(122,80,32,0.3)",
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Our Lineup</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#FAF6EE",
                  lineHeight: 1.1,
                }}
              >
                Find Your Bait
              </h2>
            </div>
            <a
              href="/knight-series"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C07830",
                textDecoration: "none",
              }}
            >
              Knight Series →
            </a>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {series.map((s) => (
              <a
                key={s.name}
                href={s.link}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#3A2010",
                    border: "1px solid rgba(122,80,32,0.3)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C07830";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(122,80,32,0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Lure image — landscape crop */}
                  <div
                    style={{
                      background: "#e8e4dc",
                      overflow: "hidden",
                      height: "160px",
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                        transition: "transform 0.4s",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>

                  <div style={{ padding: "1.25rem 1.25rem 1.4rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.5rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Bitter', serif",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "#FAF6EE",
                        }}
                      >
                        {s.name}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "#C07830",
                          background: "rgba(192,120,48,0.12)",
                          padding: "2px 7px",
                          borderRadius: "2px",
                        }}
                      >
                        {s.size}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(212,169,106,0.65)",
                        lineHeight: 1.55,
                        marginBottom: "1rem",
                      }}
                    >
                      {s.desc}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#C07830",
                      }}
                    >
                      Shop Now →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP — real catch photos ── */}
      <section
        style={{
          background: "#3A2010",
          borderTop: "1px solid rgba(122,80,32,0.3)",
          borderBottom: "1px solid rgba(122,80,32,0.3)",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="eyebrow" style={{ justifyContent: "center", marginBottom: "0.6rem" }}>
              Proof in the Bite
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.8rem",
                color: "#FAF6EE",
              }}
            >
              They Work.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {proof.map((p, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  border: "1px solid rgba(122,80,32,0.25)",
                }}
              >
                <img
                  src={p.image}
                  alt={p.caption}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(26,8,4,0.8) 0%, transparent 50%)",
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "12px",
                    right: "12px",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#D4A96A",
                  }}
                >
                  {p.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MADE IN TN CALLOUT ── */}
      <section
        style={{
          background: "#241508",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            Lafayette, Tennessee
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#D4A96A",
              lineHeight: 1.3,
              marginBottom: "1.25rem",
            }}
          >
            "After fishing with these lures for many years, topwater enthusiasts
            find fish are easily attracted to these simple baits."
          </h2>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(242,232,208,0.6)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            We paint, assemble, and package every lure in our shop. Choose from
            over 25 color patterns across four series — there's a bait for every
            condition on the water.
          </p>
          <a href="/about" className="btn-outline">
            Learn More About Us
          </a>
        </div>
      </section>
    </>
  );
}

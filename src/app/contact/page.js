"use client";

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you for your submission.");
        e.target.reset();
      } else {
        alert(`Error: ${result.message}`);
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occured.");
    }
  };

  return (
    <div style={{ background: "#241508", minHeight: "80vh", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "580px", margin: "0 auto" }}>

        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Get in Touch</p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: "2.5rem",
          color: "#FAF6EE",
          marginBottom: "2.5rem",
        }}>
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {[
            { label: "Full Name", id: "name",    type: "text",  name: "name"    },
            { label: "Email",     id: "email",   type: "email", name: "email"   },
            { label: "Subject",   id: "subject", type: "text",  name: "subject" },
          ].map((f) => (
            <div key={f.id}>
              <label style={{
                display: "block",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C07830",
                marginBottom: "0.4rem",
              }}>
                {f.label}
              </label>
              <input
                type={f.type}
                id={f.id}
                name={f.name}
                required
                style={{
                  width: "100%",
                  padding: "0.65rem 0.85rem",
                  background: "#3A2010",
                  border: "1px solid rgba(122,80,32,0.45)",
                  borderRadius: "2px",
                  color: "#F2E8D0",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              />
            </div>
          ))}

          <div>
            <label style={{
              display: "block",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C07830",
              marginBottom: "0.4rem",
            }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                background: "#3A2010",
                border: "1px solid rgba(122,80,32,0.45)",
                borderRadius: "2px",
                color: "#F2E8D0",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.95rem",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <input type="text" name="botField" style={{ display: "none" }} autoComplete="off" />

          <button type="submit" className="btn-primary" style={{ width: "100%", padding: "0.85rem", fontSize: "0.8rem" }}>
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}
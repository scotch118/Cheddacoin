import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <img src="/cheddacoin-logo.png" width="100" alt="logo" />
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        In Cheese We Trust 🧀
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Willkommen bei <strong>CheddaCoin ($CHEDDA)</strong> – der stärkste Käse im Kryptomarkt.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <Button>Buy $CHEDDA</Button>
        <Button variant="outline" style={{ marginLeft: "1rem" }}>
          Whitepaper
        </Button>
      </div>

      <section style={{ marginTop: "3rem" }}>
        <h2>Meme-powered • Fair Launch • Community-first</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🚀 0% Tax – 100% Spaß</li>
          <li>🔒 LP burned – Contract renounced</li>
          <li>🎮 Game & NFT Drops incoming</li>
        </ul>
      </section>
    </main>
  );
}

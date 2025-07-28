import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#FFFDEB' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <img src="/cheddacoin-logo.png" width={120} alt="CheddaCoin Logo" />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#D97706' }}>In Cheese We Trust 🧀</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Willkommen bei CheddaCoin ($CHEDDA) – der stärksten Käse-Währung des Krypto-Universums.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Button>Buy $CHEDDA</Button>
          <Button variant="outline" style={{ marginLeft: '1rem' }}>Read Whitepaper</Button>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card>
          <CardContent>
            <h2>Meme Power</h2>
            <p>Unendlich meme-bar, 100% Community-driven. Käse, Ratten und Reichtum.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h

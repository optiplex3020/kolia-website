"use client";

import { useState } from "react";

export default function EntrerPage() {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-xl flex-col justify-center gap-10 px-6 py-24">
      <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
        Entrer
      </p>

      <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-[family-name:var(--font-display)] leading-[var(--leading-tight)]">
        Invitation requise.
      </h1>

      <p className="text-sm text-[var(--color-text-secondary)]">
        Chaque code ouvre une seule fois la porte. Lorsque la fenêtre se referme, le vestibule retourne au silence.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label
          htmlFor="code"
          className="block text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]"
        >
          Code Kolia
        </label>
        <input
          id="code"
          value={code}
          onChange={(event) => setCode(event.target.value.toUpperCase())}
          placeholder="XXXX-XXXX"
          className="w-full rounded-full border border-[var(--color-separator)] bg-transparent px-6 py-3 text-center text-sm uppercase tracking-[0.5em] text-[var(--color-text-primary)] outline-none transition-colors duration-[var(--transition-base)] focus:border-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
        />
        <button
          type="submit"
          className="w-full rounded-full border border-[var(--color-text-primary)] px-8 py-3 text-xs uppercase tracking-[0.4em] text-[var(--color-text-primary)] transition-colors duration-[var(--transition-base)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-ivoire)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
        >
          Soumettre
        </button>
      </form>

      <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
        <p>Fenêtre actuelle : mardi 14h → épuisement.</p>
        {submitted && (
          <p className="mt-3 text-[var(--color-rouge-brique)]">Vérification en attente. Merci d&apos;attendre.</p>
        )}
      </div>
    </section>
  );
}

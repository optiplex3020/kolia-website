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
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-2xl flex-col justify-center gap-10 px-6 py-24 sm:px-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.48em] text-[var(--color-text-muted)] slow-reveal">
          Entrer
        </p>
        <h1 className="text-3xl font-medium slow-reveal sm:text-4xl">
          Invitation requise.
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] slow-reveal">
          Ce vestibule accueille les invitations Kolia en cours. Chaque code est unique,
          réservé aux éditions ouvertes. Lorsque la fenêtre se referme, le vestibule se tait.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6 slow-reveal">
        <label htmlFor="code" className="block text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
          Code d&apos;invitation
        </label>
        <input
          id="code"
          value={code}
          onChange={(event) => setCode(event.target.value.toUpperCase())}
          placeholder="XXXX-XXXX"
          className="w-full rounded-full border border-[var(--color-separator)] bg-transparent px-6 py-3 text-sm uppercase tracking-[0.38em] text-[var(--color-text-primary)] outline-none transition-colors duration-700 ease-out focus:border-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-separator)] px-8 py-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)] transition-colors duration-700 ease-out hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
        >
          Soumettre
        </button>
      </form>

      <footer className="space-y-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-muted)]">
        <p>Fenêtre fermée? Patience recommandée.</p>
        {submitted && (
          <p className="text-[var(--color-rouge-brique)]">
            Les invitations seront vérifiées lors de la prochaine ouverture.
          </p>
        )}
      </footer>
    </section>
  );
}

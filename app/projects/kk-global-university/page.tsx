import React from "react"
import Image from "next/image"

export default function KKGlobalPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">KK Global University Website</h1>
        <p className="text-sm text-white/75 mb-6">Feb 2025 – May 2025 · React.js · TypeScript · Tailwind CSS · Vite · shadcn-ui</p>

        <div className="mb-6">
          <Image src="/images/portfolio/kk-global.png" alt="KK Global University" width={1200} height={700} className="rounded" />
        </div>

        <section className="space-y-4 text-white/85 leading-relaxed">
          <p>
            Engineered a fully responsive and scalable university website from scratch using React and TypeScript. The
            project integrates shadcn-ui components for consistent design and developer ergonomics, and is structured to
            support hot-reloading and modular development.
          </p>

          <p>
            Responsibilities included architecture of the component library, routing and performance optimization,
            accessibility improvements, and collaboration through GitHub and Codespaces. The result is a production-ready
            site optimized for mobile and desktop with a strong focus on maintainability.
          </p>

          <p>Highlights:</p>
          <ul className="list-disc ml-6">
            <li>Type-safe UI components with shadcn-ui and Tailwind CSS.</li>
            <li>Vite-based development for fast rebuilds and a pleasant DX.</li>
            <li>Performance and accessibility improvements to meet modern best practices.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

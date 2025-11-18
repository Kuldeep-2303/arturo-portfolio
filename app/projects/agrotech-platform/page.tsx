import React from "react"
import Image from "next/image"

export default function AgroTechPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">AgroTech Platform</h1>
        <p className="text-sm text-white/75 mb-6">Jul 2024 – Sep 2024 · Django · Python · HTML/CSS</p>

        <div className="mb-6">
          <Image src="/images/portfolio/agrotech.png" alt="AgroTech Platform" width={1200} height={700} className="rounded" />
        </div>

        <section className="space-y-4 text-white/85 leading-relaxed">
          <p>
            Built a comprehensive farming support platform providing real-time weather data, soil analysis, crop
            planning, and market pricing. Implemented NDVI-based satellite field visualization and a modular, secure
            user interface with personalized dashboards for farmers.
          </p>

          <p>
            The platform empowers farmers with data-driven decision-making tools that improve yield and operational
            efficiency. Responsibilities included backend design with Django, integration of external APIs, and frontend
            UI work for data visualization.
          </p>

          <p>Highlights:</p>
          <ul className="list-disc ml-6">
            <li>NDVI satellite visualization for field health monitoring.</li>
            <li>Secure authentication and personalized dashboards.</li>
            <li>Integration with weather and market-price APIs.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

import React from "react"
import Image from "next/image"

export default function SmartClassroomPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Smart Classroom Monitoring System</h1>
        <p className="text-sm text-white/75 mb-6">Dec 2024 – Mar 2025 · Python · OpenCV · TensorFlow · Flask · Firebase · MySQL</p>

        <div className="mb-6">
          <Image src="/images/portfolio/smart-classroom.png" alt="Smart Classroom Monitoring" width={1200} height={700} className="rounded" />
        </div>

        <section className="space-y-4 text-white/85 leading-relaxed">
          <p>
            Designed and deployed an AI-powered face recognition system to automate student attendance in real-time.
            Trained machine learning models and integrated them with Flask APIs and Firebase Realtime Database to
            maintain robust logs and reporting.
          </p>

          <p>
            The system achieved high detection accuracy, prevented proxy entries, and offered a web-based dashboard for
            teachers to access logs and generate reports. Key implementation details included model training,
            optimization for real-time inference, and secure data storage.
          </p>

          <p>Highlights:</p>
          <ul className="list-disc ml-6">
            <li>Real-time face detection using OpenCV and TensorFlow.</li>
            <li>REST APIs with Flask and data persistence in Firebase / MySQL.</li>
            <li>Dashboard for teachers with reporting and export features.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { certifications } from "@/data/profile";

export function CertificationsChapter() {
  return (
    <section id="certifs" className="border-t border-line bg-paper-dark/40 content-offset py-24">
      <div className="max-w-5xl">
        <p className="chapter-number">04</p>
        <h2 className="font-display text-4xl md:text-5xl">Certifications</h2>
        <p className="mt-4 text-ink-soft">
          Cisco Networking Academy, IBM Coursera — Python, IA, Big Data et English for IT.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group border border-line bg-white p-6 transition hover:border-ink"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug">{cert.title}</h3>
                  {cert.date && (
                    <p className="mt-1 text-sm text-ink-muted">{cert.date}</p>
                  )}
                </div>
                <FileText size={20} className="shrink-0 text-ink-muted" />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                >
                  Voir le certificat PDF
                </a>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
                  >
                    Vérifier
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

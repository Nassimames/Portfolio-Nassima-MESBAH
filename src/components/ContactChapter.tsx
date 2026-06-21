"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactChapter() {
  return (
    <section id="contact" className="border-t border-line bg-ink content-offset py-24 text-paper">
      <div className="max-w-5xl">
        <p className="chapter-number text-paper/20">06</p>
        <h2 className="font-display text-4xl md:text-5xl">Contact</h2>
        <p className="mt-4 max-w-xl text-paper/70">
          Disponible pour de nouvelles opportunités — parlons de votre prochain projet web ou mobile.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 border border-paper/20 p-4 transition hover:border-paper/50"
            >
              <Mail size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/50">Email</p>
                <p>{profile.email}</p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 border border-paper/20 p-4 transition hover:border-paper/50"
            >
              <Phone size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/50">Téléphone</p>
                <p>{profile.phone}</p>
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-paper/20 p-4 transition hover:border-paper/50"
            >
              <Github size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/50">GitHub</p>
                <p>github.com/Nassimames</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              window.location.href = `mailto:${profile.email}?subject=Contact portfolio — ${name}&body=${encodeURIComponent(String(message))}%0A%0A— ${name} (${email})`;
            }}
          >
            <input
              name="name"
              required
              placeholder="Votre nom"
              className="w-full border border-paper/20 bg-transparent px-4 py-3 outline-none placeholder:text-paper/40 focus:border-paper/60"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="votre@email.com"
              className="w-full border border-paper/20 bg-transparent px-4 py-3 outline-none placeholder:text-paper/40 focus:border-paper/60"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Votre message..."
              className="w-full resize-none border border-paper/20 bg-transparent px-4 py-3 outline-none placeholder:text-paper/40 focus:border-paper/60"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:opacity-90"
            >
              Envoyer
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

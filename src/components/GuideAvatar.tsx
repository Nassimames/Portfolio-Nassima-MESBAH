"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@/components/Avatar";
import { useContent } from "@/context/LocaleContext";
import { useActiveChapter } from "@/hooks/useActiveChapter";

export function GuideAvatar() {
  const { profile, chapterReactions } = useContent();
  const active = useActiveChapter();
  const reaction = chapterReactions[active] ?? chapterReactions.cover;
  const isWelcome = active === "cover";

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-40 flex max-w-[260px] flex-col items-end gap-3"
      aria-live="polite"
      aria-label={`${profile.name} : ${reaction.message}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${active}-${reaction.message}`}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative max-w-[240px] rounded-xl border border-line bg-white px-4 py-3 text-sm leading-snug text-ink shadow-[0_4px_20px_rgba(17,17,17,0.08)]"
        >
          <p className="font-medium text-ink">{profile.shortName}</p>
          <p className="mt-1 text-ink-soft">{reaction.message}</p>
          <span
            className="absolute -bottom-2 right-8 h-3 w-3 rotate-45 border-b border-r border-line bg-white"
            aria-hidden
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative">
        <motion.div
          animate={isWelcome ? { y: [0, -4, 0] } : { y: 0 }}
          transition={
            isWelcome
              ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
        >
          <Avatar size="md" src={profile.avatarPath} alt={profile.name} className="lg:hidden" />
          <Avatar size="lg" src={profile.avatarPath} alt={profile.name} className="hidden lg:block" />
        </motion.div>

        <motion.span
          key={`${active}-gesture`}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="absolute -right-0.5 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white text-sm shadow-md"
          aria-hidden
        >
          <motion.span
            animate={isWelcome ? { rotate: [0, 20, -10, 20, 0] } : {}}
            transition={
              isWelcome
                ? { duration: 1.4, repeat: Infinity, repeatDelay: 1.8 }
                : {}
            }
            className="inline-block origin-bottom-right"
          >
            {reaction.gesture}
          </motion.span>
        </motion.span>
      </div>
    </div>
  );
}

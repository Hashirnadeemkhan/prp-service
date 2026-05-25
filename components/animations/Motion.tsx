"use client";
import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

type CommonProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
};

export function FadeInUp({ children, delay = 0, className = "" }: CommonProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay, duration: 0.65, ease: easeOut }}
      className={className}>
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, delay = 0, className = "" }: CommonProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeLeft}
      transition={{ delay, duration: 0.65, ease: easeOut }}
      className={className}>
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, delay = 0, className = "" }: CommonProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeRight}
      transition={{ delay, duration: 0.65, ease: easeOut }}
      className={className}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }: CommonProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={scaleIn}
      transition={{ delay, duration: 0.5, ease: easeOut }}
      className={className}>
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  staggerDelay = 0.12,
  initialDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: initialDelay },
        },
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/* Hero entry — instant load, no scroll trigger */
export function HeroFadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}>
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const spring = useSpring(from, { duration: duration * 1000 });
  const display = useTransform(spring, (current) =>
    `${prefix}${current.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    spring.set(to);
  }, [spring, to]);

  return <motion.span>{display}</motion.span>;
}

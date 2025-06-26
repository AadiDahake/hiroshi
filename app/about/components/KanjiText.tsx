import { motion } from "framer-motion";

// Japanese Calligraphy Text Component
export const KanjiText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => (
  <motion.div
    className={`font-sawarabi-mincho ${className}`}
    initial={{ scale: 0.8 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

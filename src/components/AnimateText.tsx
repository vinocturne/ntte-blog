import { motion } from 'framer-motion'

const AnimateText = ({ text }: { text: string }) => {
  const words = text.split(' ')
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="font-blackHans text-primary dark:text-white"
    >
      {words.map((word) => (
        <motion.div
          variants={child}
          style={{
            marginRight: '5px',
          }}
          key={word}
        >
          {word}
        </motion.div>
      ))}
    </motion.div>
  )
}
export default AnimateText

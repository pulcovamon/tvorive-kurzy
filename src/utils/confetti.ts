import confetti from "canvas-confetti";

const fireConfetti = () => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(), // náhodné místo pod textem
      y: Math.random() * 0.5, // trochu níž pod kurzorem
    },
  });
};

export default fireConfetti;
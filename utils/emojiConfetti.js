import confetti from "canvas-confetti";

export const emojiConfetti = (
  emojiList = ["🎉", "✨", "🚀", "💜"],
  options = {}
) => {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 9999; 
  document.body.appendChild(canvas);

  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  emojiList.forEach((emoji, index) => {
    setTimeout(() => {
      myConfetti({
        particleCount: 20,
        shapes: ["text"],
        text: [emoji],
        scalar: 2, 
        ticks: 200,
        spread: 120,
        origin: { x: Math.random(), y: 0.6 },
        ...options,
      });
    }, index * 150); 
  });
  setTimeout(() => {
    document.body.removeChild(canvas);
  }, 3000);
};

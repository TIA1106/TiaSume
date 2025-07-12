import confetti from "canvas-confetti";

export const emojiConfetti = (
  emojiList = ["🎉", "✨", "🚀", "💜"],
  options = {}
) => {
  // create a canvas over the whole screen
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 9999; // make sure it's on top!
  document.body.appendChild(canvas);

  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  // Fire once for each emoji
  emojiList.forEach((emoji, index) => {
    setTimeout(() => {
      myConfetti({
        particleCount: 20,
        shapes: ["text"],
        text: [emoji],
        scalar: 2, // size
        ticks: 200, // lifetime
        spread: 120,
        origin: { x: Math.random(), y: 0.6 },
        ...options,
      });
    }, index * 150); // staggered for effect
  });

  // Remove canvas after 3 seconds
  setTimeout(() => {
    document.body.removeChild(canvas);
  }, 3000);
};

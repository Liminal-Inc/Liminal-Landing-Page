<script>
    import { onMount } from 'svelte';
  
    let canvas;
    let context;
    const characters = "0123456789ABCDEF".split('');
    const fontSize = 16;
    let columns = [];
    let dropSpeed = [];
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Array(Math.floor(canvas.width / fontSize)).fill(1);
      dropSpeed = columns.map(() => Math.random());
    }
  
    function draw() {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = '#0F0'; // Neon green, for a cyberpunk feel
      context.font = `${fontSize}px monospace`;
  
      columns.forEach((y, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;
        context.fillText(text, x, y);
  
        columns[index] = y > canvas.height && Math.random() > 0.975 ? 0 : y + fontSize;
        dropSpeed[index] = Math.max(dropSpeed[index], Math.random()); // Ensure variety in speed
      });
    }
  
    onMount(() => {
      context = canvas.getContext('2d');
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
  
      const interval = setInterval(draw, 50); // Adjust for faster or slower falling speed
  
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resizeCanvas);
      };
    });
  </script>
  
  <canvas bind:this={canvas}></canvas>
  
  <style>
    canvas {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
  </style>
  
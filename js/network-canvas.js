/**
 * ViShruTa - Digital Twin Connected Factory Hero Visual
 * Interactive Canvas Particle & Industrial Telemetry Node Network
 */

(function () {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 180 };
  let animationFrameId;

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  class NodeParticle {
    constructor(x, y) {
      this.x = x || Math.random() * width;
      this.y = y || Math.random() * height;
      this.baseX = this.x;
      this.baseY = this.y;
      this.size = Math.random() * 2.5 + 1.2;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.isHub = Math.random() < 0.12; // 12% are larger telemetry hubs
      if (this.isHub) {
        this.size = Math.random() * 3 + 3.5;
      }
      this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
      if (!prefersReducedMotion) {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += 0.03;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 2.5;
            this.y -= forceDirectionY * force * 2.5;
          }
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      if (this.isHub) {
        const glow = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(0, 240, 255, ${glow})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();

        // Outer hub orbital ring
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(30, 144, 255, ${0.15 * glow})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(30, 144, 255, 0.65)';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#1E90FF';
        ctx.fill();
      }
      ctx.shadowBlur = 0; // reset
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((width * height) / 14000);
    const clampedCount = Math.min(Math.max(count, 45), 110);
    for (let i = 0; i < clampedCount; i++) {
      particles.push(new NodeParticle());
    }
  }

  function connectParticles() {
    const maxDistance = 145;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].isHub || particles[j].isHub
            ? `rgba(0, 240, 255, ${alpha * 1.5})`
            : `rgba(30, 144, 255, ${alpha})`;
          ctx.lineWidth = particles[i].isHub || particles[j].isHub ? 1.2 : 0.75;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectParticles();

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrameId);
    resize();
    animate();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Init
  resize();
  animate();
})();

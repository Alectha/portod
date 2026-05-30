export const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&display=swap');
    
    :root {
      --bg-color: #FAFAFA;
      --text-color: #111111;
    }

    body {
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      color: var(--text-color);
      font-family: 'Satoshi', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    
    h1, h2, h3, h4, h5, h6, .font-heading {
      font-family: 'Clash Display', sans-serif;
    }

    /* Grain Texture Overlay */
    .grain-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none;
      z-index: 50;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #9ca3af; }

    /* Hide scrollbar for clean modals */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    .text-outline {
      color: transparent;
      -webkit-text-stroke: 1px rgba(0,0,0,0.2);
    }
    
    .glass-panel {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    /* Shared section background with soft neon glow */
    .section-bg {
      background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%);
      position: relative;
    }

    .section-bg::before {
      content: "";
      position: absolute;
      inset: -2px;
      z-index: 0;
      background: radial-gradient(ellipse at 20% 10%, rgba(99,102,241,0.08), transparent 15%), radial-gradient(ellipse at 80% 80%, rgba(236,72,153,0.06), transparent 15%);
      pointer-events: none;
      filter: blur(18px);
      mix-blend-mode: screen;
    }

    .section-content {
      position: relative; z-index: 10;
    }
  `}} />
);

/**
 * ==========================================================================
 * EK CHHOTI SI DUNIYA MERI DOREMON KE LIYE ❤️ - UPGRADED JAVASCRIPT ENGINE
 * ==========================================================================
 * 
 * 💡 KISI BHI CHEEZ KO CUSTOMIZE KARNA HAI?
 * Neeche CONFIG object ko dekho! Yahan se aap Saumya ka naam, photos ke paths,
 * captions, messages aur background music aasaani se change kar sakte hain.
 */

const CONFIG = {
  // Best Friend Details
  friendName: "Saumya",
  nickname: "Doremon",
  senderName: "Tera Pagal Dost",

  // Website Title
  websiteTitle: "Ek Chhoti Si Duniya Meri Doremon Ke Liye ❤️",

  // Audio Settings
  audio: {
    // Agar aapke paas koi gaana hai, toh use 'assets/music/' me daalkar uska path yahan likhein:
    // Jaise: "assets/music/doremon-song.mp3"
    customAudioUrl: "", // Blank chhodenge toh in-built music-box lullaby automatic chalegi!
    songTitle: "Doremon Ambient Lullaby",
  },

  // Photos Configuration (assets/images/ folder)
  // NOT dependent on many photos together - focused on Saumya's individual photos!
  photos: {
    hero: "assets/images/hero-saumya.jpg",
    doremonPolaroid: "assets/images/doremon.jpg",
    finale: "assets/images/finale-saumya.jpg",
  },

  // Scene 2: Letter Paragraphs (Natural Hinglish)
  letter: {
    salutation: "Meri Pyari Pagli Saumya,",
    paragraphs: [
      "Pagli, pata hai mujhe tujhse kuch kehna tha...",
      "Par samajh nahi aa raha tha kaise kahun.",
      "Isliye socha ek chhoti si website hi bana deta hoon tere liye.",
      "Ab aaram se sun meri baat ❤️",
    ],
    signoff: "Tera sabse bada sar-dard aur bestie,",
  },

  // Scene 3: Gussa Meter Responses
  gussaResponses: {
    mild: {
      fill: "35%",
      needle: "😒",
      emoji: "☕🥟",
      title: "Haye! Chalo thoda sa toh sambhal lunga!",
      text: "Ek cup kadak chai aur teri favorite treats le aaun? Thoda sa gussa toh 2 minute me gayab ho jayega! Deal pakki? 🤝❤️",
    },
    medium: {
      fill: "70%",
      needle: "😤",
      emoji: "😱🙏",
      title: "Baap re! Itna gussa?!",
      text: "Arey itne gusse me toh Doremon ka gadget bhi short-circuit ho jayega! Dekho kaan pakad ke 100 baar sorry bol raha hoon... Ab toh thoda thanda ho jao madam! 🥺",
    },
    extreme: {
      fill: "100%",
      needle: "😭",
      emoji: "😭🍫",
      title: "Aise mat bol na please...",
      text: "Bina baat kiye main kaise rahoonga? Pagal ho jaunga sach me! Chalo chup-chaap smile kar do warna main saare dorayaki akele kha jaunga aur rone lagunga! 🥺🫂",
    },
  },

  // Scene 4: Flower Garden Messages
  flowers: [
    {
      id: 1,
      name: "Rose 🌹",
      title: "Ye phool meri Doremon ke liye 🌸",
      note: "Kyuki teri smile in gulabon se bhi zyada khushnuma hai ❤️ Hamesha aise hi khili rehna!",
    },
    {
      id: 2,
      name: "Sunflower 🌻",
      title: "Ye phool meri Doremon ke liye 🌸",
      note: "Tu meri life ki permanent sunshine hai! Jab tu hasti hai toh sab kuch bright ho jata hai 🌻✨",
    },
    {
      id: 3,
      name: "Tulip 🌷",
      title: "Ye phool meri Doremon ke liye 🌸",
      note: "Duniya ki sabse sweet, honest aur genuine dost ke liye... jaisi tu hai, bilkul waisi hi rehna! 🌷💖",
    },
    {
      id: 4,
      name: "Sakura 🌸",
      title: "Ye phool meri Doremon ke liye 🌸",
      note: "Meri sabse pyari Doremon hamesha aise hi mehekti rahe aur life me hamesha khush rahe! 🌸🥰",
    },
  ],

  // Scene 5: Doremon Photo Gallery (Focused individual showcase)
  gallery: [
    {
      id: "doremon",
      image: "assets/images/doremon.jpg",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "Meri Doremon ❤️",
      date: "Forever Favorite",
      isSpecial: true,
      note: "Duniya ki sabse cute, pyaari aur special Doremon. Jiske bina meri har ek baat bilkul adhuri hai!",
    },
    {
      id: "mem1",
      image: "assets/images/saumya-1.jpg",
      fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Ye wali yaad hai? 😂",
      date: "Unfiltered Smile",
      isSpecial: false,
      note: "Jab hum bina kisi wajah ke itna hase the ki pet me dard hone laga tha! Aisi smiles hi sabse real hoti hain.",
    },
    {
      id: "mem2",
      image: "assets/images/saumya-2.jpg",
      fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      caption: "Ye moment toh kabhi nahi bhool sakta ❤️",
      date: "Pure Magic",
      isSpecial: false,
      note: "Duniya ki saari problems ek taraf, aur teri-meri dosti ek taraf. Tujhse baat karke saara mood 2 minute me fresh ho jata hai.",
    },
    {
      id: "mem3",
      image: "assets/images/saumya-3.jpg",
      fallback: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
      caption: "Hamesha aise hi muskurati rehna 🌸",
      date: "Best Friends Forever",
      isSpecial: false,
      note: "Chahe hum kitna bhi lad lein ya gussa ho jayein, end me hamesha aise hi ek saath rehna hai hume!",
    },
  ],

  // Scene 7: Reasons Why You Are Special (6 Interactive 3D Flip Cards)
  specialCards: [
    {
      id: 1,
      badge: "Reason 01",
      icon: "😂",
      frontTitle: "Pagalpanti Partner",
      frontPrompt: "Tap kar aur dekh",
      backMessage: "Tu meri favourite pagal hai 😂",
      backNote: "Bina tere koi bhi mazaak poora nahi hota. Jab tu khul ke hasti hai na, toh saara din ban jata hai!",
    },
    {
      id: 2,
      badge: "Reason 02",
      icon: "✨",
      frontTitle: "Mood Booster Smile",
      frontPrompt: "Tap kar aur dekh",
      backMessage: "Teri smile dekh ke mood theek ho jata hai ❤️",
      backNote: "Chahe kitna bhi ganda din ho ya main kitna bhi pareshan hoon, teri ek pyari si smile sab theek kar deti hai.",
    },
    {
      id: 3,
      badge: "Reason 03",
      icon: "🌙",
      frontTitle: "Endless Gup-Shup",
      frontPrompt: "Tap kar aur dekh",
      backMessage: "Tujhse baat karna kabhi boring nahi hota.",
      backNote: "Hours kab nikal jate hain pata hi nahi chalta. Dumb memes se lekar deep life talks tak, tu meri permanent bestie hai.",
    },
    {
      id: 4,
      badge: "Reason 04",
      icon: "🙈",
      frontTitle: "Gusse Wali Cute",
      frontPrompt: "Tap kar aur dekh",
      backMessage: "Tu naraz bhi hoti hai toh cute lagti hai 🙈",
      backNote: "Waise gussa kam kiya kar, par gusse me teri naak laal hoti hai na, toh sach me aur zyada cute lagti hai!",
    },
    {
      id: 5,
      badge: "Reason 05",
      icon: "🫂",
      frontTitle: "Unconditional Yaari",
      frontPrompt: "Tap kar aur dekh",
      backMessage: "Apni friendship mere liye bahut special hai.",
      backNote: "Duniya idhar ki udhar ho jaye, par meri ye dosti hamesha sabse upar rahegi. You are truly irreplaceable.",
    },
    {
      id: 6,
      badge: "Reason 06",
      icon: "🔔",
      frontTitle: "The One & Only",
      frontPrompt: "Tap kar aur dekh",
      backMessage: "Aur haan, tu meri Doremon hai. Meri favourite Doremon 😂❤️",
      backNote: "Jiske paas har musibat ka solution hota hai, aur jiske bina meri life ek dum boring hai!",
    },
  ],

  // Scene 8: Playful Pleading Messages for "Bilkul nahi 😤"
  pleadingMessages: [
    "Arey yaar, ab kitni der naraz rahegi 😂",
    "Achha baba, kaan pakad ke sorry 🥹",
    "Please na Doremon, maan ja ❤️",
    "Ek smile toh banti hai yaar 🙈",
    "Tere bina kaun jhelega mujhe? Maan ja na please! 🥺",
    "Doremon ko dorayaki aur chocolate meri taraf se pakka! 🍫🥞",
    "Ab itna bhi bhav mat khao madam, dil toot jayega mera 💔",
    "Dekho teddy bhi ro dega sach me agar 'Maaf kiya' nahi bola toh! 😭🧸",
  ],
};

window.CONFIG = CONFIG;

// ==========================================================================
// SOUND ENGINE (Web Audio API Synthesizer - 100% Offline & Bulletproof)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
    this.noteIndex = 0;
    this.melody = [
      523.25, 659.25, 783.99, 1046.50,
      880.00, 659.25, 783.99, 523.25,
      587.33, 698.46, 880.00, 1046.50,
      783.99, 659.25, 587.33, 523.25
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, time, duration = 1.2, type = 'sine', volume = 0.12) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.exponentialRampToValueAtTime(volume, time + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      osc.stop(time + duration);
    } catch (e) {}
  }

  playChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.playTone(783.99, now, 0.4, 'sine', 0.15); // G5
    this.playTone(1046.50, now + 0.08, 0.6, 'sine', 0.18); // C6
  }

  playEnvelopeOpen() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.playTone(440, now, 0.25, 'triangle', 0.1);
    this.playTone(659.25, now + 0.08, 0.45, 'sine', 0.14);
    this.playTone(880, now + 0.18, 0.7, 'sine', 0.18);
  }

  playBloom() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.playTone(523.25, now, 0.3, 'sine', 0.12);
    this.playTone(659.25, now + 0.06, 0.4, 'sine', 0.15);
    this.playTone(880.00, now + 0.12, 0.6, 'sine', 0.18);
  }

  playGiftOpen() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
      this.playTone(freq, now + idx * 0.07, 0.8, 'sine', 0.16);
    });
  }

  playCardFlip() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.playTone(392, now, 0.2, 'triangle', 0.12);
    this.playTone(523.25, now + 0.05, 0.35, 'sine', 0.15);
  }

  playTeddySqueak() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.playTone(987.77, now, 0.15, 'sine', 0.12);
    this.playTone(1318.51, now + 0.08, 0.3, 'sine', 0.15);
  }

  playConfettiFanfare() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      this.playTone(freq, now + idx * 0.09, 1.0, 'sine', 0.18);
    });
  }

  startAmbientMusic() {
    this.init();
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    const playNextStep = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const now = this.ctx.currentTime;
      const freq = this.melody[this.noteIndex % this.melody.length];
      this.playTone(freq, now, 1.8, 'sine', 0.1);

      if (this.noteIndex % 4 === 0) {
        this.playTone(freq / 2, now, 2.4, 'triangle', 0.08);
      }

      this.noteIndex++;
      this.musicTimer = setTimeout(playNextStep, 750);
    };

    playNextStep();
  }

  stopAmbientMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

const soundEngine = new SoundEngine();

// ==========================================================================
// AMBIENT CANVAS (HEARTS, PASTEL BUBBLES & STARLIGHT)
// ==========================================================================
class AmbientCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.width = 0;
    this.height = 0;
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    const count = window.innerWidth < 768 ? 25 : 45;
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(true));
    }
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticle(randomY = false) {
    const isHeart = Math.random() > 0.4;
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 25,
      size: isHeart ? Math.random() * 12 + 10 : Math.random() * 5 + 2,
      speedY: Math.random() * 0.55 + 0.25,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      isHeart: isHeart,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.02,
      color: Math.random() > 0.5 ? 'rgba(236, 72, 153,' : 'rgba(168, 85, 247,',
    };
  }

  drawHeart(x, y, size, opacity) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.scale(size / 30, size / 30);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(-15, -15, -25, 5, 0, 25);
    this.ctx.bezierCurveTo(25, 5, 15, -15, 0, 0);
    this.ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`;
    this.ctx.shadowColor = 'rgba(244, 114, 182, 0.4)';
    this.ctx.shadowBlur = 8;
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y -= p.speedY;
      p.x += Math.sin(p.angle) * 0.4 + p.speedX;
      p.angle += p.angleSpeed;

      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 90) {
        p.x += (dx / dist) * 1.5;
        p.y += (dy / dist) * 1.5;
      }

      if (p.isHeart) {
        this.drawHeart(p.x, p.y, p.size, p.opacity);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `${p.color} ${p.opacity})`;
        this.ctx.shadowColor = 'rgba(168, 85, 247, 0.3)';
        this.ctx.shadowBlur = 6;
        this.ctx.fill();
      }

      if (p.y < -30 || p.x < -30 || p.x > this.width + 30) {
        this.particles[i] = this.createParticle(false);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================================================
// CONFETTI CANNON (100% Native Canvas & Self-Contained)
// ==========================================================================
class ConfettiCannon {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'confettiCanvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '99999';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.pieces = [];
    this.isActive = false;

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  fire() {
    this.resize();
    const colors = ['#ec4899', '#f472b6', '#a855f7', '#38bdf8', '#facc15', '#ffffff', '#22c55e'];
    const count = window.innerWidth < 768 ? 100 : 220;

    for (let i = 0; i < count; i++) {
      this.pieces.push({
        x: this.width * (0.3 + Math.random() * 0.4),
        y: this.height * 0.65,
        vx: (Math.random() - 0.5) * 20,
        vy: -Math.random() * 16 - 8,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 14,
        opacity: 1,
        gravity: 0.35,
        isHeart: Math.random() > 0.6,
      });
    }

    if (!this.isActive) {
      this.isActive = true;
      this.render();
    }
  }

  render() {
    if (!this.isActive) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.pieces.length - 1; i >= 0; i--) {
      const p = this.pieces[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.005;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.opacity);

      if (p.isHeart) {
        this.ctx.scale(p.size / 20, p.size / 20);
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.bezierCurveTo(-10, -10, -15, 5, 0, 15);
        this.ctx.bezierCurveTo(15, 5, 10, -10, 0, 0);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
      } else {
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }

      this.ctx.restore();

      if (p.y > this.height + 40 || p.opacity <= 0) {
        this.pieces.splice(i, 1);
      }
    }

    if (this.pieces.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.isActive = false;
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }
}

// ==========================================================================
// TYPEWRITER ENGINE FOR SCENE 2
// ==========================================================================
class TypewriterEngine {
  constructor(containerId, paragraphs) {
    this.container = document.getElementById(containerId);
    this.paragraphs = paragraphs || [];
    this.currentPara = 0;
    this.currentChar = 0;
    this.timer = null;
    this.speed = 25;
  }

  start() {
    if (!this.container) return;
    this.reset();
    this.type();
  }

  reset() {
    if (this.timer) clearTimeout(this.timer);
    this.container.innerHTML = '';
    this.currentPara = 0;
    this.currentChar = 0;
  }

  skip() {
    if (this.timer) clearTimeout(this.timer);
    this.container.innerHTML = this.paragraphs.map((p) => `<p>${p}</p>`).join('');
  }

  type() {
    if (this.currentPara >= this.paragraphs.length) return;

    let pElem = this.container.children[this.currentPara];
    if (!pElem) {
      pElem = document.createElement('p');
      this.container.appendChild(pElem);
    }

    const text = this.paragraphs[this.currentPara];
    if (this.currentChar < text.length) {
      pElem.textContent += text.charAt(this.currentChar);
      this.currentChar++;
      this.timer = setTimeout(() => this.type(), this.speed);
    } else {
      this.currentPara++;
      this.currentChar = 0;
      this.timer = setTimeout(() => this.type(), this.speed * 8);
    }
  }
}

// ==========================================================================
// MAIN CONTROLLER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  let appConfig = Object.assign({}, window.CONFIG);
  const storedConfig = localStorage.getItem('doremon_site_config');
  if (storedConfig) {
    try {
      const parsed = JSON.parse(storedConfig);
      appConfig = Object.assign({}, appConfig, parsed);
    } catch (e) {}
  }

  // Enforce exactly 4 photos in 2x2 grid
  if (appConfig.gallery && appConfig.gallery.length !== 4) {
    appConfig.gallery = window.CONFIG.gallery.slice(0, 4);
    try {
      localStorage.setItem('doremon_site_config', JSON.stringify(appConfig));
    } catch (e) {}
  }

  // Preloader dismiss
  const preloader = document.getElementById('sitePreloader');
  setTimeout(() => {
    if (preloader) preloader.classList.add('loaded');
  }, 900);

  // Initialize Canvas & Confetti
  const ambientCanvas = new AmbientCanvas('ambientCanvas');
  const confetti = new ConfettiCannon();

  // Desktop Mouse Cursor Dot & Trail
  const cursorDot = document.getElementById('cursorDot');
  const cursorTrail = document.getElementById('cursorTrail');
  if (cursorDot && cursorTrail && window.innerWidth >= 1024) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
      cursorTrail.style.left = `${e.clientX}px`;
      cursorTrail.style.top = `${e.clientY}px`;
    });
  }

  // Render DOM from CONFIG
  const renderSiteFromConfig = () => {
    document.title = appConfig.websiteTitle || "Ek Chhoti Si Duniya Meri Doremon Ke Liye ❤️";

    const heroBadgeName = document.getElementById('heroBadgeName');
    if (heroBadgeName) {
      heroBadgeName.textContent = `${appConfig.friendName} • Meri ${appConfig.nickname}`;
    }

    const heroPhotoImg = document.getElementById('heroPhotoImg');
    if (heroPhotoImg && appConfig.photos?.hero) {
      heroPhotoImg.src = appConfig.photos.hero;
    }

    const letterSenderName = document.getElementById('letterSenderName');
    if (letterSenderName) letterSenderName.textContent = appConfig.senderName || "Tera Dost";

    // Scene 5: Polaroid Gallery
    const polaroidGalleryWall = document.getElementById('polaroidGalleryWall');
    if (polaroidGalleryWall && appConfig.gallery) {
      polaroidGalleryWall.innerHTML = appConfig.gallery
        .map(
          (item, idx) => `
          <div class="polaroid-card" data-gallery-idx="${idx}" role="button" tabindex="0" title="Click to view photo in fullscreen">
            <div class="polaroid-washi-tape"></div>
            ${item.isSpecial ? '<div class="doremon-special-pin" title="Meri Doremon">🔔</div>' : ''}
            <div class="polaroid-img-frame">
              <img src="${item.image}" alt="${item.caption}" class="polaroid-photo" loading="lazy" onerror="this.onerror=null; this.src='${item.fallback || ''}';">
            </div>
            <div class="polaroid-caption-box">
              <h4 class="polaroid-caption-title">${item.caption}</h4>
              <p class="polaroid-date-tag">${item.date}</p>
            </div>
          </div>
        `
        )
        .join('');
    }

    // Scene 7: 6 3D Flip Cards
    const specialCardsGrid = document.getElementById('specialCardsGrid');
    if (specialCardsGrid && appConfig.specialCards) {
      specialCardsGrid.innerHTML = appConfig.specialCards
        .map(
          (c) => `
          <div class="special-3d-card" data-card-id="${c.id}" role="button" tabindex="0">
            <div class="card-inner-3d">
              <div class="card-face-side card-face-front">
                <span class="card-front-badge">${c.badge}</span>
                <div class="card-icon-avatar">${c.icon}</div>
                <h3 class="card-front-title">${c.frontTitle}</h3>
                <div class="card-front-prompt">
                  <i data-lucide="sparkles" class="inline-icon"></i>
                  <span>${c.frontPrompt} ↺</span>
                </div>
              </div>
              <div class="card-face-side card-face-back">
                <span class="back-quote-glyph">“</span>
                <p class="card-back-message">${c.backMessage}</p>
                <p style="font-size:0.9rem;opacity:0.95;margin-top:0.4rem;font-weight:400;">${c.backNote}</p>
                <div class="card-back-foot">
                  <span>${c.badge}</span>
                  <span>Tap to flip ↺</span>
                </div>
              </div>
            </div>
          </div>
        `
        )
        .join('');
    }

    const certFriendName = document.getElementById('certFriendName');
    if (certFriendName) {
      certFriendName.textContent = `${appConfig.friendName} (Meri ${appConfig.nickname})`;
    }

    const finalePhotoImg = document.getElementById('finalePhotoImg');
    if (finalePhotoImg && appConfig.photos?.finale) {
      finalePhotoImg.src = appConfig.photos.finale;
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  };

  renderSiteFromConfig();

  // Audio Toggle
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicLabel = document.getElementById('musicLabel');
  const bgAudioPlayer = document.getElementById('bgAudioPlayer');
  let isMusicPlaying = false;

  const toggleMusic = () => {
    soundEngine.init();

    if (isMusicPlaying) {
      isMusicPlaying = false;
      musicToggleBtn.classList.remove('playing');
      musicLabel.textContent = 'Music: Off';
      soundEngine.stopAmbientMusic();
      if (bgAudioPlayer) bgAudioPlayer.pause();
    } else {
      isMusicPlaying = true;
      musicToggleBtn.classList.add('playing');
      musicLabel.textContent = 'Music: On ♪';

      if (appConfig.audio?.customAudioUrl) {
        bgAudioPlayer.src = appConfig.audio.customAudioUrl;
        bgAudioPlayer.play().catch(() => {
          soundEngine.startAmbientMusic();
        });
      } else {
        soundEngine.startAmbientMusic();
      }
    }
  };

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      soundEngine.playChime();
      toggleMusic();
    });
  }

  // Scene 1: Hero Button
  const startJourneyBtn = document.getElementById('startJourneyBtn');
  if (startJourneyBtn) {
    startJourneyBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-2')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Hero Photo click -> Fullscreen Lightbox
  const heroPortraitCard = document.getElementById('heroPortraitCard');
  if (heroPortraitCard) {
    heroPortraitCard.addEventListener('click', () => {
      soundEngine.playChime();
      openFullscreenModal(
        appConfig.photos?.hero || 'assets/images/hero-saumya.jpg',
        `${appConfig.friendName} • Meri ${appConfig.nickname} ❤️`,
        'Sabse Pyaari Smile',
        'Duniya ki sabse khoobsurat aur pyari dost jiski ek smile saara din theek kar sakti hai!'
      );
    });
  }

  // Scene 2: 3D Envelope & Typewriter
  const envelope3d = document.getElementById('envelope3d');
  const doremonSealBtn = document.getElementById('doremonSealBtn');
  const skipTypewriterBtn = document.getElementById('skipTypewriterBtn');
  const replayTypewriterBtn = document.getElementById('replayTypewriterBtn');
  const scene2NextBtn = document.getElementById('scene2NextBtn');
  let isEnvelopeOpened = false;

  const typewriter = new TypewriterEngine('letterTypewriterBox', appConfig.letter?.paragraphs);

  const openEnvelope = () => {
    if (isEnvelopeOpened) return;
    isEnvelopeOpened = true;
    envelope3d.classList.add('is-open');
    soundEngine.playEnvelopeOpen();

    setTimeout(() => {
      typewriter.start();
    }, 700);
  };

  if (envelope3d) {
    envelope3d.addEventListener('click', (e) => {
      if (e.target.closest('.parchment-actions')) return;
      if (!isEnvelopeOpened) openEnvelope();
    });
  }

  if (doremonSealBtn) {
    doremonSealBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  if (skipTypewriterBtn) {
    skipTypewriterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      soundEngine.playChime();
      typewriter.skip();
    });
  }

  if (replayTypewriterBtn) {
    replayTypewriterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      soundEngine.playChime();
      typewriter.start();
    });
  }

  if (scene2NextBtn) {
    scene2NextBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-angry')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scene 3: How Angry Are You? Game
  const meterFill = document.getElementById('meterFill');
  const meterNeedle = document.getElementById('meterNeedle');
  const responseEmoji = document.getElementById('responseEmoji');
  const responseTitle = document.getElementById('responseTitle');
  const responseText = document.getElementById('responseText');
  const angryFooterCta = document.getElementById('angryFooterCta');
  const angryNextBtn = document.getElementById('angryNextBtn');
  const angryChoiceBtns = document.querySelectorAll('.btn-angry-choice');

  angryChoiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      soundEngine.playChime();
      const level = btn.dataset.level;

      angryChoiceBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const data = appConfig.gussaResponses[level];
      if (data) {
        if (meterFill) meterFill.style.width = data.fill;
        if (meterNeedle) {
          meterNeedle.style.left = data.fill;
          meterNeedle.textContent = data.needle;
        }
        if (responseEmoji) responseEmoji.textContent = data.emoji;
        if (responseTitle) responseTitle.textContent = data.title;
        if (responseText) responseText.textContent = data.text;
      }

      if (angryFooterCta) angryFooterCta.style.display = 'block';
    });
  });

  if (angryNextBtn) {
    angryNextBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-garden')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scene 4: Magical Flower Garden
  const flowerCards = document.querySelectorAll('.garden-flower-card');
  const gardenBloomedCount = document.getElementById('gardenBloomedCount');
  const flowerBloomedTitle = document.getElementById('flowerBloomedTitle');
  const flowerBloomedNote = document.getElementById('flowerBloomedNote');
  const gardenNextBtn = document.getElementById('gardenNextBtn');
  const bloomedFlowerSet = new Set();

  flowerCards.forEach((card) => {
    card.addEventListener('click', () => {
      soundEngine.playBloom();
      card.classList.add('bloomed');

      const fid = parseInt(card.dataset.flowerId, 10);
      bloomedFlowerSet.add(fid);

      if (gardenBloomedCount) {
        gardenBloomedCount.textContent = bloomedFlowerSet.size;
      }

      const flowerData = appConfig.flowers.find((f) => f.id === fid);
      if (flowerData) {
        if (flowerBloomedTitle) flowerBloomedTitle.textContent = flowerData.title;
        if (flowerBloomedNote) flowerBloomedNote.textContent = flowerData.note;
      }

      // If all 4 bloomed, celebrate!
      if (bloomedFlowerSet.size === 4) {
        confetti.fire();
        if (flowerBloomedNote) {
          flowerBloomedNote.textContent = "Yayyy! Pura garden meri Doremon ke liye khil gaya! 🌸💖";
        }
      }
    });
  });

  if (gardenNextBtn) {
    gardenNextBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-gallery')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scene 5: Polaroid Lightbox Fullscreen Modal
  const photoLightboxModal = document.getElementById('photoLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxDate = document.getElementById('lightboxDate');
  const lightboxNote = document.getElementById('lightboxNote');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const likeMemoryBtn = document.getElementById('likeMemoryBtn');
  const likeMemoryLabel = document.getElementById('likeMemoryLabel');
  const galleryNextBtn = document.getElementById('galleryNextBtn');

  let memoryLikesCount = 0;

  const openFullscreenModal = (imgSrc, caption, date, note) => {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightboxDate.textContent = date;
    lightboxNote.textContent = note;
    memoryLikesCount = 0;
    likeMemoryLabel.textContent = 'Ye photo bahut pyaari hai! ❤️';

    photoLightboxModal.classList.add('is-active');
    photoLightboxModal.setAttribute('aria-hidden', 'false');
    soundEngine.playChime();
  };

  const closeFullscreenModal = () => {
    photoLightboxModal.classList.remove('is-active');
    photoLightboxModal.setAttribute('aria-hidden', 'true');
  };

  const attachPolaroidClickListeners = () => {
    const cards = document.querySelectorAll('.polaroid-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.galleryIdx, 10);
        const item = appConfig.gallery[idx];
        if (item) {
          openFullscreenModal(item.image, item.caption, item.date, item.note);
        }
      });
    });
  };
  attachPolaroidClickListeners();

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeFullscreenModal);
  if (photoLightboxModal) {
    photoLightboxModal.addEventListener('click', (e) => {
      if (e.target === photoLightboxModal) closeFullscreenModal();
    });
  }

  if (likeMemoryBtn) {
    likeMemoryBtn.addEventListener('click', () => {
      memoryLikesCount++;
      soundEngine.playChime();
      confetti.fire();
      likeMemoryLabel.textContent = `Loved ${memoryLikesCount} time${memoryLikesCount > 1 ? 's' : ''}! 💖`;
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-gift')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scene 6: Secret Gift Box 🎁
  const giftBoxStage = document.getElementById('giftBoxStage');
  const giftTapCue = document.getElementById('giftTapCue');
  const giftRevealedCard = document.getElementById('giftRevealedCard');
  const giftNextCta = document.getElementById('giftNextCta');
  const giftNextBtn = document.getElementById('giftNextBtn');
  let isGiftOpened = false;

  if (giftBoxStage) {
    giftBoxStage.addEventListener('click', () => {
      if (isGiftOpened) return;
      isGiftOpened = true;
      giftBoxStage.classList.add('is-open');
      soundEngine.playGiftOpen();
      confetti.fire();

      if (giftTapCue) giftTapCue.style.display = 'none';
      if (giftRevealedCard) giftRevealedCard.classList.add('is-active');
      if (giftNextCta) giftNextCta.classList.add('is-active');
    });
  }

  if (giftNextBtn) {
    giftNextBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-special')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scene 7: 3D Flip Cards & Tracker
  const flippedSet = new Set();
  const specialCardsUnlocked = document.getElementById('specialCardsUnlocked');
  const specialNextBtn = document.getElementById('specialNextBtn');

  const attachFlipCardListeners = () => {
    const cards = document.querySelectorAll('.special-3d-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
        soundEngine.playCardFlip();

        const cardId = card.dataset.cardId;
        flippedSet.add(cardId);
        if (specialCardsUnlocked) {
          specialCardsUnlocked.textContent = flippedSet.size;
        }
      });
    });
  };
  attachFlipCardListeners();

  if (specialNextBtn) {
    specialNextBtn.addEventListener('click', () => {
      soundEngine.playChime();
      document.getElementById('scene-question')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scene 8: The Forgiveness Question (Interactive Character)
  const forgiveYesBtn = document.getElementById('forgiveYesBtn');
  const forgiveNoBtn = document.getElementById('forgiveNoBtn');
  const pleaSpeechText = document.getElementById('pleaSpeechText');
  const pleaCounterText = document.getElementById('pleaCounterText');
  const pleaEyesNormal = document.getElementById('pleaEyesNormal');
  const pleaEyesSad = document.getElementById('pleaEyesSad');
  const pleaEyesHappy = document.getElementById('pleaEyesHappy');
  const pleaCharacterArt = document.getElementById('pleaCharacterArt');
  const sceneFinale = document.getElementById('scene-finale');

  let pleaAttempts = 0;
  let yesBtnScale = 1.0;

  if (forgiveNoBtn) {
    forgiveNoBtn.addEventListener('click', () => {
      soundEngine.playTeddySqueak();

      pleaEyesNormal.style.display = 'none';
      pleaEyesSad.style.display = 'block';
      pleaEyesHappy.style.display = 'none';

      pleaCharacterArt.style.animation = 'none';
      void pleaCharacterArt.offsetWidth;
      pleaCharacterArt.style.animation = 'gentleFloat 0.25s 3 alternate ease-in-out';

      const messages = appConfig.pleadingMessages || [
        "Arey yaar, ab kitni der naraz rahegi 😂",
        "Achha baba, kaan pakad ke sorry 🥹",
        "Please na Doremon, maan ja ❤️",
        "Ek smile toh banti hai yaar 🙈",
      ];
      pleaSpeechText.textContent = messages[pleaAttempts % messages.length];
      pleaAttempts++;

      yesBtnScale += 0.08;
      if (yesBtnScale > 1.45) yesBtnScale = 1.45;
      forgiveYesBtn.style.transform = `scale(${yesBtnScale})`;

      if (pleaCounterText) {
        pleaCounterText.style.display = 'block';
        pleaCounterText.textContent = `Aww, itna bhav mat khao Doremon! Green button daba do na! 🥺`;
      }
    });
  }

  if (forgiveYesBtn) {
    forgiveYesBtn.addEventListener('click', () => {
      soundEngine.playConfettiFanfare();
      confetti.fire();

      pleaEyesNormal.style.display = 'none';
      pleaEyesSad.style.display = 'none';
      pleaEyesHappy.style.display = 'block';
      pleaSpeechText.textContent = 'YAYYYYY! ❤️ Thank you meri Doremon!';

      if (pleaCounterText) pleaCounterText.style.display = 'none';

      if (sceneFinale) {
        sceneFinale.classList.add('is-active');
        setTimeout(() => {
          sceneFinale.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      }

      setTimeout(() => confetti.fire(), 400);
      setTimeout(() => confetti.fire(), 900);
    });
  }

  // Grand Finale Actions: Hug & Replay
  const virtualHugBtn = document.getElementById('virtualHugBtn');
  const hugFullscreenOverlay = document.getElementById('hugFullscreenOverlay');
  const replayStoryBtn = document.getElementById('replayStoryBtn');

  if (virtualHugBtn && hugFullscreenOverlay) {
    virtualHugBtn.addEventListener('click', () => {
      soundEngine.playChime();
      hugFullscreenOverlay.classList.add('is-active');
      confetti.fire();

      setTimeout(() => {
        hugFullscreenOverlay.classList.remove('is-active');
      }, 3500);
    });
  }

  if (replayStoryBtn) {
    replayStoryBtn.addEventListener('click', () => {
      soundEngine.playChime();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        if (sceneFinale) sceneFinale.classList.remove('is-active');
        if (envelope3d) envelope3d.classList.remove('is-open');
        isEnvelopeOpened = false;
        yesBtnScale = 1.0;
        if (forgiveYesBtn) forgiveYesBtn.style.transform = 'scale(1)';
        pleaAttempts = 0;
        pleaEyesNormal.style.display = 'block';
        pleaEyesSad.style.display = 'none';
        pleaEyesHappy.style.display = 'none';
        pleaSpeechText.textContent = 'Achha meri Doremon, ab kitna bhav khayegi? 😂';
      }, 900);
    });
  }

  // Customizer Modal
  const openCustomizerBtn = document.getElementById('openCustomizerBtn');
  const galleryCustomizeBtn = document.getElementById('galleryCustomizeBtn');
  const customizerModal = document.getElementById('customizerModal');
  const closeCustomizerModalBtn = document.getElementById('closeCustomizerModalBtn');
  const cfgFriendName = document.getElementById('cfgFriendName');
  const cfgNickname = document.getElementById('cfgNickname');
  const cfgSenderName = document.getElementById('cfgSenderName');
  const photoSlotsScroll = document.getElementById('photoSlotsScroll');
  const saveCustomizerBtn = document.getElementById('saveCustomizerBtn');
  const resetCustomizerBtn = document.getElementById('resetCustomizerBtn');

  const renderPhotoSlots = () => {
    if (!photoSlotsScroll) return;

    const allSlots = [
      { id: 'hero', label: 'Main Hero Photo (Opening Screen)', current: appConfig.photos?.hero || 'assets/images/hero-saumya.jpg' },
      { id: 'doremon', label: 'Special "Meri Doremon ❤️" Polaroid', current: appConfig.photos?.doremonPolaroid || 'assets/images/doremon.jpg' },
      { id: 'finale', label: 'Finale Celebration Screen Photo', current: appConfig.photos?.finale || 'assets/images/finale-saumya.jpg' },
      ...(appConfig.gallery || []).map((g, i) => ({
        id: `gal_${i}`,
        label: `Gallery Photo #${i + 1} (${g.caption})`,
        current: g.image,
      })),
    ];

    photoSlotsScroll.innerHTML = allSlots
      .map(
        (slot, idx) => `
      <div class="slot-row-card" data-slot-id="${slot.id}">
        <img src="${slot.current}" alt="${slot.label}" class="slot-thumb-preview" id="slotThumb_${idx}" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';">
        <div class="slot-inputs-wrap">
          <span style="font-size:0.78rem;font-weight:700;color:#9333ea;">${slot.label}</span>
          <input type="text" placeholder="Image URL ya niche se local file chuniye" value="${slot.current}" id="slotInput_${idx}">
          <label class="slot-upload-label">
            <span>📁 Choose File</span>
            <input type="file" accept="image/*" style="display:none;" class="slot-file-reader" data-slot-index="${idx}">
          </label>
        </div>
      </div>
    `
      )
      .join('');

    const fileInputs = photoSlotsScroll.querySelectorAll('.slot-file-reader');
    fileInputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const sIdx = input.dataset.slotIndex;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const dataUrl = ev.target.result;
          const thumb = document.getElementById(`slotThumb_${sIdx}`);
          const textInput = document.getElementById(`slotInput_${sIdx}`);
          if (thumb) thumb.src = dataUrl;
          if (textInput) textInput.value = dataUrl;
        };
        reader.readAsDataURL(file);
      });
    });
  };

  const openCustomizer = () => {
    cfgFriendName.value = appConfig.friendName || '';
    cfgNickname.value = appConfig.nickname || '';
    cfgSenderName.value = appConfig.senderName || '';
    renderPhotoSlots();

    customizerModal.classList.add('is-active');
    customizerModal.setAttribute('aria-hidden', 'false');
    soundEngine.playChime();
  };

  const closeCustomizer = () => {
    customizerModal.classList.remove('is-active');
    customizerModal.setAttribute('aria-hidden', 'true');
  };

  if (openCustomizerBtn) openCustomizerBtn.addEventListener('click', openCustomizer);
  if (galleryCustomizeBtn) galleryCustomizeBtn.addEventListener('click', openCustomizer);
  if (closeCustomizerModalBtn) closeCustomizerModalBtn.addEventListener('click', closeCustomizer);

  if (customizerModal) {
    customizerModal.addEventListener('click', (e) => {
      if (e.target === customizerModal) closeCustomizer();
    });
  }

  if (saveCustomizerBtn) {
    saveCustomizerBtn.addEventListener('click', () => {
      soundEngine.playChime();
      if (cfgFriendName.value.trim()) appConfig.friendName = cfgFriendName.value.trim();
      if (cfgNickname.value.trim()) appConfig.nickname = cfgNickname.value.trim();
      if (cfgSenderName.value.trim()) appConfig.senderName = cfgSenderName.value.trim();

      const heroVal = document.getElementById('slotInput_0')?.value.trim();
      const doremonVal = document.getElementById('slotInput_1')?.value.trim();
      const finaleVal = document.getElementById('slotInput_2')?.value.trim();
      if (!appConfig.photos) appConfig.photos = {};
      if (heroVal) appConfig.photos.hero = heroVal;
      if (doremonVal) appConfig.photos.doremonPolaroid = doremonVal;
      if (finaleVal) appConfig.photos.finale = finaleVal;

      if (appConfig.gallery) {
        appConfig.gallery.forEach((item, i) => {
          const val = document.getElementById(`slotInput_${i + 3}`)?.value.trim();
          if (val) item.image = val;
        });
      }

      localStorage.setItem('doremon_site_config', JSON.stringify(appConfig));
      renderSiteFromConfig();
      attachPolaroidClickListeners();
      attachFlipCardListeners();
      closeCustomizer();
      confetti.fire();
    });
  }

  if (resetCustomizerBtn) {
    resetCustomizerBtn.addEventListener('click', () => {
      soundEngine.playChime();
      localStorage.removeItem('doremon_site_config');
      appConfig = Object.assign({}, window.CONFIG);
      renderSiteFromConfig();
      attachPolaroidClickListeners();
      attachFlipCardListeners();
      closeCustomizer();
    });
  }

  // Side Dots Navigation & Active State Tracking
  const sections = document.querySelectorAll('.scene-section');
  const dotBtns = document.querySelectorAll('.dot-btn');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dotBtns.forEach((dot) => {
            if (dot.dataset.target === id) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((sec) => navObserver.observe(sec));

  dotBtns.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetId = dot.dataset.target;
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        soundEngine.playChime();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFullscreenModal();
      closeCustomizer();
    }
  });
});

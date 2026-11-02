/**
 * ====================================================================
 * PERSONALIZATION CONFIGURATION FILE
 * ====================================================================
 * Customize this file to personalize the apology experience for your best friend!
 * All texts, photos, memories, and reasons can be easily modified here.
 */

const CONFIG = {
  // Best Friend's Name / Nickname
  friendName: "Bestie", // e.g., "Aisha", "Priya", "Simran", "Chirkut", "Favorite Human"
  senderName: "Yours Truly", // e.g., "Your idiot best friend", "Rahul", etc.

  // Website Header Title
  websiteTitle: "For My Favorite Person ❤️",

  // Audio Configuration
  audio: {
    // If you have a custom MP3 audio URL or local file path (e.g., 'music.mp3'), paste it here:
    customAudioUrl: "", // Leave blank to use the built-in gentle ambient music-box chime synthesizer!
    songTitle: "Gentle Ambient Piano & Music Box",
    autoPlayPrompt: true,
  },

  // Chapter 1: Interactive Letter
  letter: {
    salutation: "My Dearest Best Friend,",
    paragraphs: [
      "I’ve been sitting here for hours trying to find the exact words that could mend what I fractured. Every time I think about how I made you feel, my chest feels heavy.",
      "You are the rarest, most precious part of my life. You've held my secrets, tolerated my weirdest quirks, and brought light into rooms I thought would stay dark forever.",
      "I was careless, thoughtless, and completely in the wrong. Losing your smile — even for a single day — makes everything feel dull and empty. I never want to be the reason tears well up in your eyes.",
      "I value our friendship more than my stupid ego or any silly mistake. You mean the world to me, and I promise from the bottom of my heart to be the friend you truly deserve.",
    ],
    closing: "Forever & always your best friend,",
  },

  // Chapter 2: The Apology & Promises
  apology: {
    mainHeading: "I know I hurt you, and I'm genuinely sorry.",
    subHeading: "No excuses, no justifications — just my honest, remorseful heart acknowledging where I failed.",
    personalNote: "Friendship isn't about never making mistakes; it's about owning them, learning from them, and loving someone enough to never repeat them. I am deeply sorry for causing you pain.",
    promises: [
      {
        icon: "headphones",
        title: "Patience & Deep Listening",
        desc: "I promise to listen to you with an open heart without being defensive or dismissive.",
      },
      {
        icon: "shield-check",
        title: "Guarding Your Peace",
        desc: "I will protect our safe space and always treat your emotions with utmost gentleness.",
      },
      {
        icon: "sparkles",
        title: "Valuing Your Presence",
        desc: "I will never take your kindness, time, and unconditional support for granted ever again.",
      },
      {
        icon: "heart",
        title: "Being Your Biggest Cheerleader",
        desc: "Through every high, low, goofy laugh and silent tear, I promise to stand firmly by your side.",
      },
    ],
  },

  // Chapter 3: Our Little World (Polaroid Gallery)
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      caption: "Laughter that cures everything",
      date: "A Day to Remember",
      note: "That day we laughed until our stomachs hurt and completely forgot why we were ever stressed.",
    },
    {
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Endless Chai & Late Talks",
      date: "Midnight Conversations",
      note: "Talking about everything and nothing until 3 AM. No one gets my chaotic mind like you do.",
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      caption: "Partner in all crimes",
      date: "Unfiltered Us",
      note: "From spontaneous food runs to being absolute goofballs in public without caring who's watching.",
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      caption: "Golden hour, golden soul",
      date: "Pure Magic",
      note: "Your energy is pure sunshine. Never let anyone (especially not me) dim that radiant light.",
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "My forever safe place",
      date: "Through Thick & Thin",
      note: "Whenever the world gets overwhelming, just one text from you makes everything feel alright.",
    },
    {
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
      caption: "Two weirdos, one wavelength",
      date: "Soul Connection",
      note: "You don't just know my stories; you've lived them with me. I wouldn't trade this bond for anything.",
    },
  ],

  // Chapter 4: 5 Reasons You Are Irreplaceable (3D Flip Cards)
  specialReasons: [
    {
      id: 1,
      badge: "Reason 01",
      icon: "smile",
      title: "Your Contagious Laugh",
      frontSnippet: "The way you giggle without holding back...",
      backText: "Your laugh is an instant antidepressant. The moment you start wheezing or cracking up at the dumbest memes, the entire room lights up.",
    },
    {
      id: 2,
      badge: "Reason 02",
      icon: "heart-handshake",
      title: "Your Empathy & Golden Heart",
      frontSnippet: "How deeply you care for people...",
      backText: "You notice when someone is quiet. You care when no one else does. Your warmth and emotional intelligence are rare treasures in this world.",
    },
    {
      id: 3,
      badge: "Reason 03",
      icon: "moon",
      title: "Our 2 AM Heart-to-Hearts",
      frontSnippet: "The deep, unfiltered midnight talks...",
      backText: "There's nobody else I can be 100% vulnerable with. We can jump from existential philosophy to unhinged gossip in 5 seconds flat.",
    },
    {
      id: 4,
      badge: "Reason 04",
      icon: "shield-check",
      title: "You Never Judge Me",
      frontSnippet: "Knowing all my flaws and staying...",
      backText: "You've seen me at my absolute worst, messiest, and most confused — yet you've never looked down on me. You make me feel accepted.",
    },
    {
      id: 5,
      badge: "Reason 05",
      icon: "sparkles",
      title: "Simply Being YOU",
      frontSnippet: "Your one-of-a-kind presence...",
      backText: "You don't need to try or pretend. Just existing as yourself makes the world a much warmer, kinder, and happier place for me.",
    },
  ],

  // Chapter 5: Playful Pleading Messages for "Abhi nahi 😤"
  pleadingMessages: [
    "Ek baar aur soch lo please? 🥺 Mai tumhari favorite treat khilaunga!",
    "Aise gussa karogi toh mai ro dunga sach me... 😭 Dekho teddy bhi sad hai!",
    "Mummy kasam ab kabhi aisi galti nahi hogi! 100 baar sorry! 🙏",
    "Accha chalo pizza party meri taraf se + unlimited treats! Deal? 🍕✨",
    "Dekho teddy ke aankhon me aansu aa gaye... ab toh smile kar do? 🧸🥺",
    "Itna gussa health ke liye accha nahi hota bestie... maaf kardo na please? 💖",
    "Main kaan pakad ke uthak-baithak karne ko taiyaar hoon! Ek chance toh banta hai! 🥹",
    "Tum meri favorite human ho... bina tumhare baat kiye mera din nahi kat-ta! 🥺❤️",
  ],

  // Chapter 6: Grand Finale
  finale: {
    badge: "Official Certificate of Forgiveness 📜✨",
    title: "Best Friends Forever, No Matter What!",
    message: "Thank you for having the biggest heart in the universe. I promise to cherish our bond, celebrate your wins, stand by you through every storm, and never take your presence for granted again.",
    friendshipSeal: "SEALED WITH LOVE & SINCERITY",
  },
};

// Export configuration so it's globally accessible
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

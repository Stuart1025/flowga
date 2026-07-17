export interface YogaClass {
  slug: string;
  title: string;
  instructorSlug: string;
  tags: string[];
  location: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export const classes: YogaClass[] = [
  {
    slug: 'hot-yoga',
    title: 'Hot Yoga',
    instructorSlug: 'karen',
    tags: ['Heated Practice', 'Dynamic Yoga'],
    location: 'Sydney',
    date: 'Monday',
    time: '12:30 AM',
    description:
      "Welcome to our invigorating Hot Yoga class, where the heat intensifies the practice and elevates your physical and mental experience. Flow through postures in a heated room to warm muscles quickly, deepen stretches, and encourage detoxification through sweating, synchronizing breath with movement to achieve focus and mental clarity.",
    image: '/images/Class-Hot-Yoga.jpg',
  },
  {
    slug: 'kundalini-yoga',
    title: 'Kundalini Yoga',
    instructorSlug: 'karen',
    tags: ['Yoga for Inner Strength', 'Energy Awakening'],
    location: 'London',
    date: 'Thursday',
    time: '11:30 PM',
    description:
      'This class combines breathwork, movement, mantra, and meditation to unlock your inner potential and expand your awareness. Practitioners experience physical postures called kriyas alongside rhythmic breathing techniques that stimulate energy flow along the spine, incorporating sacred mantras and meditation to elevate consciousness and foster self-discovery.',
    image: '/images/Class-Kundalini-Yoga.jpg',
  },
  {
    slug: 'yin-yoga',
    title: 'Yin Yoga',
    instructorSlug: 'jasmine',
    tags: ['Beginner-Friendly Yoga', 'Yoga For Relaxation'],
    location: 'New York',
    date: 'Monday',
    time: '11:30 PM',
    description:
      'A slow-paced and introspective practice, encouraging mindfulness and a deep connection to your breath and sensations. By holding poses for several minutes, practitioners access deeper body layers to enhance flexibility and circulation, cultivating relaxation, stress relief, and self-discovery.',
    image: '/images/Class-Yin-Yoga.jpg',
  },
  {
    slug: 'iyengar-yoga',
    title: 'Iyengar Yoga',
    instructorSlug: 'danny',
    tags: ['Alignment Based Yoga', 'Meditation and Breathing Techniques'],
    location: 'London',
    date: 'Saturday',
    time: '11:30 PM',
    description:
      'This transformative class emphasizes precision and alignment as foundational elements. Students explore posture subtleties to enhance strength, flexibility, and balance through proper body alignment, with props like blocks, straps, and blankets making poses accessible to all experience levels.',
    image: '/images/Class-Iyengar-Yoga.jpg',
  },
  {
    slug: 'vinyasa-flow',
    title: 'Vinyasa Flow',
    instructorSlug: 'karen',
    tags: ['Dynamic Yoga', 'Yoga For Energy'],
    location: 'Sydney',
    date: 'Saturday',
    time: '12:30 AM',
    description:
      'Movement becomes a dance, and breath guides your every step. Vinyasa Flow is a dynamic style linking breath with movement through rhythmic sequences, emphasizing synchronized breathing with postures to develop strength, flexibility, and vitality.',
    image: '/images/Class-Vinyasa-Flow.jpg',
  },
  {
    slug: 'hatha-yoga',
    title: 'Hatha Yoga',
    instructorSlug: 'rona',
    tags: ['Mind-Body Wellness', 'Beginner-Friendly Yoga', 'Meditation and Breathing Techniques'],
    location: 'New York',
    date: 'Saturday',
    time: '12:00 AM',
    description:
      'Welcome to our rejuvenating Hatha Yoga class, where harmony and balance await you. The session combines physical postures and breathing techniques to align mind, body, and spirit, promoting flexibility and strength while developing breath-awareness for deep relaxation and mental clarity.',
    image: '/images/Class-Hatha-Yoga.jpg',
  },
];

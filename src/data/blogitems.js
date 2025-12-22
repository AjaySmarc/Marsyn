const blogData = [
  {
    id: 1,
    title: 'How I Started Making Videos Without Confidence, Camera, or Skills',
    excerpt:
      'I delayed content creation for years thinking I needed confidence and perfect gear. Here’s how I finally started and what actually matters.',
    content: `
I want to be honest — I didn’t start making videos because I was confident.
I started because I was tired of overthinking.

In the beginning, I had zero camera presence, awkward pauses, and constant self-doubt.
But here’s the truth no one tells beginners: confidence is a side-effect, not a prerequisite.

I started by recording short videos only for myself. No posting. No pressure.
Just talking to the camera like I was explaining something to a friend.

Slowly, I realized:
- Nobody cares about perfection
- People connect with honesty
- Action beats motivation every single time

If you’re waiting to feel “ready”, stop.
Record today. Improve tomorrow.
`,
    author: 'Ajay',
    date: '2024-02-01',
    readTime: '10 min read',
    category: 'content',
    tags: ['videos', 'beginners', 'confidence', 'content'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500',
    featured: true,
    likes: 68,
    comments: 19,
  },

  {
    id: 2,
    title: 'The Biggest Mistake New Creators Make When Starting Videos',
    excerpt:
      'Most beginners focus on the wrong things when starting content creation. I made this mistake too.',
    content: `
When I started, I obsessed over thumbnails, cameras, lighting, and editing.
None of that mattered.

The real mistake?
Trying to impress instead of trying to help.

Once I shifted my mindset from:
"How do I look smart?" → "How do I add value?"

Everything changed.

If one person learns something from your video, it’s already a success.
Start ugly. Stay consistent. Learn in public.
`,
    author: 'Ajay',
    date: '2024-02-03',
    readTime: '8 min read',
    category: 'content',
    tags: ['creators', 'mistakes', 'videos'],
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=500',
    featured: false,
    likes: 51,
    comments: 11,
  },

  {
    id: 3,
    title: 'What Building a Startup Taught Me About Reality',
    excerpt:
      'Startups are glorified online. Reality is very different — and much more valuable.',
    content: `
Building a startup taught me discipline, not motivation.
Some days nothing works. Some days you question everything.

But the biggest lesson?
Execution beats ideas.

Most people have ideas.
Very few stay when results are slow.

If you want to build:
- Learn to ship
- Learn to fail fast
- Learn to stay when excitement dies
`,
    author: 'Ajay',
    date: '2024-02-05',
    readTime: '9 min read',
    category: 'startup',
    tags: ['startup', 'founder', 'lessons'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500',
    featured: true,
    likes: 72,
    comments: 21,
  },

  {
    id: 4,
    title: 'Startup Life Is Lonely — And That’s Okay',
    excerpt:
      'Nobody talks about the loneliness of building something from scratch.',
    content: `
When you build a startup, most people won’t understand your choices.
Late nights. No immediate rewards. Constant uncertainty.

Loneliness is part of the journey.
But it also builds clarity, focus, and resilience.

If you feel alone — you’re not behind.
You’re just early.
`,
    author: 'Ajay',
    date: '2024-02-07',
    readTime: '7 min read',
    category: 'startup',
    tags: ['startup', 'mindset', 'founder'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500',
    featured: false,
    likes: 47,
    comments: 9,
  },

  {
    id: 5,
    title: 'What I Wish I Knew as a New Student',
    excerpt:
      'Marks matter, but skills and mindset matter more. Here’s what no one told me early.',
    content: `
As a student, I believed success meant marks.
Reality taught me success means adaptability.

Skills compound.
Curiosity compounds.
Consistency compounds.

Start building skills early.
Learn how to learn.
That’s the real advantage.
`,
    author: 'Ajay',
    date: '2024-02-10',
    readTime: '8 min read',
    category: 'students',
    tags: ['students', 'career', 'learning'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500',
    featured: true,
    likes: 63,
    comments: 17,
  },

  {
    id: 6,
    title: 'New Students: It’s Okay to Be Confused',
    excerpt: 'Confusion isn’t failure. It’s part of growth.',
    content: `
Every beginner feels lost.
The difference is not intelligence — it’s persistence.

Confusion means you’re learning something new.
Stay curious. Stay patient.
`,
    author: 'Ajay',
    date: '2024-02-12',
    readTime: '6 min read',
    category: 'students',
    tags: ['students', 'mindset'],
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500',
    featured: false,
    likes: 39,
    comments: 6,
  },

  {
    id: 7,
    title: 'Why Consistency Beats Talent in Content Creation',
    excerpt: 'Talent is overrated. Consistency is underrated.',
    content: `
I’ve seen talented people quit.
And average people win.

The difference?
They showed up every day.

Consistency builds skill.
Skill builds confidence.
`,
    author: 'Ajay',
    date: '2024-02-14',
    readTime: '7 min read',
    category: 'content',
    tags: ['consistency', 'content'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500',
    featured: false,
    likes: 44,
    comments: 8,
  },

  {
    id: 8,
    title: 'My Honest Advice to Aspiring Founders',
    excerpt: 'If you want comfort, don’t start a startup.',
    content: `
Startups demand patience, self-belief, and execution.
It’s not glamorous — it’s demanding.

But if you love building, it’s worth it.
`,
    author: 'Ajay',
    date: '2024-02-16',
    readTime: '8 min read',
    category: 'startup',
    tags: ['founder', 'startup'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
    featured: false,
    likes: 52,
    comments: 12,
  },

  {
    id: 9,
    title: 'Why You Should Start Before You’re Ready',
    excerpt: 'Waiting for perfection is the fastest way to never start.',
    content: `
No one starts ready.
You start, then you become ready.

Action creates clarity.
`,
    author: 'Ajay',
    date: '2024-02-18',
    readTime: '5 min read',
    category: 'mindset',
    tags: ['mindset', 'growth'],
    image: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?w=500',
    featured: false,
    likes: 41,
    comments: 7,
  },

  {
    id: 10,
    title: 'Documenting My Journey Instead of Pretending I’m Perfect',
    excerpt:
      'I stopped trying to look successful and started documenting honestly.',
    content: `
People don’t need perfection.
They need relatability.

I document my journey so others can learn alongside me.
`,
    author: 'Ajay',
    date: '2024-02-20',
    readTime: '6 min read',
    category: 'content',
    tags: ['journey', 'authenticity'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500',
    featured: true,
    likes: 58,
    comments: 14,
  },
];

export default blogData;

const categories = [
  { id: 'all', name: 'All Posts', count: blogData.length },
  ...Object.values(
    blogData.reduce((acc, blog) => {
      const cat = blog.category;
      if (!acc[cat]) {
        acc[cat] = {
          id: cat,
          name: cat.charAt(0).toUpperCase() + cat.slice(1),
          count: 1,
        };
      } else {
        acc[cat].count += 1;
      }
      return acc;
    }, {})
  ),
];

const popularTags = Array.from(
  blogData.reduce((set, blog) => {
    blog.tags.forEach((tag) => set.add(tag));
    return set;
  }, new Set())
);

export { blogData, categories, popularTags };

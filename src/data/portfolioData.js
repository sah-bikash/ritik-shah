export const personalInfo = {
  name: 'Ritik Shah',
  firstName: 'Ritik',
  lastName: 'Shah',
  title: 'Software Engineer',
  tagline: 'Crafting elegant digital experiences with clean code and modern design.',
  description:
    'I design and build premium, scalable web applications that blend beautiful interfaces with robust engineering. Passionate about creating software that makes a meaningful impact.',
  email: 'ritiksah267@gmail.com',
  phone: '+977 9809689000',
  location: 'Kathmandu, Nepal',
  website: 'https://ritikshah.dev',
  availability: 'Open to opportunities',
};

export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/itzur.hritik',
    icon: 'instagram',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ritik.sah.123829',
    icon: 'facebook',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/ritiksah_07',
    icon: 'twitter',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@shah_ritik02',
    icon: 'tiktok',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    icon: 'linkedin',
  },
];

export const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contact', href: 'contact' },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 78 },
      { name: 'Linux', level: 82 },
    ],
  },
];

export const services = [
  {
    title: 'Web Development',
    description:
      'Building responsive, performant web applications using modern technologies and best practices.',
    icon: 'globe',
  },
  {
    title: 'Full Stack Development',
    description:
      'End-to-end application development from database design to polished frontend interfaces.',
    icon: 'layers',
  },
  {
    title: 'UI Engineering',
    description:
      'Creating pixel-perfect, accessible user interfaces with smooth animations and interactions.',
    icon: 'palette',
  },
  {
    title: 'API Development',
    description:
      'Designing and building scalable RESTful and GraphQL APIs with robust authentication.',
    icon: 'code',
  },
  {
    title: 'Performance Optimization',
    description:
      'Auditing and optimizing applications for speed, SEO, and exceptional user experience.',
    icon: 'zap',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Deploying and managing applications on cloud platforms with scalable infrastructure.',
    icon: 'cloud',
  },
];

export const projects = [
  {
    id: 1,
    title: 'CloudSync Dashboard',
    description:
      'A real-time cloud monitoring dashboard with live metrics, alerts, and team collaboration features built with React and WebSockets.',
    image: null,
    tags: ['React', 'Node.js', 'WebSocket', 'Tailwind CSS', 'MongoDB'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'EcoTracker Mobile App',
    description:
      'A sustainability tracking application that helps users monitor their carbon footprint with gamified challenges and community features.',
    image: null,
    tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'DevFlow Platform',
    description:
      'An AI-powered developer productivity platform featuring code reviews, automated testing insights, and workflow management.',
    image: null,
    tags: ['Next.js', 'Python', 'PostgreSQL', 'OpenAI', 'Docker'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    location: 'Remote',
    period: 'Jan 2024 — Present',
    description:
      'Leading frontend architecture and development of enterprise-grade applications. Mentoring junior engineers and establishing coding standards.',
    highlights: [
      'Led migration to Next.js reducing load times by 40%',
      'Architected component library used across 5 products',
      'Mentored team of 4 junior developers',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Digital Solutions Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Jun 2022 — Dec 2023',
    description:
      'Developed and maintained full-stack web applications serving 50K+ users. Collaborated with design and product teams.',
    highlights: [
      'Built real-time notification system with WebSockets',
      'Improved API response times by 60%',
      'Implemented CI/CD pipeline reducing deployment time',
    ],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartUp Hub',
    location: 'Kathmandu, Nepal',
    period: 'Jan 2021 — May 2022',
    description:
      'Started career building web applications and learning best practices in a fast-paced startup environment.',
    highlights: [
      'Developed 10+ client websites from scratch',
      'Learned React, Node.js, and modern web stack',
      'Contributed to open-source projects',
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science",
    institution: 'Tribhuvan University',
    location: 'Nepal',
    period: '2019 — 2023',
    description:
      'Focused on software engineering, data structures, algorithms, and web technologies.',
    gpa: '3.8/4.0',
  },
  {
    id: 2,
    degree: 'Higher Secondary Education',
    institution: 'National School of Sciences',
    location: 'Nepal',
    period: '2017 — 2019',
    description: 'Science stream with focus on Mathematics and Computer Science.',
    gpa: '3.7/4.0',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialUrl: '#',
  },
  {
    id: 2,
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialUrl: '#',
  },
  {
    id: 3,
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialUrl: '#',
  },
  {
    id: 4,
    title: 'Google UX Design Certificate',
    issuer: 'Google (Coursera)',
    date: '2022',
    credentialUrl: '#',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content:
      'Ritik is an exceptional engineer who consistently delivers high-quality work. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.',
    avatar: null,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO at StartupXYZ',
    content:
      'Working with Ritik was a game-changer for our team. He brought fresh perspectives and modern best practices that elevated our entire codebase.',
    avatar: null,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Senior Designer at DesignHub',
    content:
      'Ritik bridges the gap between design and development perfectly. He implements pixel-perfect designs and always suggests improvements that enhance the user experience.',
    avatar: null,
  },
];

export const achievements = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'GitHub Contributions', value: 1200, suffix: '+' },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications in 2026',
    excerpt:
      'Explore modern patterns and architectures for building production-ready React applications that scale.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'React',
    url: '#',
  },
  {
    id: 2,
    title: 'The Future of Web Performance',
    excerpt:
      'How new web APIs and modern frameworks are pushing the boundaries of what\'s possible on the web.',
    date: '2024-12-20',
    readTime: '6 min read',
    category: 'Web Dev',
    url: '#',
  },
  {
    id: 3,
    title: 'Mastering TypeScript for Large Codebases',
    excerpt:
      'Advanced TypeScript patterns and techniques that will make your code more maintainable and type-safe.',
    date: '2024-11-10',
    readTime: '10 min read',
    category: 'TypeScript',
    url: '#',
  },
];
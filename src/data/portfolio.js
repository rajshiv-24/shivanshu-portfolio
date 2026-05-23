export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { name: 'Java', level: 85, color: '#f0997b', category: 'Language' },
  { name: 'Spring Boot', level: 80, color: '#7c6ef5', category: 'Backend' },
  { name: 'Angular', level: 82, color: '#dd0031', category: 'Frontend' },
  { name: 'React.js', level: 78, color: '#61dafb', category: 'Frontend' },
  { name: 'Node.js', level: 75, color: '#5dcaa5', category: 'Backend' },
  { name: 'Express.js', level: 75, color: '#888', category: 'Backend' },
  { name: 'PostgreSQL', level: 78, color: '#336791', category: 'Database' },
  { name: 'MongoDB', level: 72, color: '#4db33d', category: 'Database' },
  { name: 'JavaScript', level: 85, color: '#f7df1e', category: 'Language' },
  { name: 'REST APIs', level: 88, color: '#7c6ef5', category: 'Backend' },
  { name: 'Git / GitHub', level: 80, color: '#f05032', category: 'Tool' },
  { name: 'JWT Auth', level: 78, color: '#5dcaa5', category: 'Backend' },
];

export const projects = [
  {
    id: 1,
    num: '01',
    name: 'Hotel Booking Management System',
    description:
      'A full-stack hotel reservation platform with secure JWT authentication, real-time room availability tracking, and streamlined online booking. Admin dashboard for managing rooms, monitoring payments, and updating room categories.',
    longDesc: [
      'Role-based access for Admins and Customers',
      'JWT-secured authentication & session management',
      'Room availability engine with booking workflows',
      'Admin dashboard: payments, reservations, categories',
      'Live deployed on Vercel (frontend) + Render (backend)',
    ],
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
    accent: '#7c6ef5',
    github: 'https://github.com',
    live: 'https://vercel.com',
    category: 'Full Stack',
  },
  {
    id: 2,
    num: '02',
    name: 'Learning Management System',
    description:
      'A MERN-stack e-learning platform supporting Teacher and Student roles. Teachers manage courses and lectures; students preview, purchase, and dynamically track their learning progress.',
    longDesc: [
      'Dual-role system: Teacher & Student dashboards',
      'Course creation, lecture upload & management',
      'Preview access + course purchase flow',
      'Learning progress tracking per student',
      'Secure authentication with JWT',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    accent: '#5dcaa5',
    github: 'https://github.com',
    live: null,
    category: 'MERN Stack',
  },
  {
    id: 3,
    num: '03',
    name: 'Digital Gold Wallet',
    description:
      'A fintech-inspired virtual gold trading platform. Supports role-based access for Admins, Users, and Vendors. Features include virtual gold buy/sell, physical delivery requests, and vendor management.',
    longDesc: [
      'Inspired by SafeGold fintech application',
      'Buy/sell virtual gold with live balance tracking',
      'Physical gold delivery request system',
      'Vendor registration & branch management',
      'Admin control panel for customer transactions',
    ],
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
    accent: '#ef9f27',
    github: 'https://github.com',
    live: null,
    category: 'Fintech',
  },
];

export const achievements = [
  {
    icon: '⚡',
    title: '170+ DSA Problems Solved',
    desc: 'Solved problems across LeetCode, Code360, and HackerRank spanning arrays, trees, graphs, dynamic programming, and more.',
    color: '#7c6ef5',
  },
  {
    icon: '⭐',
    title: 'HackerRank 3-Star Badges',
    desc: 'Earned prestigious 3-star badges in Problem Solving, Python, and C Language — validating algorithmic proficiency.',
    color: '#ef9f27',
  },
  {
    icon: '🚀',
    title: 'Multiple Full-Stack Projects',
    desc: 'Built production-ready applications in fintech, hospitality, and ed-tech using Angular, Spring Boot, MERN, and PostgreSQL.',
    color: '#5dcaa5',
  },
  {
    icon: '🎓',
    title: 'Academic Excellence',
    desc: 'Maintained CGPA of 8.07 in B.Tech CSE, 93% in Class XII, and 94.4% in Class X — consistent top performer.',
    color: '#f0997b',
  },
];

export const contactLinks = [
  { label: 'Email', value: 'rajputshivanshu589@gmail.com', href: 'mailto:rajputshivanshu589@gmail.com', icon: 'Mail' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shivanshu', href: 'https://www.linkedin.com/in/rajshivan/', icon: 'Link2' },
  { label: 'GitHub', value: 'github.com/shivanshu', href: 'https://github.com/rajshiv-24', icon: 'GitFork' },
  { label: 'LeetCode', value: 'leetcode.com/shivanshu', href: 'https://leetcode.com/u/ShivanshuAbes/', icon: 'Code2' },
  { label: 'HackerRank', value: 'hackerrank.com/shivanshu', href: 'https://www.hackerrank.com/profile/CSC2200320120172', icon: 'Trophy' },
];

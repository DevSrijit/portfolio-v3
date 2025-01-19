import { Icons } from "@/components/icons";
import { ResumeIcon } from "@radix-ui/react-icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Srijit Ghosh",
  initials: "SG",
  url: "https://srijit.co",
  location: "Kolkata, IN",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "A creative technologist, and full stack developer, currently in my final year of high school.",
  summary:
    "Developer, Nerd and Tech lover, I fuse technicality and aestheticism to bring a unique dimension to my work. Passionate about beauty, I give life to projects that captivate and convert. I usually go around creating websites with Next.js, doing random hardware stuff with Raspberry Pis, ESPs, and Arduinos, self hosting on my VPS, and creating silly little bots and automations with Python.",
  avatarUrl: "/srijit.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Appwrite",
    "MongoDB",
    "Docker",
    "Java",
    "C++",
    "C",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "Express.js",
    "Three.js",
    "React Three Fiber",
    "Spline",
    "Git",
    "AWS",
    "Vercel",
    "Netlify",
    "Fly.io",
    "Postman",
    "Figma",
    "Google Analytics",
    "Microsoft Clarity",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://read.cv/srijit", icon: Icons.resume, label: "Resume" },
  ],
  contact: {
    email: "mail@srijit.co",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devsrijit",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/devsrijit",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/cheeseblock011",
        icon: Icons.x,

        navbar: true,
      },
      IG: {
        name: "Instagram",
        url: "https://www.instagram.com/cheeseblock011",
        icon: Icons.instagram,
        navbar: true,
      },
      Threads: {
        name: "Threads",
        url: "https://threads.net/cheeseblock011",
        icon: Icons.threads,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mail@srijit.co",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hack Club - Global",
      href: "https://hackclub.com",
      badges: [],
      location: "Remote",
      title: "Community Team at Hack Club",
      logoUrl: "/hackclub.png",
      start: "April 2021",
      end: "Present",
      description:
        "Contributed to the global Hack Club community by supporting students in their journey to learn programming and organize events. Played a leadership role in managing community initiatives and providing mentorship to club leaders around the world.",
    },
    {
      company: "CodeDay",
      href: "https://cdkol.live",
      badges: [],
      location: "Remote",
      title: "Regional Manager of CD Kolkata",
      logoUrl: "/codeday.jpg",
      start: "April 2022",
      end: "Present",
      description:
        "Organized multiple CodeDay events in Kolkata, fostering a creative environment for students to develop innovative projects and learn new technologies. Managed event planning, sponsorships, and volunteer coordination, making CodeDay Kolkata a success.",
    },
    {
      company: "Hack Club - The Code Cafe",
      href: "https://hackclub.com",
      badges: [],
      location: "Remote",
      title: "Club Leader",
      logoUrl: "/hackclub.png",
      start: "April 2022",
      end: "Present",
      description:
        "Led the school coding club, organizing workshops and hackathons to inspire peers to explore programming. Focused on creating an inclusive environment where students could learn, collaborate, and build meaningful projects.",
    },
  ],
  education: [
    {
      school: "School",
      degree: "High School",
      href: "https://read.cv/srijit",
      target: "_blank",
      logoUrl: "/school.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Harvard - CS50",
      href: "https://read.cv/srijit",
      target: "_blank",
      degree: "CS50: Introduction to Computer Science",
      logoUrl: "/harvard.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "CodeDay Kolkata 2024",
      dates: "July 22nd - 23th, 2024",
      location: "Kolkata, India",
      description:
        "Organized the second edition of CodeDay Kolkata, a high school hackathon attended by 100+ students nationwide.",
      image:
        "/codeday.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/codeday-kolkata/site",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://cdkol.live",
        },
      ],
    },
    {
      title: "CodeDay Kolkata 2023",
      dates: "July 27th - 28th, 2023",
      location: "Kolkata, India",
      description:
        "Organized Kolkata's first high school hackathon, attended by 60+ students nationwide.",
      image:
        "/codeday.jpg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://cdkol.live",
        },
      ],
    },
    {
      title: "Epoch",
      dates: "December 31st - 1st January, 2023",
      location: "Delhi, India",
      description:
        "Created a night sky simulation using Three.js and WebGL to visualize the night sky in real-time.",
      image:
        "/hackclub.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://epoch.hackclub.com",
        },
      ],
    },
  ],
} as const;

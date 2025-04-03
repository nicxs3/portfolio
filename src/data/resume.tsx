import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nic Santos",
  initials: "NS",
  url: "https://nicsantos.vercel.app",
  location: "South San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring Software Engineer.",
  summary:
    "Currently at University of California, Santa Barbara studying Computer Engineering. Looking for internships!",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "SystemVerilog",
    "Docker",
    "SQL",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nicolas.x.santos@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nicxs3",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/nicolasxsantos",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nic_xs",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@nicsantos3",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Computer Science Theory Lab",
      href: "https://ersp.cs.ucsb.edu/2023-2024-projects/group-5-2023-2024",
      badges: [],
      location: "Santa Barbara, CA",
      title: "Undergraduate Researcher",
      logoUrl: "/ucsb.jpg",
      start: "September 2024",
      end: "Present",
      description:
        "Creating algorithms and market mechanisms to automate the TA-Course allocation problem for the CS Department.",
    },
    {
      company: "Cypress Lawn",
      badges: [],
      href: "https://cypresslawn.com",
      location: "Colma, CA",
      title: "Software Engineer Intern",
      logoUrl: "/cypress.jpg",
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed and implemented SQL-based automation to optimize data input and retrieval, enhancing accountants' workflow efficiency and access to critical financial information.",
    },
    {
      company: "ArchLab",
      href: "https://www.arch.cs.ucsb.edu",
      badges: [],
      location: "Santa Barbara, CA",
      title: "Undergraduate Research Assistant",
      logoUrl: "/ucsb.jpg",
      start: "April 2024",
      end: "June 2024",
      description:
        "Researched unary computing and spiking neural networks, developing Python-based models with PyTorch and snnTorch to enhance memory access efficiency and validate computational techniques in next-gen architectures.",
    },
  ],
  education: [
    {
      school: "University of California, Santa Barbara",
      href: "https://www.ucsb.edu",
      degree: "Bachelor of Science in Computer Engineering",
      logoUrl: "/seal.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "LED Infinity Cube",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - March 2024",
      active: true,
      description:
        "Wi",
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

      image: "",
      video:
        "https://youtu.be/hVTgFrld8cU",
    },
  ],
};

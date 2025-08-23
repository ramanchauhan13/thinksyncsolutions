import foodhubImg from '@/assets/foodhub.jpg'
import erpImg from '@/assets/erp.jpg'
import ngoImg from '@/assets/ngo.jpg'
import blogImg from '@/assets/blog.jpg'
import dzineImg from '@/assets/dzine.jpg'
import hebocImg from '@/assets/heboc.jpg'

import raman from '../assets/raman.jpg'
import umesh from '../assets/umesh.jpg'
import vaibhav from '../assets/vaibhav1.png'

export const teamMembers = [
  {
    id: 1,
    name: "Raman Chauhan",
    role: "Full-Stack Architect",
    specialty: "MERN Stack & Scalable Systems",
    description: "Expert in building scalable MERN stack applications with seamless user interfaces and robust backend APIs.",
    icon: "Code",
    image: raman,
    color: "from-indigo-400 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20",
    skills: ["React", "Node.js", "React Native", "Next.js", "MongoDB"],
    social: { linkedin: "https://www.linkedin.com/in/ramanchauhan13" }
  },
  {
    id: 2,
    name: "Umesh Singh Mehta",
    role: "Full-Stack Architect",
    specialty: "TypeScript & Modern Web Engineering",
    description: "Delivers high-performance full-stack solutions with a focus on TypeScript and modern web development practices.",
    icon: "Code",
    image: umesh,
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-900/20 to-emerald-900/20",
    skills: ["React", "Node.js", "TypeScript", "Next.js", "MongoDb"],
    social: { linkedin: "https://www.linkedin.com/in/umesh-singh-mehta-93819a194" }
  },
  {
    id: 3,
    name: "Vaibhav Tyagi",
    role: "Full-Stack Architect",
    specialty: "Cross-Platform App Development",
    description: "Specializes in building responsive mobile-first web and native apps using React, React Native, and MongoDB.",
    icon: "Code",
    image: vaibhav,
    color: "from-orange-400 to-yellow-500",
    bgColor: "bg-gradient-to-br from-orange-900/20 to-yellow-900/20",
    skills: ["React", "Node.js", "React-Native", "Next.js", "MongoDb"],
    social: { linkedin: "https://www.linkedin.com/in/vaibhavtyagi01" }
  }
];

export const projects = [
 {
  id: 1,
  title: "FoodHub",
  category: "College Food Ordering System",
  description: "A MERN stack platform that connects students with on-campus restaurants for seamless food ordering and admin-controlled delivery management.",
  image: foodhubImg, // Replace with actual image or link
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
  stats: "50+ Users",
  link: "https://foodhubui.vercel.app/" 
},
 {
  id: 2,
  title: "ERP-Portal",
  category: "College ERP Platform",
  description: "An all-in-one ERP platform for colleges to manage attendance, subjects, homework, bulletins, and more — built for seamless communication between students, staff, and admin.",
  image: erpImg,
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
  stats: "3 User Roles",
  link: "https://erp-portal-frontend.onrender.com/"
},

 {
  id: 3,
  title: "DonateEase",
  category: "NGO Donation Platform",
  description: "A MERN-based donation platform that connects donors with NGOs to donate clothes, books, toys, and essentials — with pickup scheduling and role-based access.",
  image: ngoImg, // Or use import from src/assets
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
  stats: "100+ Donations | 2 User Roles",
  link: "https://github.com/UmeshSingh2000/NGO"
},
{
  id: 4,
  title: "Potatotrails",
  category: "Personal Blogging Platform",
  description: "A full-featured MERN-based blog website where users can read and share articles. Includes user authentication, rich text editor, categories, and admin controls for content moderation.",
  image: blogImg,
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
  stats: "50+ Posts | 2 User Roles (Admin, Reader)",
  link: "https://potatotrails.vercel.app/"
},
{
  id: 5,
  title: "Dzine Tech Solution",
  category: "Computer Coaching Website",
  description: "A modern MERN-based website for a computer coaching institute. Offers detailed course listings, student enrollment, admin dashboard for managing batches and inquiries, and a clean, responsive UI. Designed to streamline student engagement and course management.",
  image: dzineImg, // Replace with your actual image variable or path
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
  stats: "3 User Roles (Admin, Instructor, Student)",
  link: "https://dzinetechsolutions.vercel.app/" // Replace with actual link if hosted
},
{
  id: 6,
  title: "Heboc Events",
  category: "Event Management Website",
  description: "A dynamic MERN-based website for an event management company. Showcases services, featured events, and client testimonials. Includes an admin dashboard to manage bookings, event listings, and team inquiries. Built for smooth client interaction and service visibility.",
  image: hebocImg, // Replace with your actual image variable or path
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Vite"],
  // stats: "20+ Events | 3 User Roles (Admin, Client, Team)",
  link: "https://hebocevents.in/" // Replace with actual link if hosted
}

];

export const services = [
  {
    icon: "Globe",
    title: "Web Development",
    description: "Custom web apps using MERN, Next.js, and modern technologies",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: "Smartphone",
    title: "Android App Development",
    description: "High-performance Android apps built with React Native",
    color: "from-green-400 to-lime-500"
  },
  {
    icon: "Cloud",
    title: "Cloud Deployment",
    description: "Secure and scalable deployments using Render, and Vercel",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: "ShieldCheck",
    title: "Security & Optimization",
    description: "SSL setup, backend security, and performance optimization",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: "Layers",
    title: "Custom Software Solutions",
    description: "End-to-end solutions for startups, and small businesses",
    color: "from-teal-400 to-emerald-500"
  },
  {
    icon: "LifeBuoy",
    title: "Ongoing Support & Maintenance",
    description: "Post-launch support, bug fixes, and tech upgrades",
    color: "from-yellow-400 to-orange-500"
  }
];


export const stats = [
  { number: "100%", label: "Commitment to Quality", icon: "Star" },
  { number: "24/7", label: "Developer Support", icon: "Headphones" },
  { number: "∞", label: "Scalable Ideas", icon: "Rocket" },
  { number: "100K+", label: "Lines of Code", icon: "Code" },
{ number: "99.9%", label: "Uptime Guarantee", icon: "ShieldCheck" },
{ number: "5+", label: "Projects Completed", icon: "Briefcase" },
 { number: "5+", label: "Projects Deployed", icon: "Server" },
//    { number: "3+", label: "Team Members", icon: "Users" },
   { number: "15+", label: "Tech Stacks Used", icon: "Cpu" },
];

export const navigationItems = [
  { id: 'hero', label: 'Home' },
  // ... other navigation items
];
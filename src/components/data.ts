import keymachImg from "@/src/assets/keymach.png";
import qmeet from "@/src/assets/QMeet.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { TBlog, TProject, TSkillData } from "../types";

export const skills: TSkillData[] = [
  {
    id: "1",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
    order: 1,
  },
  {
    id: "2",
    image:
      "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
    name: "React",
    order: 2,
  },
  {
    id: "3",
    image: "https://cdn.creazilla.com/icons/3219990/nextjs-icon-md.png",
    name: "Next.js",
    order: 3,
  },
  {
    id: "4",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
    order: 4,
  },
  {
    id: "5",
    image: "https://img.icons8.com/office16/512/express-js.png",
    name: "Express.js",
    order: 5,
  },
  {
    id: "6",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    order: 6,
  },
  {
    id: "7",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
    order: 7,
  },
  {
    id: "8",
    image:
      "https://static-00.iconduck.com/assets.00/prisma-icon-423x512-isxs6996.png",
    name: "Prisma",
    order: 8,
  },
  {
    id: "9",
    image: "https://avatars.githubusercontent.com/u/13142323?v=4",
    name: "Redux",
    order: 9,
  },
  // {
  //   id: "9",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  //   name: "GraphQL",
  //   order: 9,
  // },
  {
    id: "10",
    image:
      "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
    name: "Tailwind CSS",
    order: 10,
  },
  // {
  //   id: "11",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  //   name: "Material UI",
  //   order: 11,
  // },
  {
    id: "12",
    image:
      "https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-dl3neb73.png",
    name: "Ant Design",
    order: 12,
  },
  {
    id: "13",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*I2lgr0_K6d9DwQYi2MtjcQ.png",
    name: "Zod",
    order: 13,
  },
  // {
  //   id: "14",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  //   name: "Redis",
  //   order: 14,
  // },
  {
    id: "15",
    image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    name: "Firebase",
    order: 15,
  },
  {
    id: "16",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    name: "Docker",
    order: 16,
  },
  // {
  //   id: "17",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  //   name: "AWS",
  //   order: 17,
  // },
  {
    id: "18",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "CI/CD with GitHub Actions",
    order: 18,
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "masudmahi0505@gmail.com",
    link: "mailto:masudmahi0505@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone | Whatsapp",
    content: "+8801643309139",
    link: "tel:+8801643309139",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Sylhet, Bangladesh",
    link: null,
  },
];

export const projects: TProject[] = [
  {
    id: "1",
    order: 1,
    title: "Social Media Platform",
    overview:
      "Plant Pals is a social media platform where users can share their gardening experiences and expertise.",

    description: `<div>
  <h2>Exploring the World of Full-Stack Development</h2>
  <p>
    Dive into the exciting realm of full-stack development, where front-end meets back-end. Discover the latest tools,
    technologies, and best practices that empower developers to build scalable and efficient web applications.
  </p>
  <p>
    Learn how to combine intuitive UI/UX design with powerful server-side logic to create seamless user experiences.
    Whether you are a beginner or an experienced developer, there’s something new to explore!
  </p>
</div>
`,
    tech: ["NextJS", "Typescript", "Mongoose"],
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    githubClient: "https://github.com/Mashud05052001/plant-pals-client",
    githubServer: "https://github.com/Mashud05052001/plant-pals-server",
    live: "https://plant-pals-client.vercel.app/",
  },
  {
    id: "2",
    order: 2,
    title: "Room booking platform",
    overview:
      "QMeet: A sleek, modern platform for seamless room bookings. Effortlessly select rooms, reserve time slots, and secure your bookings with an intuitive, user-friendly interface.",
    description: "",
    tech: ["TypeScript", "React", "Redux", "Mongoose"],
    image: qmeet,
    githubClient:
      "https://github.com/Mashud05052001/meeting-room-booking-client",
    githubServer:
      "https://github.com/Mashud05052001/Meeting-Room-Booking-System",
    live: "https://meeting-room-booking-system-frontend.vercel.app/",
  },
  {
    id: "4",
    order: 3,
    title: "Keyboard Platform",
    overview:
      "QMeet: A sleek, modern platform for seamless room bookings. Effortlessly select rooms, reserve time slots, and secure your bookings with an intuitive, user-friendly interface.",
    description: "",
    tech: ["TypeScript", "React", "Redux", "Mongoose"],
    image: keymachImg,
    githubClient: "https://github.com/Mashud05052001/keyMachClient",
    githubServer: "https://github.com/Mashud05052001/keyMachServer",
    live: "https://key-mach.vercel.app/",
  },
];

export const blogs: TBlog[] = [
  {
    id: "1",
    order: 1,
    title: "The Future of Web Development",
    category: "Web Development",
    overview:
      "Explore the trends and technologies shaping the future of web development.",
    description: `<div>
        <h1>Exploring the World of Full-Stack Development</h1>
        <p>
          Dive into the exciting realm of full-stack development, where front-end meets back-end. Discover the latest tools,
          technologies, and best practices that empower developers to build scalable and efficient web applications.
        </p>
        <p>
          Learn how to combine intuitive UI/UX design with powerful server-side logic to create seamless user experiences.
          Whether you are a beginner or an experienced developer, there’s something new to explore!
        </p>
      </div>`,
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    order: 2,
    title: "Understanding TypeScript: A Beginner's Guide",
    category: "TypeScript",
    overview:
      "Learn the basics of TypeScript and why developers are embracing it.",
    description:
      "TypeScript adds static type-checking to JavaScript, enhancing code quality and developer productivity. This guide covers key TypeScript features, how to get started, and best practices for new developers.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    order: 3,
    title: "Top 10 JavaScript Libraries in 2024",
    category: "JS Libraries",
    overview:
      "Discover the must-know JavaScript libraries to enhance your projects in 2024.",
    description:
      "JavaScript's ecosystem is vast, with numerous libraries that can streamline development. In this blog, we highlight the top 10 libraries for various purposes, including React frameworks, data visualization, and more.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
  },
];

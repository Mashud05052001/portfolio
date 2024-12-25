"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Designation() {
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center" id="home">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Mashudur Rahman Mahi
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-8">
              Crafting digital experiences with passion and precision.
              Specialized in building modern web applications.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                // href="mailto:masudmahi0505@gmail.com"
                className=" p-2 bg-red-600 text-white rounded-full hover:bg-red-500"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className=" rounded-full overflow-hidden shadow-2xl relative w-80 h-80">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

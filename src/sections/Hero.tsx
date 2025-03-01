import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  CircleArrowDown,
  Code,
  Laptop,
  Phone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Particles } from "@/components/particles";
import Image from "next/image";
import computerImage from "@/assets/memoji-computer.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "@/data/hero";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <Particles className="z-0" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src={computerImage}
            className="size-[100px]"
            alt="Computer Image"
          />
          <div className="bg-white border text-black border-gray-300 shadow-md px-4 py-1.5 inline-flex items-center gap-2 mb-2 rounded-full">
            <div className="relative">
              <div className="absolute bg-green-500 size-2.5 rounded-full opacity-75 animate-ping" />
              <div className="bg-green-500 size-2.5 rounded-full relative" />
            </div>
            <div className="font-medium text-xs">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Building{" "}
              <span className="text-blue-600">Scalable & High-Performance</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
                Digital Solutions
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl lg:text-2xl">
              I design modern, fast, and optimized web/mobile solutions tailored
              to your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="#projects" className="flex items-center">
                <span>Book Call</span>
                <Phone className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#contact">
                <span>View my Work</span>
                <BriefcaseBusiness />
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <div className="flex items-center space-x-2 bg-white shadow-md rounded-full px-4 py-2">
              <Code className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Fast & Scalable
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-md rounded-full px-4 py-2">
              <Laptop className="h-5 w-5 text-teal-600" />
              <span className="text-sm font-medium text-gray-700">
                Pixel-Perfect Design
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-md rounded-full px-4 py-2">
              <Zap className="h-5 w-5 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">
                SEO & Performance Optimized
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex justify-end items-center text-gray-600 text-sm">
        <div className="flex items-center animate-bounce">
          <span>Scroll to explore</span>
          <CircleArrowDown className="ml-1" />
        </div>
      </div>
    </section>
  );
}

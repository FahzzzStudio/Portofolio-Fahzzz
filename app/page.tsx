"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import LoadingScreen from "@/components/loading-screen"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Palette,
  TrendingUp,
  Star,
  Calendar,
  GraduationCap,
  Briefcase,
  Instagram,
  Twitter,
  Heart,
} from "lucide-react"

const portfolioProjects = [
  {
    id: 1,
    title: "Portfolio Design Fahzzz Studio 2024",
    category: "Design",
    categories: ["Design"],
    image: "/image/portfolio-design.png",
    link: "https://www.canva.com/design/DAGoFUirQIY/L-Fvn4HPmwNU5rkVv8f-kA/edit?utm_content=DAGoFUirQIY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  
  {
    id: 2,
    title: "Classification Hero MLBB | Machine Learning",
    category: "Development",
    categories: ["Development"],
    image: "/image/classification.png",
    link: "https://fahmi-classification.streamlit.app/",
  },
  {
    id: 3,
    title: "Classificatioin Jenis Tomat | Machine Learning",
    category: "Development",
    categories: ["Development"],
    image: "/image/classification-tomat.png",
    link: "https://fahmi-klasifikasi-tomat.streamlit.app/",
  },
  {
    id: 4,
    title: "Landing Page Tempat Top Up Minatz Store",
    category: "Development",
    categories: ["Development"],
    image: "/image/Web-Topup.png",
    link: "https://fahzzzstudio.github.io/minatz-store-landing-page/#home",
  },
  {
    id: 5,
    title: "Rebranding Logo RPL SMKN 1 Purbalingga",
    category: "Branding",
    categories: ["Branding", "Design"],
    image: "/image/1.png",
    link: "https://example.com/project1",
  },
  {
    id: 6,
    title: "Logo Design Ebeg Banyumasan",
    category: "Branding",
    categories: ["Branding","Design"],
    image: "/image/6.png",
    link: "https://example.com/project6",
  },
]

const contactLinks = {
  phone: "+62 813-2847-7745",
  email: "fahzzzstd04@gmail.com",
  location: "Purbalingga, Central Java",
  github: "https://github.com/FahzzzStudio",
  linkedin: "https://www.linkedin.com/in/fahmi-dwi-santoso-540127321/",
  instagram: "https://instagram.com/_fahzzz",
  twitter: "https://twitter.com/fahzzz",
}

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechStart",
    avatar: "/professional-client-headshot.jpg",
    content:
      "I was impressed with the design and development quality delivered by Fahmi. He transformed our vision into a stunning reality.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Founder, Creative Co",
    avatar: "/professional-female-client-headshot.jpg",
    content:
      "Working with Fahmi was an absolute pleasure. His attention to detail and creative approach exceeded our expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Marketing Director",
    avatar: "/professional-client-headshot.jpg",
    content:
      "Fahmi's graphic design skills are exceptional. Our social media engagement increased by 300% after his redesign.",
    rating: 5,
  },
]

export default function PortfolioLandingPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)


  const filterCategories = ["All", "Branding", "Design", "Development"]

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.categories.includes(activeFilter))

  // const smoothScrollTo = (elementId: string) => {
  //   const element = document.getElementById(elementId)
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     })
  //   }
  // }

  useEffect(() => {
    if (isLoading) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Set loading to false after component mounts (fallback)
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds fallback

    return () => clearTimeout(fallbackTimer)
  }, [])

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    // <>
    //   {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-foreground animate-fade-in animate-pulse-glow-text">Fahzzz</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => smoothScrollTo("home")}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => smoothScrollTo("profile")}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Profile
              </button>
              <button
                onClick={() => smoothScrollTo("services")}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Services
              </button>
              <button
                onClick={() => smoothScrollTo("portfolio")}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Portfolio
              </button>
              <button
                onClick={() => smoothScrollTo("about")}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                About
              </button>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hover:scale-105 transition-transform duration-200 bg-transparent"
            >
              Hire me!
            </Button>
          </div>
        </nav>

        <section id="home" className="pt-30 pb-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8" data-animate id="hero-content">
                <Avatar
                  className={`w-45 h-45 mx-auto mb-6 hover:scale-105 ring-4 animate-pulse-glow ring-primary/20 transition-all duration-1000 ${visibleElements.has("hero-content") ? "animate-bounce-in scale-100 opacity-100" : "scale-75 opacity-0"}`}
                >
                  <AvatarImage src="/image/profile1.png" alt="Fahmi" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">F</AvatarFallback>
                </Avatar>
                <h1
                  className={`text-5xl md:text-7xl font-bold mb-4 text-balance transition-all duration-1000 delay-200 ${visibleElements.has("hero-content") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  I am <span className="text-primary animate-gradient-text">Fahmi Dwi Santoso</span>
                </h1>
                <h1
                  className={`text-5xl md:text-10xl mb-4 text-balance transition-all duration-1000 delay-200 ${visibleElements.has("hero-content") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  Freelance Graphic Designer
                </h1>
                {/* <h2
                  className={`text-2xl md:text-3xl text-muted mb-6 text-balance transition-all duration-1000 delay-400 ${visibleElements.has("hero-content") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  Freelance Graphic Designer
                </h2> */}
                {/* <p
                  className={`text-lg text-muted max-w-2xl mx-auto mb-8 text-pretty transition-all duration-1000 delay-600 ${visibleElements.has("hero-content") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  A Software Engineering student at SMK Negeri 1 Purbalingga with professional experience, passion, and
                  dedication in Graphic Design. Skilled in developing communicative and engaging social media content. My
                  background in RPL fosters systematic and detailed thinking. Committed to developing a career in visual
                  design through creative and impactful work.
                </p> */}
              </div>

              {/* Stats */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${visibleElements.has("hero-content") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 animate-pulse-subtle"
                >
                  <button onClick={() => smoothScrollTo("portfolio")}>Let's connect with me</button>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className=" mb-10 hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <a href="https://drive.google.com/drive/folders/1lSPLFAEGTarlh7qvYbz8ls8JNmXeLCUb?usp=sharing">
                    Download CV
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4" data-animate id="hero-stats">
                {[
                  { number: "2", label: "Years Experience" },
                  { number: "500+", label: "Projects Done" },
                  { number: "250+", label: "Clients" },
                  { number: "90%", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-1000 hover:scale-110 ${visibleElements.has("hero-stats") ? "animate-count-up opacity-100" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-glow-text">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>            
            </div>
          </div>
        </section>

        <section id="profile" className="py-16 px-4 ">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Profile Image */}
                <div className="relative" data-animate id="profile-image">
                  <div
                    className={`relative transition-all duration-1000 ${visibleElements.has("profile-image") ? "animate-slide-right opacity-100" : "-translate-x-10 opacity-0"}`}
                  >
                    <div className="w-200 h-145 aspect-square max-w-md mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                        <img
                          src="/image/profile22.png"
                          alt="Fahmi Dwi Santoso - Freelance Graphic Designer"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    {/* Floating elements */}
                    {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Code className="w-8 h-8 text-primary" />
                    </div> */}
                  </div>
                </div>

                {/* Profile Content */}
                <div className="space-y-6" data-animate id="profile-content">
                  <div
                    className={`transition-all duration-1000 ${visibleElements.has("profile-content") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center animate-pulse-glow">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                    </div>

                    <div className="space-y-4 text-muted-foreground text-pretty">
                      <p className="text-lg leading-relaxed">
                        A Software Engineering student at SMK Negeri 1 Purbalingga with professional experience, passion, and
                        dedication in Graphic Design. Skilled in developing communicative and engaging social media content. My
                        background in RPL fosters systematic and detailed thinking. Committed to developing a career in visual
                        design through creative and impactful work.
                      </p>

                      <p className="text-lg leading-relaxed">
                        I enjoy turning complex problems into simple, elegant solutions and collaborating closely with
                        teams to deliver polished, high-performing products.
                      </p>
                    </div>

                    {/* Key Points */}
                    <div className="space-y-3 mt-6">
                      {[
                        "Passionate in crafting visual stories that are not only aesthetic, but also meaningful and impactful.",
                        "Focused on building design concepts that bring seamless flow, clarity, and consistency across every media.",
                        "Enjoys creating versatile design assets and scalable branding solutions to ensure lasting impressions.",
                      ].map((point, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-3 transition-all duration-1000 ${visibleElements.has("profile-content") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}
                          style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse-glow" />
                          <p className="text-lg text-muted-foreground leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quick Stats */}
                    {/* <div
                      className={`grid grid-cols-2 gap-4 mt-8 transition-all duration-1000 delay-600 ${visibleElements.has("profile-content") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}
                    >
                      {[
                        { label: "Based in", value: "Purbalingga, ID" },
                        { label: "Experience", value: "2+ Years" },
                        { label: "Specialization", value: "Full-Stack Dev" },
                        { label: "Available for", value: "Freelance" },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300 hover:scale-105"
                        >
                          <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                          <div className="font-semibold text-foreground">{stat.value}</div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12" data-animate id="services-header">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-balance transition-all duration-1000  ${visibleElements.has("services-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}>
                My Quality Services
              </h2>
              <p
                className={`text-muted max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${visibleElements.has("services-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}>
                We put your ideas and thus your wishes in the form of a unique design project that inspires you and your
                customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate id="services-grid">
              {[
                {
                  icon: Palette,
                  title: "Poster Design",
                  description:
                    "Creating eye-catching posters that communicate your message effectively and capture audience attention.",
                  special: false,
                },
                {
                  icon: Palette,
                  title: "Social Media Design",
                  description:
                    "Designing engaging social media content that boosts your online presence and connects with your audience.",
                  special: false,
                },
                {
                  icon: Palette,
                  title: "Logo Design",
                  description:
                    "Crafting memorable logos that represent your brand identity and leave a lasting impression.",
                  special: false,
                },
                {
                  icon: TrendingUp,
                  title: "Infographic Design",
                  description:
                    "Creating informative and visually appealing infographics that make complex data easy to understand.",
                  special: true,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${service.special ? "bg-secondary hover:bg-secondary/90" : "bg-gradient-card"} ${visibleElements.has("services-grid") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${service.special ? "bg-white/10" : "bg-primary/10 group-hover:bg-primary/20"} rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}
                    >
                      <service.icon className={`w-6 h-6 ${service.special ? "text-white" : "text-primary"}`} />
                    </div>
                    <CardTitle className={`text-xl ${service.special ? "text-white" : ""}`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-muted ${service.special ? "text-white/80" : ""}`}>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 px-4 bg-gradient-accent">
          <div className="container mx-auto">
            <div className="text-center mb-12" data-animate id="portfolio-header">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("portfolio-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                My Recent Works
              </h2>
              <div
                className={`flex justify-center gap-2 mb-8 flex-wrap transition-all duration-1000 delay-200 ${visibleElements.has("portfolio-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                {filterCategories.map((category, index) => (
                  <Badge
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                      activeFilter === category
                        ? "bg-primary text-primary-foreground animate-pulse-glow"
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate id="portfolio-grid">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${visibleElements.has("portfolio-grid") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <Button size="sm" variant="secondary" asChild className="animate-bounce-in">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="">{project.categories.join(", ")}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="about" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div data-animate id="experience-section">
                <div
                  className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${visibleElements.has("experience-section") ? "animate-slide-right opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center animate-pulse-glow">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">My Experience</h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Graphic Designer",
                      company: "Freelance Open Comision",
                      period: "January 2024 - Present",
                      variant: "secondary",
                    },
                    {
                      title: "Social Media Design",
                      company: "Noce Exhaust System",
                      period: "July 2024 - April 2025",
                      variant: "outline",
                    },
                    {
                      title: "Social Media Design",
                      company: "PT. Prabha Cipta Sentosa",
                      period: "November 2024 - April 2025",
                      variant: "outline",
                    },
                    {
                      title: "Junior Graphics Designer",
                      company: "Broadcasting Extracurricular",
                      period: "2023 - 2024",
                      variant: "outline",
                    },
                  ].map((exp, index) => (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-card ${visibleElements.has("experience-section") ? "animate-slide-right opacity-100" : "-translate-x-10 opacity-0"}`}
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            <CardDescription>{exp.company}</CardDescription>
                          </div>
                          <Badge variant={exp.variant as any} className="animate-pulse-subtle">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div data-animate id="education-section">
                <div
                  className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${visibleElements.has("education-section") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center animate-pulse-glow">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">My Education</h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "SVHS 1 Purbalingga",
                      description: "Major Software and Game Development",
                      period: "July 2023 - Present",
                      variant: "secondary",
                    },
                    {
                      title: "Logo & Graphic Design",
                      description: "Technology Competition (LKS)",
                      period: "November 2024 - February 2025",
                      variant: "outline",
                    },
                    {
                      title: "Design Workshop Online",
                      description: "Creative with Canva",
                      period: "May 2024",
                      variant: "outline",
                    },
                    {
                      title: "Intensive Camp Python",
                      description: "Pemrograman Python with Special Skill",
                      period: "September 2025",
                      variant: "outline",
                    },
                  ].map((edu, index) => (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-card ${visibleElements.has("education-section") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg hover:text-primary transition-colors duration-300">
                              {edu.title}
                            </CardTitle>
                            <CardDescription>{edu.description}</CardDescription>
                          </div>
                          <Badge variant={edu.variant as any} className="animate-pulse-subtle">
                            {edu.period}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12" data-animate id="skills-header">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("skills-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                My Skills
              </h2>
              <p
                className={`text-muted max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${visibleElements.has("skills-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
                customers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-animate id="skills-grid">
              {[
                // { name: "Canva", percentage: "92%", logo: "/image/tools(2).png" },
                { name: "Canva", percentage: "92%", logo: "/image/tools(2).png" },
                { name: "Corel Draw", percentage: "80%", logo: "/image/tools(7).png" },
                { name: "Adobe Ilustrator", percentage: "85%", logo: "/image/tools(5).png" },
                { name: "Adobe After Effect", percentage: "99%", logo: "/image/tools(4).png" },
                { name: "Adobe Photoshop", percentage: "89%", logo: "/image/tools(3).png" },
                { name: "Figma", percentage: "70%", logo: "/image/tools(6).png" },
                { name: "HTML5", percentage: "70%", logo: "/image/tools(10).png" },
                { name: "CSS", percentage: "70%", logo: "/image/tools(9).png" },
                { name: "Java Script", percentage: "70%", logo: "/image/tools(12).png" },
                { name: "PHP", percentage: "70%", logo: "/image/tools(13).png" },
                { name: "Python", percentage: "70%", logo: "/image/tools(1).png" },
                { name: "Java", percentage: "70%", logo: "/image/tools(11).png" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${visibleElements.has("skills-grid") ? "animate-bounce-in opacity-100" : "scale-75 opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="animate-pulse-glow w-20 h-20 mx-auto mb-4 bg-card rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:rotate-12">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-10 h-10 group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-sm font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </div>
                  {/* <div className="text-2xl font-bold text-primary animate-pulse-glow-text">{skill.percentage}</div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12" data-animate id="testimonials-header">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("testimonials-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                My Client's Stories
              </h2>
              <p
                className={`text-muted max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${visibleElements.has("testimonials-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                Empowering people in new a digital journey with my super services
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto" data-animate id="testimonials-carousel">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <Card
                        className={`mx-auto max-w-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${visibleElements.has("testimonials-carousel") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                      >
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <Avatar className="ring-2 ring-primary/20">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback>
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse-glow-text"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                  />
                                ))}
                              </div>
                              <CardTitle className="text-lg hover:text-primary transition-colors duration-300">
                                {testimonial.name}
                              </CardTitle>
                              <CardDescription>{testimonial.role}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted text-pretty italic">"{testimonial.content}"</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentTestimonial
                        ? "bg-primary animate-pulse-glow"
                        : "bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 px-4 bg-gradient-accent">
          <div className="container mx-auto">
            <div className="text-center mb-12" data-animate id="blog-header">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("blog-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                Recent Blogs
              </h2>
              <p
                className={`text-muted max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${visibleElements.has("blog-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
                customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-animate id="blog-grid">
              {[
                {
                  image: "/image/bootcamp-python.jpg",
                  date: "5 - 7 September 2024",
                  title: "Intensive Camp Pemrograman Python | Special Skill",
                  description:
                    "Baru saja menyelesaikan 3 hari yang luar biasa bersama Special Skill di Intensive Camp Pemrograman Python",
                },
                {
                  image: "/image/freeclass-python.jpg",
                  date: "29 August 2025",
                  title: "Free Class Pemrograman Python | Special Skill",
                  description:
                    "Baru saja mengikuti Free Class Pemrograman Python yang diselenggarakan oleh Special Skill",
                },
                {
                  image: "/image/frontend-dibimbing.jpg",
                  date: "19 August 2025",
                  title: "Digital Skill Fair 42.0 Faculty Of IT (Front End) | Dibimbing",
                  description:
                    "Baru saja menyelesaikan 5 hari yang luar biasa di DIGITAL SKILL FAIR 42.0 - Faculty of IT: Front End by dibimbing.id dan rasanya mata saya terbuka lebar tentang dunia front-end development. ",
                },
              ].map((blog, index) => (
                <Card
                  key={index}
                  className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${visibleElements.has("blog-grid") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt="Blog post"
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-pretty">{blog.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12" data-animate id="contact-header">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("contact-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}
              >
                Let's work together!
              </h2>
              <p
                className={`text-muted max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${visibleElements.has("contact-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}>
                I design and code beautifully simple things and I love what I do. Just simple like that!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto" data-animate id="contact-content">
              <Card
                className={`bg-gradient-card hover:shadow-2xl transition-all duration-500 hover:scale-105 ${visibleElements.has("contact-content") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}>
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>I'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" action={`mailto:${contactLinks.email}`} method="post" encType="text/plain">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          name="name"
                          required
                          className="hover:scale-105 focus:scale-105 transition-transform duration-200 h-13"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Your Email"
                          type="email"
                          name="email"
                          required
                          className="hover:scale-105 focus:scale-105 transition-transform duration-200 h-13"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        name="subject"
                        required
                        className="hover:scale-105 focus:scale-105 transition-transform duration-200 h-13"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        name="message"
                        required
                        className="hover:scale-105 focus:scale-105 transition-transform duration-200 h-53"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 animate-pulse-subtle"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card
                className={`bg-gradient-card hover:shadow-2xl transition-all duration-500 hover:scale-105 ${visibleElements.has("contact-content") ? "animate-slide-left opacity-100" : "translate-x-10 opacity-0"}`}>
                <CardHeader>
                  <CardTitle>Contact & Social Media</CardTitle>
                  <CardDescription>Contact and connect with me anytime</CardDescription>
                </CardHeader>
              {/* <div
                className={`transition-all duration-1000 ${visibleElements.has("contact-content") ? "animate-slide-right opacity-100" : "-translate-x-10 opacity-0"}`}> */}
                <CardContent>
                <div className="space-y-6 mb-6">
                  {/* <h2
                    className={`text-2xl md:text-1xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("contact-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}>
                    Contact
                  </h2> */}
                  {[
                    {
                      icon: Phone,
                      label: contactLinks.phone,
                      sublabel: "Call me directly",
                      href: `tel:${contactLinks.phone}`,
                    },
                    {
                      icon: Mail,
                      label: contactLinks.email,
                      sublabel: "Send me an email",
                      href: `mailto:${contactLinks.email}`,
                    },
                    { icon: MapPin, label: contactLinks.location, sublabel: "Visit my office", href: "#" },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 group hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">
                          <a href={contact.href} className="hover:text-primary transition-colors duration-300">
                            {contact.label}
                          </a>
                        </div>
                        <div className="text-sm text-muted-foreground">{contact.sublabel}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  {/* <h2
                    className={`text-2xl md:text-1xl font-bold mb-4 text-balance transition-all duration-1000 ${visibleElements.has("contact-header") ? "animate-slide-up opacity-100" : "translate-y-10 opacity-0"}`}>
                    Social Media
                  </h2> */}
                  {[
                    {
                      icon: Github,
                      label: "Github",
                      sublabel: "Let's connect Github",
                      href: contactLinks.github,
                    },
                    {
                      icon: Linkedin,
                      label: "Linkedin Fahzzz",
                      sublabel: "Let's connect Linkedin",
                      href: contactLinks.linkedin,
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      sublabel: "Let's be friends",
                      href: contactLinks.instagram,
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 group hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">
                          <a href={contact.href} className="hover:text-primary transition-colors duration-300">
                            {contact.label}
                          </a>
                        </div>
                        <div className="text-sm text-muted-foreground">{contact.sublabel}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="flex gap-4 mt-8">
                  {[
                    { icon: Github, href: contactLinks.github },
                    { icon: Linkedin, href: contactLinks.linkedin },
                    { icon: Instagram, href: contactLinks.instagram },
                    // { icon: Twitter, href: contactLinks.twitter },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      size="icon"
                      variant="outline"
                      asChild
                      className="hover:scale-110 hover:-translate-y-1 transition-all duration-300 bg-transparent"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div> */}
              {/* </div> */}
                </CardContent>  
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border bg-gradient-accent">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold text-foreground animate-pulse-glow-text">Fahzzz</div>
              <div className="flex gap-8 text-sm">
                {[
                  { label: "Home", target: "home" },
                  { label: "Profile", target: "profile" },
                  { label: "About", target: "about" },
                  { label: "Services", target: "services" },
                  { label: "Portfolio", target: "portfolio" },
                  { label: "Contact", target: "contact" },
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => smoothScrollTo(link.target)}
                    className="hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center text-sm text-muted mt-8">
              © 2024 Fahmi Dwi Santoso. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    // </>
  )
}

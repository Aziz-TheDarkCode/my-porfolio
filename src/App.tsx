import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import { ThemeProvider } from './components/ui/theme_provider'

import { LanguageSwitcher } from './components/language-switcher'
import { useTranslation } from 'react-i18next'
import { ModeToggle } from './components/toggler'
import ProjectCard from './components/project-card'

function App() {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="font-sans dark:test ">
        <ModeToggle />
        <div className="min-h-screen relative overflow-hidden">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="absolute top-4 right-4 space-x-4"
          >
            <LanguageSwitcher />
          </motion.div>

          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10"
          >
            <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-4 font-heading">
              {t('greeting')}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-6xl font-black mb-6 font-heading">
              Abdou Aziz Ndiaye
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mb-8">
              {t('description')}
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-red-100 text-red-800 px-3 py-1 rounded-full"
              >
                {t('skills.developer')}
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {t('skills.typescript')}
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
              >
                {t('skills.golang')}
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
              >
                {t('skills.rust')}
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full"
              >
                {t('skills.mobile')}
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-red-100 text-red-800 px-3 py-1 rounded-full"
              >
                {t('skills.devops')}
              </motion.span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-600 hover:text-black"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-600 hover:text-black"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.main>
        </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <ProjectCard
        title="Jumper Logistique"
        website="https://jumper-logistique.com"
        description="Built a logistics platform with Next.js for fast, SEO-friendly frontend performance and Supabase as a backend for real-time shipment tracking and customer data management. Developed a custom admin dashboard for managing shipments, updating statuses, and handling customer inquiries efficiently."
        logoColor="bg-yellow-400"

        tools={[
          { name: "React", image: "/next-js.svg" },
          { name: "TypeScript", image: "/typescript.svg" },
          { name: "Tailwind", image: "/tw.jpg" },
          { name: "Drupal", image: "/spb.png" },
        ]}
    />

<ProjectCard
  title="Yoo Agility"
  website="https://yooagility.com"
  description="Modernized a static website by implementing Drupal CMS with JSON API as a headless backend and migrating the frontend from Gatsby to Next.js. Achieved a 40% improvement in load times, enhanced SEO via server-side rendering, and streamlined content management with custom Drupal modules and API integration. Additionally, integrated the Paydunya payment gateway to enable secure online transactions for training course purchases."
  logoColor="bg-blue-600"
  tools={[
    { name: "React", image: "/next-js.svg" },
    { name: "TypeScript", image: "/typescript.svg" },
    { name: "Drupal", image: "/chakra-ui-icon.svg" },
    { name: "Drupal", image: "/drupal.svg" },
  ]}
/>
<ProjectCard
        title="DRH&MOI"
        website="https://drhetmoi"
        description="Built a logistics platform with Next.js for fast, SEO-friendly frontend performance and Supabase as a backend for real-time shipment tracking and customer data management. Developed a custom admin dashboard for managing shipments, updating statuses, and handling customer inquiries efficiently."
        logoColor="bg-teal-600"
        tools={[
          { name: "React", image: "/react.svg" }, 
          { name: "TypeScript", image: "/typescript.svg" },
          { name: "Tailwind", image: "/tw.jpg" },
          { name: "Drupal", image: "/appwrite.png" },
        ]}
    />
      </div>
      </div>
    </ThemeProvider>
  )
}

export default App

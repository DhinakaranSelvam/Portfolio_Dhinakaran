import './App.css'
import ShinyText from './ShinyText';
import Beams from './Beams';
import { motion } from 'motion/react';
import LogoLoop from './LogoLoop';

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans relative">
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#818cf8" // indigo
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80">
        <main>
          {/* Header */}
          <header className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 shadow-sm border-b border-gray-700">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-xl font-bold text-indigo-400">Welcome</div>
              <ul className="hidden md:flex space-x-8 font-medium">
                <li><a href="#about" className="hover:text-indigo-300 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-indigo-300 transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-indigo-300 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a></li>
                <li><a href="#responsibility" className="hover:text-indigo-300 transition-colors">Leadership</a></li>
                <li><a href="#certificates" className="hover:text-indigo-300 transition-colors">Certifications</a></li>
                <li><a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </header>

          <main className="pt-20">
            {/* Hero */}
            <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 to-black pt-16">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                <ShinyText
                  text="DHINAKARAN S B"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </h1>
              <h2 className="text-xl md:text-2xl text-indigo-400 font-semibold mb-6">Java Full Stack Developer</h2>
              <p className="max-w-2xl text-lg text-slate-300 mb-10">
                Passionate Computer Science graduate with expertise in Java, Spring, React.js, and modern web technologies.
                Experienced in full-stack development with hands-on projects and industry certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                  Get In Touch
                </a>
                <a href="#projects" className="px-8 py-3 border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-950/30 rounded-lg font-semibold transition-all">
                  View Projects
                </a>
              </div>
            </section>

            {/* About */}
            <section id="about" className="py-16 max-w-5xl mx-auto px-6 bg-black/20 rounded-2xl my-8">
              <h3 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-slate-200">About Me</h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-lg text-slate-300 pt-8">
                  <p>
                    B.E. Computer Science graduate (2024) from Kumaraguru College of Technology with CGPA 8.72, specializing in Java Full Stack Development.
                  </p>
                  <p>
                    Completed comprehensive training in full-stack development with strong foundations in Java, HTML, CSS, JavaScript, and modern web technologies. Experienced in building scalable applications following SDLC practices and industry coding standards.
                  </p>
                  <p>
                    Recognized with Kumaraguru Achievers Award for best volunteer and active participation (2023) and Mahatma Gandhi Scholarship Award for academic excellence (2022).
                  </p>
                </div>
                <div className="bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-700">
                  <h4 className="font-bold text-xl mb-6 text-slate-200">Education</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold text-indigo-300 text-lg">B.E Computer Science & Engineering</div>
                      <div className="text-slate-400">2020 - 2024</div>
                      <p className="font-medium mt-1">Kumaraguru College of Technology, Coimbatore</p>
                      <p className="text-indigo-400 font-semibold mt-1">CGPA: 8.72</p>
                    </div>
                    <div>
                      <div className="font-bold text-indigo-300 text-lg">Grade 12</div>
                      <div className="text-slate-400">2020</div>
                      <p className="font-medium mt-1">The Ashok Leyland School, CBSE</p>
                      <p className="text-indigo-400 font-semibold mt-1">94.4%</p>
                    </div>
                    <div>
                      <div className="font-bold text-indigo-300 text-lg">Grade 10</div>
                      <div className="text-slate-400">2018</div>
                      <p className="font-medium mt-1">The Ashok Leyland School, CBSE</p>
                      <p className="text-indigo-400 font-semibold mt-1">91.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies & Tools */}
            <section className="py-16 bg-black/20">
              <div className="max-w-5xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-8 text-center text-slate-200">Technologies I Work With</h3>
                <LogoLoop
                  logos={[
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', alt: 'Spring' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
                    { src: '/github-white.svg', alt: 'GitHub' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' }
                  ]}
                  speed={80}
                  direction="left"
                  logoHeight={60}
                  gap={48}
                  fadeOut={true}
                  scaleOnHover={true}
                  pauseOnHover={false}
                />
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-16 bg-black/20">
              <div className="max-w-5xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-slate-200">Technical Skills</h3>
                <div className="bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-700">
                  <h4 className="font-bold text-indigo-300 text-xl mb-6">Technical Skills</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-slate-200 mb-3">Languages & Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'React.js', 'Spring', 'MongoDB', 'MySQL'
                        ].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm font-medium">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-200 mb-3">Tools & Concepts</h5>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Git', 'VS Code', 'Tailwind CSS', 'Tableau', 'OOP', 'Agile Methodology'
                        ].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm font-medium">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section id="experience" className="py-16 max-w-5xl mx-auto px-6 bg-black/20 rounded-2xl my-8">
              <h3 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-slate-200">Internship Experience</h3>
              <div className="relative pl-8 border-l-2 border-gray-700 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                  <div>
                    <h4 className="text-xl font-bold">Iamneo Edutech – CS Fellowship Program</h4>
                    <div className="text-indigo-400 font-medium mb-4">Jan 2024 - Apr 2024</div>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex gap-2"><span>•</span><span>Completed structured training in full-stack development with strong foundations in Java, HTML, CSS, JavaScript, and modern web technologies</span></li>
                      <li className="flex gap-2"><span>•</span><span>Designed, developed, and deployed hands-on real-world projects</span></li>
                      <li className="flex gap-2"><span>•</span><span>Followed Software Development Life Cycle (SDLC) practices, industry coding standards, debugging, and testing methodologies</span></li>
                      <li className="flex gap-2"><span>•</span><span>Gained experience in collaborative development workflows including teamwork and version control</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-16 bg-black/20 px-6">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-slate-200">Selected Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Enhanced Fleet Management & Tracking System', desc: 'Implemented live tracking, AI route optimization, and QR code technology for fleet management, enhancing fuel efficiency, security, and profitability. Showcased technology\'s pivotal role in modern fleet management for sustainable growth and competitive advantage.' },
                    { title: 'Restaurant Management Software', desc: 'An online platform for efficient restaurant management, featuring menu posting, dish management, special offers, customer experience sharing, and community engagement.' },
                    { title: 'Smart Assistive Device for Differently Abled People', desc: 'A mobility gadget empowering differently abled individuals to achieve self-sufficiency, mirroring the capabilities of able-bodied individuals.' },
                    { title: 'Urban Farming Smart System', desc: 'Integrated smart system for urban farming. Designed an integrated vertical farming system featuring Aquaponics, boosting 21st century farming yields through symbiotic coexistence. Presented findings in an IEEE published paper.' }
                  ].map((project, idx) => (
                    <div key={idx} className="group bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                      <h4 className="text-xl font-bold text-indigo-300 mb-4">{project.title}</h4>
                      <p className="text-slate-300 leading-relaxed">{project.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Leadership */}
            <section id="responsibility" className="py-16 max-w-5xl mx-auto px-6 bg-black/20 rounded-2xl my-8">
              <h3 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-slate-200">Leadership & Responsibility</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { role: 'President', org: 'Arts Vertical, Leadership Council Member' },
                  { role: 'Vice President', org: 'Books and Beyond' },
                  { role: 'Alumni Coordinator', org: 'Kumaraguru Drama Troupe' },
                  { role: 'Core Team Member', org: 'Ignite (Student Immersion Program)' },
                  { role: 'Project Based Learning Scholar', org: '2020-21' },
                  { role: 'Super 60 Member', org: 'Personal Development Program' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 bg-indigo-900/30 rounded-xl border-l-4 border-indigo-500"
                  >
                    <div className="font-bold text-indigo-300 mb-1">{item.role}</div>
                    <div className="text-slate-300 text-sm">{item.org}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section id="certificates" className="py-16 bg-black/20">
              <div className="max-w-5xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-slate-200">Certifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Java Full Stack Development Course', issuer: 'Besant Technologies, Electronic City' },
                    { title: 'CCNA: Enterprise Networking, Security, and Automation', issuer: '5-level certification' },
                    { title: 'Agile with Atlassian Jira', issuer: 'Atlassian' },
                    { title: 'MongoDB Introduction to Charts', issuer: 'MongoDB' }
                  ].map((cert, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-indigo-300 mb-2">{cert.title}</h4>
                      <div className="text-slate-300 text-sm">{cert.issuer}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white rounded-[3rem] mx-6 mb-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <h3 className="text-4xl font-bold mb-6">Let's Connect</h3>
                <p className="text-indigo-100 text-lg mb-12">
                  Looking for an enthusiastic developer to join your team? Reach out!
                </p>
                <div className="flex flex-col gap-6 items-center">
                  <a href="mailto:dhinakaranselvam.cs@gmail.com" className="text-2xl font-semibold hover:underline decoration-white underline-offset-8 transition-all">
                    dhinakaranselvam.cs@gmail.com
                  </a>
                  <p className="text-indigo-100 text-lg">+91 8667466670</p>
                  <div className="flex gap-8 mt-4 text-indigo-100">
                    <a href="https://www.linkedin.com/in/dhinakaransb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/DhinakaranSelvam" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://leetcode.com/u/DhinakaranSB/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="py-12 border-t border-gray-700 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DHINAKARAN S B. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App



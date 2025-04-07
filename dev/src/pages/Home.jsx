import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <body>
            <Navbar />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-6 md:py-12 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pt-8">
                        <div>
                            <h1 style={{color:'#BFA181'}}>Trung Vu</h1>
                            <p className="mt-3 mb-5" style={{color:'#29e0d5'}}>Aiming to be better than I was yesterday</p>
                        </div>
                        <img src="grad.jpg" alt="Trung Vu" className="mb-5"></img>
                        <div>
                            <ul>
                                <a href="https://github.com/thvu02" target="_blank" rel="noopener noreferrer"><i className="bi bi-github pe-0 me-2" style={{ fontSize: '28px', color: '#178582' }}></i></a>
                                <a href="https://linkedin.com/in/thvu02" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin pe-0 me-2" style={{ fontSize: '28px', color: '#178582' }}></i></a>
                                <a href="https://scholar.google.com/citations?user=0eTM9NkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><i className="bi bi-google pe-0 me-2" style={{ fontSize: '28px', color: '#178582' }}></i></a>
                                <a href="https://www.instagram.com/trung_vu_panda/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram pe-0 me-2" style={{ fontSize: '28px', color: '#178582' }}></i></a>
                            </ul>
                            <p style={{ color: '#DDD0C8' }}>Credit to <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" style={{ color: '#DDD0C8' }}>Brittany Chiang</a> for format</p>
                        </div>
                    </header>
                    <main className="pt-24 lg:w-[52%] lg:py-24">
                        <section id="about" className="mb-16 scroll-mt-16 mb:mb-24 lg:scroll-mt-24">
                            <h2 className="text-section">About</h2>
                            <p className="intro">I&apos;m a CSMS student at <a href="https://www.cpp.edu/sci/computer-science/index.shtml" target="_blank" rel="noopener noreferrer">Cal Poly Pomona</a> and recent <a href="https://www.cs.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA</a> alumni. I am a developer with an unyielding drive to improve and mission to build secure, purposeful applications in efficient and innovative ways. Software development lets me bring the visions of myself and others to reality. That fact is what keeps me motivated.</p>
                            <p className="intro">I will be joining <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon Web Services</a> this summer as an SDE intern. Previously, I was a Cybersecurity R&D intern at <a href="https://www.sandia.gov/" target="_blank" rel="noopener noreferrer">Sandia National Laboratories</a> where I developed operational technology security solutions for Sandia and federal partners. Prior to that, I was a Software Engineering intern at <a href="https://www.jpl.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA JPL</a> and <a href="https://sisyphus-gs.com/" target="_blank" rel="noopener noreferrer">SISYPHUS Global Systems</a>, a startup, where I contributed to projects centered around climate change mitigation. My career in tech has been multi-faceted and these unique experiences granted me unique perspectives I can bring to teams when building software solutions.</p>
                            <p className="intro">Work-life balance is critical, so I strive to pursue other passions outside of software development. In my spare time, I&apos;m either bowling, building computers, playing Valorant, or eating at new restaurants.</p>
                        </section>
                        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 className="text-section">Education</h2>
                            <div id="CPP" className="mb-3">
                                <h3 className="text-company">Cal Poly Pomona</h3>
                                <p className="text-role">M.S. Computer Science | Aug 2024 - Present</p>
                            </div>
                            <div id="UCLA" className="mb-3">
                                <h3 className="text-company">UCLA</h3>
                                <p className="text-role">B.S. Computer Science and Engineering | Sep 2020 - Jun 2024</p>
                            </div>
                        </section>
                        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 className="text-section">Experience</h2>
                            <div id="amazon" className="mb-3">
                                <h3 className="text-company">Amazon Web Services</h3>
                                <p className="text-role">Software Development Engineer Intern | Incoming</p>
                                <p className="text-description">We&apos;ll find out soon enough</p>
                            </div>
                            <div id="sandia" className="mb-3">
                                <h3 className="text-company">Sandia National Laboratories</h3>
                                <p className="text-role">Cybersecurity R&D Intern | Jun 2023 &ndash; May 2025</p>
                                <p className="text-description">Operational technology incident response; risk/visibility assessment for CISA clients</p>
                            </div>
                            <div id="nasa" className="mb-3">
                                <h3 className="text-company">NASA Jet Propulsion Laboratory</h3>
                                <p className="text-role">Software Engineering Intern | Jun &ndash; Aug 2022</p>
                                <p className="text-description">Developed ML models to predict 21st century surface temperatures</p>
                            </div>
                            <div id="sisyphus" className="mb-3">
                                <h3 className="text-company">SISYPHUS Global Systems</h3>
                                <p className="text-role">Software Engineering Intern | Mar &ndash; Aug 2021</p>
                                <p className="text-description">Built web application to assess and visualize property flood risk in AR</p>
                            </div>
                            <Link to="/experience">View All Experiences<i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></Link>    
                        </section>
                        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 className="text-section">Projects</h2>
                            <div id="chatbot" className="mb-3">
                                <h3 className="text-company">Cybersecurity Chatbot</h3>
                                <p className="text-role">AI-driven chatbot for incident response novices</p>
                                <p className="text-description">HuggingFace | StreamLit | Mistral LLM | Python | MongoDB</p>
                            </div>
                            <div id="bowling" className="mb-3">
                                <h3 className="text-company">Bowling Bro</h3>
                                <p className="text-role">Bowling performance tracker and sharing platform </p>
                                <p className="text-description">OpenCV | Flask | Bootstrap | Python | MongoDB</p>
                            </div>
                            <div id="wordle" className="mb-3">
                                <h3 className="text-company">Wordle Plus</h3>
                                <p className="text-role">The popular word game, Wordle, with more features</p>
                                <p className="text-description">React | ExpressJS | NodeJS | MongoDB | Python</p>
                            </div>
                            <div id="iot" className="mb-3">
                                <h3 className="text-company">Movement Visualizer</h3>
                                <p className="text-role">Internet of Things system to track exercise motions</p>
                                <p className="text-description">C | AWS | JavaScript | HTML | Signal Processing | Internet of Things</p>
                            </div>
                            <Link to="/projects">View All Projects<i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></Link>    
                        </section>
                    </main>
                </div>
            </div>
        </body>
    );
};

export default Home;

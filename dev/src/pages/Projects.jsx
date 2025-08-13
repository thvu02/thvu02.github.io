import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <body>
        <Navbar />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-6 md:py-12 lg:py-0">
            <main className="pt-24 lg:py-24 justify-center text-center">
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="website-v2" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/thvu02.github.io/tree/main" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Personal Website (v2) <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/websitev2.png" alt="websitev2"/>
                      <p className="text-description">Website to showcase experience, projects, hobbies, and frontend skills. Utilizes new 2-column setup inspired by 
                        <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" style={{ color: '#178582' }}> Brittany Chiang</a> with a new color-scheme and format for improved readability.</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">React</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Tailwind</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Vite</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">GitHub Pages</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="chatbot" className="mb-3">
                      <h3 className="text-company"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Cybersecurity Chatbot <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/chatbot.png" alt="chatbot"/>
                      <p className="text-description">AI-driven chatbot powered by Llama 3 8b LLM to assist novice incident responders in familiarizing themselves with the cybersecurity field. 
                        Chatbot continuously pulls and is fine-tuned with cyber threat intelligence (CTI), including CVEs and CISA alerts, to provide relevant updated information. Can answer high- and 
                        low-level questions, provide details on any CVE, optionally save previous chats to a database, and directly send emails from interface. 
                      </p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">HuggingFace</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Llama</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Streamlit</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">MongoDB</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">MITRE API</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">SMTP Server</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="search-engine" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/SearchEngine" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Search Engine <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/search-engine.png" alt="search-engine"/>
                      <p className="text-description">Search engine built specifically for Cal Poly Pomona's Biology Department where users can enter arbitrary queries to discover which faculty from the CPP Biology 
                        Department are most relevant to their query. Includes web crawler, parser, inverted index, search with embeddings (hierarchical navigable small world for searching + LLM embeddings for ranking), and interface.</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">MongoDB</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">HuggingFace</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Streamlit</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="bowling-bro" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/BowlingBro" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Bowling Bro <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/bowling-bro.webp" alt="bowling-bro"/>
                      <p className="text-description">Web application to connect bowlers across the globe. Optimal character recognition (OCR) functionality to photo upload bowling scores to public leaderboards and 
                        track personal process using performance dashboard.</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">OpenCV</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">React</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Flask</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">MongoDB</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Tailwind</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Bootstrap</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Vite</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="movement-visualizer" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/IoTWebserver" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Movement Visualizer <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/iot.png" alt="movement-visualizer"/>
                      <p className="text-description">Dashboard to render IoT device motion in real-time using accelerometer and gyroscope sensor values from B-U585I-IOT02A IoT node.</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">C</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">AWS</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">JavaScript</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Signal Processing</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Internet of Things</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">STM32</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">HTML</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="google-photos" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/GooglePhotosExportOrganizer" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Google Photos Export Organizer <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/google-photos.svg" alt="google-photos"/>
                      <p className="text-description">A series of Python functions that parse through Google Photos content from Google Export to rename photos and videos by timestamp for accurate name-based ordering 
                        in local directories. The naming format is MonthYearDate_HourMinSec. Note that many, but not all file types are covered and that the program affects the original files. A copy is not made.</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="wordle-plus" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/Wordle-PLUS" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Wordle Plus <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/wordle-plus.jpg" alt="wordle-plus"/>
                      <p className="text-description">Re-implementation of the popular word game, Wordle, with additional difficulty levels and no daily play restrictions.</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">React</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">ExpressJS</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">NodeJS</div></li>
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">MongoDB</div></li>
                      </ul>
                  </div>
              </section>
              <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                  <div id="uniqueness-test" className="mb-3">
                      <h3 className="text-company"><a href="https://github.com/thvu02/uniquenesstest" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Uniqueness Test <i className="bi bi-arrow-up-right-square ps-0 ms-1"></i></a></h3>
                      <img className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2" src="images/uniqueness-test.jpg" alt="uniqueness-test"/>
                      <p className="text-description">A family friendly version of the popular <a href="https://ricepuritytest.com/" target="_blank" rel="noopener noreferrer" 
                        style={{ color: '#178582' }}> Rice Purity Test</a> built as an icebreaker for workshops during two UCLA student admit programs (SEA ADMIT &amp; SEATED).</p>
                      <ul className="mt-2 flex flex-wrap justify-center">
                          <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">React</div></li>
                      </ul>
                  </div>
              </section>
            </main>
        </div>
    </body>
  );
};

export default Projects;

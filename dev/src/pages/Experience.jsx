import Navbar from '../components/Navbar';
import { HashLink } from 'react-router-hash-link';

const Experience = () => {
  return (
    <body>
        <Navbar />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-6 md:py-12 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pt-8">
                        <ul className="anchors">
                            <li><HashLink smooth className="hash-link" to="#internships">Internships</HashLink></li>
                                <ul className="sub-anchors">
                                    <li><HashLink smooth className="sub-hash-link" to="#amazon">Amazon Web Services</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#sandia">Sandia National Laboratories</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#nasa">NASA JPL</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#sisyphus">SISYPHUS Global Systems</HashLink></li>
                                </ul>
                            <li><HashLink smooth className="hash-link" to="#research">Research</HashLink></li>
                                <ul className="sub-anchors">
                                    <li><HashLink smooth className="sub-hash-link" to="#vrlab">Virtual Reality Lab</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#westernu">Luo Lab</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#scai">Scalable Analytics Institute</HashLink></li>
                                </ul>
                            <li><HashLink smooth className="hash-link" to="#teaching">Teaching</HashLink></li>
                                <ul className="sub-anchors">
                                    <li><HashLink smooth className="sub-hash-link" to="#ucla">UCLA</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#ucla-extension">UCLA Extension</HashLink></li>
                                </ul>
                            <li><HashLink smooth className="hash-link" to="#entrepreneurship">Entrepreneurship</HashLink></li>
                                <ul className="sub-anchors">
                                    <li><HashLink smooth className="sub-hash-link" to="#venturewell">VentureWell</HashLink></li>
                                </ul>
                            
                            <li><HashLink smooth className="hash-link" to="#extracurriculars">Extracurriculars</HashLink></li>
                                <ul className="sub-anchors">
                                    <li><HashLink smooth className="sub-hash-link" to="#upe">Upsilon Pi Epsilon</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#vsu">Vietnamese Student Union</HashLink></li>
                                    <li><HashLink smooth className="sub-hash-link" to="#seaclear">SEA CLEAR</HashLink></li>
                                </ul>
                        </ul>
                    </header>
                    <main className="pt-24 lg:w-[52%] lg:py-24">
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 id="internships" className="text-section">Internships</h2>
                            <div id="amazon" className="mb-3">
                            <h3 className="text-company"><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Amazon Web Services</a></h3>
                                <p className="text-role">Software Development Engineer Intern | May 2025 &ndash; Present</p>
                                <p className="text-description">We&apos;ll find out soon enough</p>
                            </div>
                            <div id="sandia" className="mb-3">
                                <h3 className="text-company"><a href="https://www.sandia.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Sandia National Laboratories</a></h3>
                                <p className="text-role">Cybersecurity R&D Intern | Jun 2023 &ndash; May 2025</p>
                                <p className="text-description">Secured operational technology (OT) security by conducting incident response and building inventory system to aggregate IT/OT device data for 
                                    enhanced visibility. Refined Splunk alerts and network monitoring systems to reduce false positive alert rates. Developed web dashboard to convey state of OT device growth  
                                    and security over time. Conducted risk and visibility assessments for CISA clients and generated web dashboards to summarize such information.</p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Splunk</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Wireshark</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">VMware</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Flask</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">React</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Tailwind</div></li>
                                </ul>
                            </div>
                            <div id="nasa" className="mb-3">
                                <h3 className="text-company"><a href="https://jifresse.ucla.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>NASA Jet Propulsion Laboratory</a></h3>
                                <p className="text-role">Software Engineering Intern | Jun &ndash; Aug 2022</p>
                                <p className="text-description">Analyzed surface temperature anomalies from 1850-2021 using Berkeley Earth dataset, identifying regional warming patterns across Earth. Assessed 
                                    performance of climate projection models in capturing regional warning patterns. Trained DNN using climate model ensemble and other features to better emulate regional 
                                    warning patterns and predict occurrence of climate change "tipping point" (2.0-2.5&deg;C warming).</p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">PyTorch</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">scikit-learn</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Jupyter Notebook</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">CMIP6</div></li>
                                </ul>
                            </div>
                            <div id="sisyphus" className="mb-3">
                                <h3 className="text-company"><a href="https://sisyphus-gs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>SISYPHUS Global Systems</a></h3>
                                <p className="text-role">Software Engineering Intern | Mar &ndash; Aug 2021</p>
                                <p className="text-description">Engineered full-stack web application that uses machine learning, augmented reality, and public datasets to visualize property flood risk 
                                    and mitigation methods. Developed green and grey infrastructure maps for New Orleans, LA to enhance GIS database. Implemented company website to increase visibility and brand.</p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Django</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">SQLite</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">JavaScript</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Unity</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">IBM Watson Studio</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">ArcGIS</div></li>
                                </ul>
                            </div>
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 id="research" className="text-section">Research</h2>
                            <div id="vrlab" className="mb-3">
                                <h3 className="text-company"><a href="https://www.cppvr.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Virtual Reality Lab &#64; CPP</a></h3>
                                <p className="text-role">Graduate Research Assistant | Apr 2025 &ndash; Present</p>
                                <p className="text-description">Picking up the work I did at SISYPHUS Global Systems (with permission) to refine the augmented reality process.</p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Unity</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">ArcGIS</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">IBM Watson Studio</div></li>
                                </ul>
                            </div>
                            <div id="westernu" className="mb-3">
                                <h3 className="text-company"><a href="https://research.westernu.edu/luo-lab/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Luo Lab &#64; Western University</a></h3>
                                <p className="text-role">Machine Learning Research Assistant | Aug &ndash; Oct 2024</p>
                                <p className="text-description">Researched methods to improve drug discovery process. Automated and parallelized data pre-processing and molecule fingerprinting algorithms to boost lab efficiency and productivity. Implemented 
                                    BitBIRCH clustering algorithm to cluster molecular compounds by structure and binding affinity to accelerate drug discovery process. Built CNN to predict protein-ligand 
                                    binding sites on 3D protein-ligand grids.</p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">PyTorch</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">scikit-learn</div></li>
                                </ul>
                            </div>
                            <div id="scai" className="mb-3">
                                <h3 className="text-company"><a href="https://scai.cs.ucla.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Scalable Analytics Institute &#64; UCLA</a></h3>
                                <p className="text-role">Machine Learning Research Assistant | Apr 2023 &ndash; Jun 2024</p>
                                <p className="text-description">Conducted research on graph-based analytics for biomedicine by implementing graph neural networks and multi-layer perceptrons to predict 
                                    protein site modification using protein structural properties and ESM-2 embeddings. Compiled train and test datasets by converting protein data into graphical representations 
                                    and applying data augmentation techniques to enhance model performance.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Deep Graph Library</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">PyTorch</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">HuggingFace</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">scikit-learn</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Python</div></li>
                                </ul>
                            </div>
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 id="teaching" className="text-section">Teaching</h2>
                            <div id="ucla" className="mb-3">
                                <h3 className="text-company"><a href="https://sites.google.com/view/ucla-stmicroelectronics-iot/home" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>UCLA</a></h3>
                                <p className="text-role">Teaching Assistant | Sep 2021 &ndash; June 2024</p>
                                <p className="text-description">Taught and developed new course material for introductory internet of things (IoT) course and cybernetics course at UCLA under Professor Kaiser 
                                    and Professor Darabi. Tutored students during weekly lab sessions and compiled a teacher's manual to assist future course instructors.</p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">IoT</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">C</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">STM32</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">AWS</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">Digital Signal Processing</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">JavaScript</div></li>
                                    <li className="mr-2.5 mt-2"><div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">HTML</div></li>
                                </ul>
                            </div>
                            <div id="ucla-extension" className="mb-3">
                                <h3 className="text-company"><a href="https://www.uclaextension.edu/engineering/technical-management-program" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>UCLA Extension</a></h3>
                                <p className="text-role">Instructor Aide | Sep &ndash; Sep 2023</p>
                                <p className="text-description">Assisted in facilitating leadership and management workshops for over 130 industry technical managers and ensuring smooth operation of week-long 
                                    Technical Management Program (TMP). Technical managers came from companies including Blizzard, Credit Karma, Sandia National Laboratories, Lawrence Livermore National 
                                    Laboratories, and Advantech.</p>
                            </div>
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 id="entrepreneurship" className="text-section">Entrepreneurship</h2>
                            <div id="venturewell" className="mb-3">
                                <h3 className="text-company"><a href="https://venturewell.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>VentureWell</a></h3>
                                <p className="text-role">Entrepreneur | Jun &ndash; Sep 2021</p>
                                <p className="text-description">Participated in Verizon and CGI U Social Innovation Challenge&mdash;a startup accelerator&mdash;hosted by Verizon, Clinton Foundation, and 
                                    VentureWell as a representative for SISYPHUS Global Systems. Planned value proposition, determined value chain, performed competitive analysis, identified product-market 
                                    fit, and conducted professional interviews with subject matter experts to orient SISYPHUS's product in the direction for the most success. Organized and presented product 
                                    pitch to panel including Chelsea Clinton that beat 12 competitors and secured SISYPHUS's position for the competition's next stage.</p>
                            </div>
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                            <h2 id="extracurriculars" className="text-section">Extracurriculars</h2>
                            <div id="upe" className="mb-3">
                                <h3 className="text-company"><a href="https://upe.seas.ucla.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Upsilon Pi Epsilon</a></h3>
                                <p className="text-role">External Vice President | Sep 2021 &ndash; Jun 2024</p>
                                <p className="text-role">(prev) Entrepreneurship Chair, Entrepreneurship Intern</p>
                                <p className="text-description">Supervised UPE's alumni, corporate, and entrepreneurship committees, organized career fairs and networking events at UCLA with industry affiliates, 
                                    negotiated with Computer Science Department for improvements to curriculum, industry affiliate system, and student resources, tutored UCLA students in C++.</p>
                            </div>
                            <div id="vsu" className="mb-3">
                                <h3 className="text-company"><a href="https://www.instagram.com/vsubruins/" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>Vietnamese Student Union</a></h3>
                                <p className="text-role">Traditional Dance Member | Oct 2022 &ndash; Jun 2024</p>
                                <p className="text-role">Fiscal Committee | Sep 2023 &ndash; Jan 2024</p>
                                <p className="text-description">Participated in Vietnamese traditional dance team to learn choreography for annual Vietnamese Culture Night with over 1800 attendees. Filed funding 
                                    applications and budget proposals as well as organized fundraisers to secure over $50,000 in funding to support Vietnamese Culture Night.
                                </p>
                            </div>
                            <div id="seaclear" className="mb-3">
                                <h3 className="text-company"><a href="https://www.instagram.com/uclaseaclear/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>SEA CLEAR</a></h3>
                                <p className="text-role">Workshop Facilitator &amp; Mentor | Oct 2022 &ndash; Jun 2024</p>
                                <p className="text-description">Organized and facilitated workshops involving academic success, mental health, and cultural awareness to prospective UCLA transfer and first-year 
                                    students during Southeast Asian admit programs. Provided academic and career mentorship to Southeast Asian UCLA engineering students to ensure a fruitful undergraduate 
                                    experience and pathway to career success.</p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
    </body>
  );
};

export default Experience;

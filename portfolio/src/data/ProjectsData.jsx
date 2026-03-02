import React from 'react';
import portfolioImg from '../assets/Portfolio_Project.png';
import patientMgmtImg from '../assets/Patient_Management.png';
import hospitalMgmtImg from '../assets/Hospital_Management.png';
import contactFormImg from '../assets/Contact_Form.png';
import carRentalImg from '../assets/Car_Rental_System.png';
import ReadyAIImg from '../assets/ReadyAI.png';
import WhoopImg from '../assets/Whoop.png';
import CartImg from '../assets/Cart.png';

export const projects = [
  {
      id: "PortfolioWebsite",
      title: 'Portfolio Website',
      description: 'Developed a dynamic portfolio website using Angular to showcase academic projects and technical expertise. Implemented engaging interactive animations and responsive design to enhance user experience.',
      image: portfolioImg,
      technologies: ['Angular', 'SCSS', 'HTML', 'Typescript'],
      date: '2024',
      role: 'Frontend Developer',
      liveLink: 'https://anjanasruthir.github.io/Portfolio_Angular/',
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular',
      richContent: (
      <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
        
        <section>
          <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🌟</span> Overview
          </h3>
          <p>
            This is a fully responsive personal portfolio website built using Angular, SCSS, and TypeScript. It showcases my professional experience, education, skills, and projects while providing an interactive multi-step contact form for inquiries.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🛠</span> Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <div>
              <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Frontend</strong>
              <ul className="space-y-2 text-base">
                <li className="flex gap-2"><span className="text-blue-500">▹</span> Angular 15 (Single Page Application)</li>
                <li className="flex gap-2"><span className="text-blue-500">▹</span> TypeScript (For component logic)</li>
                <li className="flex gap-2"><span className="text-blue-500">▹</span> HTML & SCSS (For structure, design and responsiveness)</li>
                <li className="flex gap-2"><span className="text-blue-500">▹</span> Font Awesome & Devicons (For icons and styling)</li>
                <li className="flex gap-2"><span className="text-blue-500">▹</span> Angular Animations (For smooth transitions)</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Backend</strong>
              <ul className="space-y-2 text-base">
                <li className="flex gap-2"><span className="text-purple-500">▹</span> Node.js & Express (Handles contact form submissions)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">✨</span> Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base">
            <div>
              <strong className="text-slate-900 block mb-2 flex items-center gap-2">👤 About Page</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Profile picture & introduction</li>
                <li>Social media links (LinkedIn, GitHub, etc.)</li>
                <li>'What I Do' section showcasing expertise</li>
                <li>'Testimonials' section showcasing Recommendations</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-900 block mb-2 flex items-center gap-2">🎓 Education</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Displays academic qualifications dynamically</li>
                <li>Course details and CGPA included</li>
                <li>Fully responsive design</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-900 block mb-2 flex items-center gap-2">💼 Experience Page</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Interactive timeline layout for work experience</li>
                <li>Company logos, job descriptions, and skills used</li>
                <li>Hover effects for enhanced UX</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-900 block mb-2 flex items-center gap-2">⚡ Skills Page</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Categorized skills with devicons</li>
                <li>Hover effects for skill icons</li>
                <li>SCSS animations for interactivity</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-900 block mb-2 flex items-center gap-2">🚀 Projects Page</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Grid layout showcasing various projects</li>
                <li>Project descriptions, tech stack, and navigating to GitHub links</li>
                <li>Hover animations for cards</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-900 block mb-2 flex items-center gap-2">✉️ Contact Page</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Multi-step form for inquiries</li>
                <li>Progress bar to indicate steps</li>
                <li>Validation for form fields</li>
                <li>Responsive button interactions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🖥️</span> Installation & Setup
          </h3>
          <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl font-mono text-sm space-y-4 shadow-lg">
            <div>
              <span className="text-slate-500 block mb-1"># 1. Clone the Repository</span>
              <code className="text-green-400">git clone https://github.com/AnjanaSruthiR/portfolio-angular.git</code><br/>
              <code className="text-green-400">cd portfolio-angular</code>
            </div>
            <div>
              <span className="text-slate-500 block mb-1"># 2. Install Dependencies</span>
              <code className="text-blue-400">npm install</code>
            </div>
            <div>
              <span className="text-slate-500 block mb-1"># 3. Run the Development Server</span>
              <code className="text-purple-400">ng serve</code>
            </div>
          </div>
        </section>

      </div>
    )
    },
    {
      id: "PatientManagementApplication",
      title: 'Patient Management Application',
      description: 'Built a responsive patient portal with React, Vite, and Tailwind CSS; integrated MongoDB and Okta IAM for secure data management',
      image: patientMgmtImg,
      technologies: ['React+vite', 'TailwindCSS', 'Node', 'MongoDb', 'Okta', 'IAM'],
      date: '2025',
      role: 'Full Stack & Security Engineer',
      githubLink: 'https://github.com/AnjanaSruthiR/Patient_Management_Dashboards',
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌟</span> Overview
            </h3>
            <p>
              Designed and developed a secure Patient Health Portal emphasizing medical record data visualization. The goal was to create a modern, reliable web interface that enhances patient engagement and streamlines information access for users.
            </p>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠</span> Architecture & Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Frontend UI</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> React.js & Vite (Lightning-fast frontend rendering)</li>
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Tailwind CSS (Custom, responsive utility styling)</li>
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Data Visualization UI (Medical record dashboards)</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Backend & Security</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> MongoDB (Robust data management for medical records)</li>
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> Okta IAM (Secure Identity and Access Management)</li>
                </ul>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Key Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base">
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🛡️ High-Grade Security</strong>
                <p className="text-sm">Integrated Okta Identity and Access Management to ensure strict authentication protocols for accessing sensitive patient health data.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">📊 Data Visualization</strong>
                <p className="text-sm">Emphasized clean, readable medical record visualization, allowing patients to easily understand and engage with their health metrics.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🗄️ Robust Architecture</strong>
                <p className="text-sm">Utilized MongoDB to structure and manage complex healthcare datasets efficiently and reliably.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">⚡ Modern UX</strong>
                <p className="text-sm">Delivered a highly responsive, modern web interface using React and Vite that significantly enhances overall patient engagement.</p>
              </div>
            </div>
          </section>
  
        </div>
      )
    },
    {
      id: "OnlineMedicalManagementSystem",
      title: 'Online Medical Management System',
      description: 'Developed a comprehensive hospital management application using Java Swing, leveraging core engineering and design principles while integrating real-time data management.',
      image: hospitalMgmtImg,
      technologies: ['JavaSwing', 'Java', 'MySql'],
      date: '2024',
      role: 'Software Developer',
      githubLink: 'https://github.com/AnjanaSruthiR/Online_Medical_Management_System',
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌟</span> Overview
            </h3>
            <p>
              The Hospital Management Application is a comprehensive desktop solution designed to streamline hospital operations, manage patient data, and support effective clinical workflows. Built using <strong>Java Swing</strong> for the graphical interface and <strong>Java</strong> for the core logic, this application integrates with <strong>MySQL</strong> to ensure secure and efficient data management.
            </p>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠</span> Architecture & Tech Stack
            </h3>
            <p className="mb-6 text-base">The project follows a <strong>modular and layered architecture</strong>, separating frontend, backend services, and database components for maintainability and scalability.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Frontend</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Java Swing</li>
                  <li className="flex gap-2 text-sm text-slate-500">Provides an interactive GUI and main dashboard navigation.</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Backend</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> Java (Core)</li>
                  <li className="flex gap-2 text-sm text-slate-500">Handles business logic, data processing, and secure communication.</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Database</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-pink-500">▹</span> MySQL Server</li>
                  <li className="flex gap-2 text-sm text-slate-500">Manages hospital data, schema constraints, and CRUD operations.</li>
                </ul>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Key Features & Usage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base">
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🔐 Secure Auth & Roles</strong>
                <p className="text-sm">Implements strict role-based access control. Secure login ensures each stakeholder only accesses functionalities relevant to their responsibilities.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🗄️ Complete Data Management</strong>
                <p className="text-sm">Supports full CRUD (Create, Read, Update, Delete) operations for patient records, easily accessible via an intuitive interface.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🖥️ Intuitive Dashboard</strong>
                <p className="text-sm">The main dashboard provides seamless navigation to modules for patient registration, appointment scheduling, and settings.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">📊 Reporting & Analytics</strong>
                <p className="text-sm">Generates detailed, actionable reports to provide hospital management with clear operational insights.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">⚙️</span> Setup & Installation
            </h3>
            <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl font-mono text-sm space-y-5 shadow-lg">
              <div>
                <span className="text-slate-500 block mb-1 mt-3"># 1. Clone the Repository</span>
                <code className="text-green-400">git clone https://github.com/AnjanaSruthiR/Online_Medical_Management_System.git</code>
              </div>
              <div>
                <span className="text-slate-500 block mb-1"># 2. Configure Database</span>
                <code className="text-blue-400 block mb-1">- Install and run MySQL Server.</code>
                <code className="text-blue-400 block">- Create a new database and update connection settings in the config file.</code>
              </div>
              <div>
                <span className="text-slate-500 block mb-1"># 3. Compile & Run</span>
                <code className="text-purple-400 block mb-1">- Open the project in your preferred IDE.</code>
                <code className="text-purple-400 block">- Compile the source code and run the main application class.</code>
              </div>
            </div>
          </section>
  
        </div>
      )
    },
    {
      id: "CarRentalSystem",
      title: 'Car Rental System',
      description: 'Developed a robust relational database managing vehicles, customers, bookings, payments, and maintenance schedules, featuring an intuitive GUI and real-time PowerBI analytics.',
      image: carRentalImg,
      technologies: ['MySQL', 'Docker', 'JavaSwing', 'Power BI'],
      date: '2024',
      role: 'Software Developer & Data Analyst',
      githubLink: 'https://github.com/AnjanaSruthiR/Car-Rental-System---Database-Management',
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌟</span> Overview
            </h3>
            <p>
              The Car Rental System is a comprehensive platform designed to modernize the car rental industry by enhancing the customer experience, improving operational efficiency, and streamlining inventory management. This project replaces traditional record-keeping with a centralized digital solution, combining a robust database, a desktop GUI, and dynamic business intelligence dashboards.
            </p>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠</span> Architecture & Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Database Engine</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Microsoft SQL Server</li>
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Docker (Containerization)</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Frontend Application</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> Java (Core Logic)</li>
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> Java Swing (Desktop GUI)</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Business Intelligence</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-pink-500">▹</span> Power BI</li>
                </ul>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Core System Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 text-base">
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🗄️ Relational Database</strong>
                <p className="text-sm mb-2">Manages inventory, tracks customer records, and automates maintenance tasks.</p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                  <li>Vehicle & Inventory tracking</li>
                  <li>Customer booking history</li>
                  <li>Secure payment records</li>
                </ul>
                
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🖥️ Java Swing GUI</strong>
                <p className="text-sm mb-2">An intuitive admin dashboard for managing day-to-day rental operations.</p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                  <li>Full CRUD capabilities</li>
                  <li>Role-based access control</li>
                  <li>Responsive desktop design</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">📊 Power BI Dashboard</strong>
                <p className="text-sm mb-2">Interactive reporting solution providing real-time metric visualization.</p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                  <li>Revenue tracking & trends</li>
                  <li>Fleet utilization analysis</li>
                  <li>Customer booking insights</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span> Database Schema
              </h3>
              <p className="text-sm mb-3">Key entities managing the system:</p>
              <div className="flex flex-wrap gap-2">
                {['Address', 'Branch', 'Vehicle', 'Person', 'Employee', 'Customer', 'Insurance', 'Maintenance', 'Booking', 'Feedback', 'Billing'].map(table => (
                  <span key={table} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">
                    {table}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🚀</span> Future Enhancements
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><span className="text-blue-500">▹</span> <strong>Notification System:</strong> Real-time alerts for booking confirmations and vehicle returns.</li>
                <li className="flex gap-3"><span className="text-blue-500">▹</span> <strong>Payment Gateway:</strong> Secure payment integration for direct online transactions.</li>
                <li className="flex gap-3"><span className="text-blue-500">▹</span> <strong>Mobile App:</strong> Extend booking functionality to iOS and Android platforms.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">⚙️</span> Installation Guide
            </h3>
            <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl font-mono text-sm space-y-5 shadow-lg">
              <div>
                <span className="text-slate-500 block mb-1"># 1. Database Setup</span>
                <code className="text-blue-400 block">- Run CarRentalDatabase.sql to create tables.</code>
                <code className="text-blue-400 block">- Configure JDBC connection in the Java application.</code>
              </div>
              <div>
                <span className="text-slate-500 block mb-1"># 2. Application Setup (Requires JDK 11+)</span>
                <code className="text-green-400 block mb-1">git clone https://github.com/AnjanaSruthiR/Car-Rental-SystemDatabase-Management.git</code>
                <code className="text-purple-400 block">- Open in IDE, update db.properties, build and run.</code>
              </div>
              <div>
                <span className="text-slate-500 block mb-1"># 3. Power BI Setup</span>
                <code className="text-pink-400 block">- Open CarRentalDashboard.pbix in Power BI Desktop.</code>
                <code className="text-pink-400 block">- Refresh data source and publish to Power BI Service.</code>
              </div>
            </div>
          </section>
  
        </div>
      )
    },
    {
      id: "PrototypePersonalAIInterviewCoach",
      title: 'Prototype - Personal AI Interview Coach',
      description: 'ReadyAI is an innovative AI-powered platform meticulously designed for comprehensive interview preparation. It leverages structured self-assessment techniques to provide unparalleled feedback, ensuring users are thoroughly prepared for their next big opportunity.',
      image: ReadyAIImg,
      technologies: ['Moqups', 'UI/UX Design', 'User Research'],
      date: '2026',
      role: 'UI/UX Designer',
      liveLink: 'https://anjanasruthir.github.io/Prototype_Personal-AI-Interview-Coach/',
      githubLink: 'https://github.com/AnjanaSruthiR/Prototype_Personal-AI-Interview-Coach',
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">⚠️</span> The Problem
              </h3>
              <ul className="space-y-3 text-base text-slate-600">
                <li className="flex gap-3"><span className="text-red-500 mt-1">▹</span> Job seekers lack access to consistent, affordable coaching (often costing $100–$300/hour).</li>
                <li className="flex gap-3"><span className="text-red-500 mt-1">▹</span> Candidates struggle to objectively evaluate their own answers or gauge confidence.</li>
                <li className="flex gap-3"><span className="text-red-500 mt-1">▹</span> Existing platforms offer generic questions without company-specific context.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span> The Solution
              </h3>
              <ul className="space-y-3 text-base text-slate-600">
                <li className="flex gap-3"><span className="text-green-500 mt-1">▹</span> Delivers personalized, company-specific interview coaching via AI.</li>
                <li className="flex gap-3"><span className="text-green-500 mt-1">▹</span> Provides objective scoring across Technical, Behavioral, Confidence, and Clarity metrics.</li>
                <li className="flex gap-3"><span className="text-green-500 mt-1">▹</span> Supplies actionable, weekly improvement roadmaps for continuous growth.</li>
              </ul>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Platform Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <strong className="text-slate-900 block mb-4 font-bold text-lg flex items-center gap-2">🤖 1. AI Answer Analyzer</strong>
                <ul className="space-y-3 text-sm">
                  <li><strong>Filler Word Detection:</strong> NLP models detect "um," "like," and "you know."</li>
                  <li><strong>STAR Scoring:</strong> Analyzes text to score Situation, Task, Action, and Result completeness.</li>
                  <li><strong>Intelligent Rewriting:</strong> Generates improved versions of answers for practical comparison.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <strong className="text-slate-900 block mb-4 font-bold text-lg flex items-center gap-2">📹 2. Live Mock & Gesture Analysis</strong>
                <ul className="space-y-3 text-sm">
                  <li><strong>Real-time Computer Vision:</strong> Scores eye contact, posture, and hand gestures.</li>
                  <li><strong>Body Language Coaching:</strong> Reveals invisible habits like crossing arms.</li>
                  <li><strong>Live AI Tips:</strong> Displays on-screen guidance to maintain STAR structure.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <strong className="text-slate-900 block mb-4 font-bold text-lg flex items-center gap-2">🗺️ 3. Personalized Roadmaps</strong>
                <ul className="space-y-3 text-sm">
                  <li><strong>4-Week Plan:</strong> A structured journey from Foundations to Final Readiness.</li>
                  <li><strong>Adaptive Tasks:</strong> Daily practice quizzes and timed mock interviews.</li>
                  <li><strong>Gamification:</strong> Streak alerts and progress dashboards to foster development.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <strong className="text-slate-900 block mb-4 font-bold text-lg flex items-center gap-2">🏢 4. Company-Specific Prep</strong>
                <ul className="space-y-3 text-sm">
                  <li><strong>Industry Patterns:</strong> Tailored question banks for Google, Amazon, Meta, etc.</li>
                  <li><strong>Targeted Rounds:</strong> Supports Technical, Behavioral, System Design, and HR rounds.</li>
                </ul>
              </div>

            </div>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span> Design System
              </h3>
              <div className="space-y-4 text-sm bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-xs">Typography</span>
                  <span className="text-slate-800 font-medium">Poppins & Didact Gothic</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-xs">Primary Color</span>
                  <span className="text-blue-600 font-bold">#4263EB</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-xs">Themes</span>
                  <span className="text-slate-800 font-medium">Light & Dark Mode Support</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-xs">Resolution</span>
                  <span className="text-slate-800 font-medium">1024x768</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span> Pricing Model
              </h3>
              <div className="space-y-4 text-sm bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">🆓</div>
                  <div>
                    <strong className="text-slate-900 block">Free Tier</strong>
                    <span className="text-slate-500">Includes 3 feedback logs and basic dashboard access.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">🎓</div>
                  <div>
                    <strong className="text-blue-600 block">Student Plan ($2.99/mo)</strong>
                    <span className="text-slate-500">Automatic 70% discount applied via verified .edu email.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
        </div>
      )
    },
    {
      id: "WhoopWireframingProject",
      title: 'Whoop Wireframing Project',
      description: 'An analytical deep-dive and structural redesign of the Whoop mobile experience, focusing on information architecture and user flows.',
      image: WhoopImg,
      technologies: ['Balsamiq', 'UX Research', 'Information Architecture'],
      date: '2026',
      role: 'UX Researcher & Designer',
      githubLink: 'https://github.com/AnjanaSruthiR/Whoop-Wireframing-Project',
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          
          {/* Overview & Challenge Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">⌚</span> Project Overview
              </h3>
              <p className="text-base text-slate-600">
                WHOOP is a screenless wearable fitness tracker focused on three core pillars: <strong>Recovery, Strain, and Sleep</strong>. This project explores the current user experience, identifies friction points in data interaction, and proposes structural improvements through low-fidelity wireframes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔍</span> The Challenge
              </h3>
              <p className="text-base text-slate-600">
                While WHOOP excels at minimalist data delivery, new users often face a steep learning curve regarding complex biometrics (HRV, RHR, etc.). Additionally, secondary metrics lack the fluid interactivity found in the primary "Three Rings" interface, creating a fragmented data exploration experience.
              </p>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span> Strategic Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">📊 Interactive Secondary Metrics</strong>
                <p className="text-sm">Moving beyond static numbers by implementing "tap-and-drag" time-stamped charts for deeper, intuitive data exploration.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-purple-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">🧭 Contextual Onboarding</strong>
                <p className="text-sm">A "First Week" walkthrough explaining complex biometrics using the user's actual live data, rather than generic examples.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-pink-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">🖐️ Fluid Gesture Navigation</strong>
                <p className="text-sm">Implementing horizontal swipes to replace traditional button-heavy navigation, keeping the user immersed in their data.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-green-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">🔓 Freemium Layer</strong>
                <p className="text-sm">Opening raw data access to non-subscribers to lower the barrier to entry and showcase the app's analytical power.</p>
              </div>

            </div>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">📐</span> Wireframes (Balsamiq)
              </h3>
              <p className="text-base text-slate-600 mb-6">
                I utilized <strong>Balsamiq</strong> to create low-fidelity wireframes. This intentional design constraint allowed me to focus strictly on <strong>Information Architecture</strong> and <strong>User Flow</strong> without the distraction of high-fidelity visual styling or brand colors.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">Information Architecture</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">User Flow Mapping</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">Low-Fidelity</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">🛠</span> Use Case Catalog
              </h3>
              <div className="space-y-4 text-sm bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                  <div>
                    <strong className="text-slate-900 block text-base">Simple</strong>
                    <span className="text-slate-500">Daily quick-check of the 3 key metrics (Sleep, Recovery, Strain).</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                  <div>
                    <strong className="text-slate-900 block text-base">Middleweight</strong>
                    <span className="text-slate-500">Guided onboarding for new users and interactive exploration of secondary metrics.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="w-6 h-6 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                  <div>
                    <strong className="text-slate-900 block text-base">High-Level</strong>
                    <span className="text-slate-500">Long-term performance trend analysis and recovery-based training optimization.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
        </div>
      )
    },
    {
      id: "ShoppingCartUXImprovements",
      title: 'Shopping Cart UX Improvements',
      description: 'Refining the Checkout Experience: Leveraging Behavioral Design and Financial Transparency to Minimize Cart Abandonment',
      image: CartImg,
      technologies: ['Figma', 'UX Research', 'Behavioral Design'],
      date: '2026',
      role: 'UI/UX Designer & Researcher',
      githubLink: 'https://github.com/AnjanaSruthiR/Shopping_Cart_UX_Improvements_Figma',
      figmaLink: 'https://www.figma.com/design/k9iTwE3wt5mmeHepPOI9gh/Shopping-Cart-UX-Improvements?node-id=0-1&t=TR5emCD9p81w70Lt-1',
      mediumLink: 'https://medium.com/@ranga.anj/refining-the-checkout-experience-leveraging-behavioral-design-and-financial-transparency-to-0381ce94caf0?postPublishedType=initial',
      
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🛒</span> Project Overview
            </h3>
            <p className="mb-4">
              High cart abandonment rates are often the result of <strong>"sticker shock"</strong> and cognitive friction during the final steps of a purchase. This project focuses on redesigning the shopping cart and checkout flow by integrating behavioral design principles and proactive financial transparency.
            </p>
            <p>
              The primary goal is to transform the checkout from a point of friction into a seamless, trust-building experience that encourages completion without compromising user autonomy.
            </p>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🧠</span> Behavioral Design Framework
            </h3>
            <p className="text-base mb-6">I documented the full psychological framework behind this redesign on Medium, deeply analyzing how human behavior impacts digital conversion. Key concepts applied include:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">🏁 Goal Gradient Effect</strong>
                <p className="text-sm">Strategically using visual progress markers to show users how close they are to completion, accelerating their motivation to finish the checkout.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-green-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">💵 Price Anchoring</strong>
                <p className="text-sm">Mitigating cart abandonment and "sticker shock" through the early, proactive disclosure of taxes, shipping, and total costs.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md hover:border-purple-100">
                <strong className="text-slate-900 block mb-3 font-bold text-lg flex items-center gap-2">🧩 Cognitive Load</strong>
                <p className="text-sm">Streamlining form fields, leveraging auto-fill, and removing visual clutter to prevent decision fatigue during the crucial final steps.</p>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span> Key Features & UI Improvements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base">
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🧮 Dynamic Cost Calculator</strong>
                <p className="text-sm">Real-time updates to the cart total that eliminate "hidden fees" arriving at the final step.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">⚠️ Behavioral Nudges</strong>
                <p className="text-sm">Ethical implementation of urgency and scarcity cues (e.g., low stock alerts) that respect user autonomy.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">✨ Micro-interactions</strong>
                <p className="text-sm">Interactive feedback loops and subtle animations that confirm user actions, reducing anxiety and uncertainty.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🚪 Guest Checkout Optimization</strong>
                <p className="text-sm">Significantly reducing barriers to entry for first-time shoppers by prioritizing a frictionless guest flow.</p>
              </div>
            </div>
          </section>

        </div>
      )
    },
    {
      id: "ContactForm",
      title: 'Contact Form',
      description: 'An interactive contact form on my portfolio website enables visitor connections. Built with Node.js and Express, it was tested via Postman to ensure reliable communication.',
      image: contactFormImg,
      technologies: ['Node', 'Express', 'Postman'],
      date: '2025',
      role: 'Backend Developer',
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular/tree/main/PortfolioAngular/contact-form-backend',
      richContent: (
        <div className="space-y-16 text-slate-600 font-light text-lg leading-relaxed">
          
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌟</span> Overview
            </h3>
            <p>
              I built a custom backend service to handle messages from my portfolio website safely and quickly. Instead of using a paid email service, I created a custom server that securely packages visitor messages and sends them straight to my inbox.
            </p>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠</span> Tools Used
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Core Server</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Node & Express (Runs the server)</li>
                  <li className="flex gap-2"><span className="text-blue-500">▹</span> Nodemailer (Sends the emails)</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900 block mb-3 font-bold uppercase tracking-widest text-xs">Security & Testing</strong>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> CORS (Blocks unwanted website traffic)</li>
                  <li className="flex gap-2"><span className="text-purple-500">▹</span> Postman (Checks that messages send properly)</li>
                </ul>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base">
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🛡️ Safe Connections</strong>
                <p className="text-sm">The server only accepts messages from my specific website link, blocking spam and outside access.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">✅ Input Checking</strong>
                <p className="text-sm">It makes sure visitors fill out their name, email, and message before trying to send anything, preventing blank emails.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">✉️ Instant Delivery</strong>
                <p className="text-sm">Uses a direct connection to Gmail to package the visitor's details and deliver them instantly.</p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-2 flex items-center gap-2">🔒 Hidden Passwords</strong>
                <p className="text-sm">Email logins and private keys are kept strictly hidden from the public code using special files.</p>
              </div>
            </div>
          </section>
        </div>
      )
    }
  ];
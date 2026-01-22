import portfolioImg from '../assets/Portfolio_Project.png';
import patientMgmtImg from '../assets/Patient_Management.png';
import hospitalMgmtImg from '../assets/Hospital_Management.png';
import contactFormImg from '../assets/Contact_Form.png';
import carRentalImg from '../assets/Car_Rental_System.png';

export const projects = [
  {
      title: 'Portfolio Website',
      description: 'Developed a dynamic portfolio website using Angular to showcase academic projects and technical expertise. Implemented engaging interactive animations and responsive design to enhance user experience.',
      image: portfolioImg,
      technologies: ['Angular', 'SCSS', 'HTML', 'Typescript'],
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular'
    },
    {
      title: 'Patient Management Application',
      description: 'Built a responsive patient portal with React, Vite, and Tailwind CSS; integrated MongoDB and Okta IAM for secure data management',
      image: patientMgmtImg,
      technologies: ['React+vite', 'TailwindCSS', 'Node', 'MongoDb', 'Okta', 'IAM'],
      githubLink: 'https://github.com/AnjanaSruthiR/Patient_Management_Dashboards'
    },
    {
      title: 'Online Medical Management System',
      description: 'Developed a comprehensive hospital management application using Java Swing, leveraging core engineering and design principles while integrating real-time data management.',
      image: hospitalMgmtImg,
      technologies: ['JavaSwing', 'Java', 'MySql'],
      githubLink: 'https://github.com/AnjanaSruthiR/Online_Medical_Management_System'
    },
    {
      title: 'Contact Form',
      description: 'An interactive contact form on my portfolio website enables visitor connections. Built with Node.js and Express, it was tested via Postman to ensure reliable communication.',
      image: contactFormImg,
      technologies: ['Node', 'Express', 'Postman'],
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular/tree/main/PortfolioAngular/contact-form-backend'
    },
    {
      title: 'Car Rental System',
      description: 'Developed a robust relational database managing vehicles, customers, bookings, payments, and maintenance schedules, featuring an intuitive GUI and real-time PowerBI analytics.',
      image: carRentalImg,
      technologies: ['MySQL', 'Docker', 'JavaSwing', 'Power BI'],
      githubLink: 'https://github.com/AnjanaSruthiR/Car-Rental-System---Database-Management'
    }
  ];
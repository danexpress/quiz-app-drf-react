import React from 'react';
import './Home.scss';
import { NavLink, Link } from 'react-router-dom'
// import Logo from '../../assets/formonix.png'
// import Navbar from '../NavBar/Navbar';


const Home = () => {
  return (
    <>
 {/* <Navbar/> */}
       <section className="banner">
  <div className="container">
    <div className="banner-text">
      <h1>AWS SOLUTIONS ARCHITECT EXAMS</h1>
      <p><strong>You can practice for your associate exams without the need for any registration or paywall.   </strong> This tool helps you prepare for exams by providing curated questions. It generates 10 questions with a 1-minute time limit each, promoting repetition and reducing overwhelm.</p>
      <Link to="/quiz"><button>Get Started</button></Link> 
    </div>
  </div>
  <img className="banner-image" src="https://preview.ibb.co/bMi5Y6/banner_img.png" alt="monitoring" />
</section>

<div className="card-container">
  
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      <img className="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" />
      <h3 className="card-title">Monitoring</h3>
      <p className="card-text">Track your journey, monitor your progress. Our app keeps you in control, ensuring you're on the right path to AWS Solutions Architect success.</p>
      {/* <a className="card-link" href="#">Learn more</a> */}
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      <img className="card-icon" src="https://image.ibb.co/jfmg6R/cloud_firewalls.png" alt="monitoring" />
      <h3 className="card-title">Review, learn, and conquer</h3>
      <p className="card-text">Our app not only highlights your incorrect answers but also provides the correct solutions, turning every mistake into an opportunity for improvement on your AWS Solutions Architect journey.</p>
      {/* <a className="card-link" href="#">Learn more</a> */}
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      <img className="card-icon" src="https://image.ibb.co/fcnzt6/team_management.png" alt="team management" />
      <h3 className="card-title">Experience the real-world intensity of AWS Solutions Architect exams in bite-sized challenges</h3>
      <p className="card-text">Our timed quizzes, featuring 10 questions in 10 minutes, provide a focused and efficient way to sharpen your skills, preparing you for success in the full-length 60-question, 120-minute exam.</p>
      {/* <a className="card-link" href="#">Learn more</a> */}
      </div>
    </div>
    {/* <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      <img className="card-icon" src="https://image.ibb.co/evyiLm/backups.png" alt="monitoring" />
      <h3 className="card-title">Backups</h3>
      <p className="card-text">Backups run automatically on your Droplets each week and are stored for four weeks–add 20% of monthly Droplet cost.</p>
      <a className="card-link" href="#">Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      <img className="card-icon" src="https://image.ibb.co/g9bERR/snapshots.png" alt="snapshots" />
      <h3 className="card-title">Snapshots</h3>
      <p className="card-text">Scale out your system effortlessly. Just take a snapshot of an existing server, then spin up a new Droplet from the snapshot–add $0.05 per gigabyte per month.</p>
      <a className="card-link" href="#">Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      <img className="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" />
      <h3 className="card-title">Monitoring</h3>
      <p className="card-text">Collect metrics on visibility, monitor Droplet performance and receive alerts when problems arise in your infrastructure–at no additional cost.</p>
      <a className="card-link" href="#">Learn more</a>
      </div>
    </div> */}
 
</div>
<footer>
<footer class="footer">
    <p>&copy; 2023 Formonix Solution | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
  </footer></footer>
</>

        
  )
}

export default Home
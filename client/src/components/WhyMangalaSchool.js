// src/components/WhyMangalaSchool.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';

const WhyMangalaSchool = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/content');
      setContent(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching content:', error);
      setError('Failed to load content. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="about-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={fetchContent} className="retry-btn">Retry</button>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="about-error">
        <h2>No Content Available</h2>
        <p>Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Why Choose Mangala School?</h1>
          <p>Discover What Makes Us Different</p>
        </div>
      </section>

      <section className="about-overview">
        <div className="about-block">
          <h2>Academic Excellence</h2>
          <p>
            At Mangala School, we maintain the highest academic standards with a curriculum designed to challenge and inspire students. Our experienced faculty uses innovative teaching methodologies to ensure deep understanding and critical thinking skills development. We consistently achieve outstanding results in board examinations and competitive entrance tests.
          </p>
        </div>

        <div className="about-block">
          <h2>Holistic Development</h2>
          <p>
            We believe in nurturing the complete personality of each child. Our comprehensive approach includes academics, sports, arts, music, and character building activities. Students participate in various clubs, competitions, and community service programs that develop leadership skills and social responsibility.
          </p>
        </div>

        <div className="about-block">
          <h2>State-of-the-Art Facilities</h2>
          <p>
            Our campus features modern classrooms equipped with smart boards, well-equipped science and computer laboratories, a comprehensive library, sports facilities, and dedicated spaces for arts and crafts. These facilities provide an optimal learning environment that supports both traditional and digital learning approaches.
          </p>
        </div>

        <div className="about-block">
          <h2>Experienced Faculty</h2>
          <p>
            Our teaching staff comprises highly qualified and experienced educators who are passionate about their subjects and committed to student success. They undergo regular professional development to stay updated with the latest educational trends and teaching methodologies.
          </p>
        </div>

        <div className="about-block">
          <h2>Individual Attention</h2>
          <p>
            With optimal student-teacher ratios, we ensure that each child receives personalized attention. Our teachers identify individual learning styles and provide customized support to help every student reach their full potential. Regular parent-teacher interactions keep families engaged in their child's educational journey.
          </p>
        </div>

        <div className="about-block">
          <h2>Strong Alumni Network</h2>
          <p>
            Our graduates have gone on to excel in various fields including medicine, engineering, business, arts, and public service. Our strong alumni network provides mentorship opportunities and career guidance to current students, creating a supportive community that extends beyond graduation.
          </p>
        </div>

        <div className="about-block">
          <h2>Values-Based Education</h2>
          <p>
            We integrate moral and ethical values into our curriculum, helping students develop strong character and integrity. Our approach ensures that academic success is balanced with personal growth and social responsibility, preparing students to be compassionate leaders in their communities.
          </p>
        </div>

        <div className="about-block">
          <h2>Innovation and Technology</h2>
          <p>
            We embrace educational technology to enhance learning experiences. From interactive digital content to online learning platforms, we prepare our students for the digital age while maintaining the importance of human connection and traditional values in education.
          </p>
        </div>
      </section>

    </div>
  );
};

export default WhyMangalaSchool;
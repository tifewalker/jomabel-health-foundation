import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Calendar, User, Tag, Search, ChevronRight } from 'lucide-react';

// Images
import heroImage from '../assests/images/outreach5.jpeg';
import constructionImg from '../assests/images/an2.jpg';
import outreachImg from '../assests/images/outreach2.jpeg';
import founderImg from '../assests/images/founderphoto.jpeg';
import maternalImg from '../assests/images/maternal-and-child-health-.jpg';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Medical Center Construction Reaches 70% Completion",
    excerpt: "The JoMabel Medical Center in Ufuma, Anambra State is now 70% complete. The facility will provide primary care, maternal health services, diagnostics, and chronic disease management to thousands of families.",
    content: `
      <p>The JoMabel Medical Center in Ufuma, Anambra State is now 70% complete. This milestone brings us one step closer to delivering quality healthcare to thousands of families in southeastern Nigeria.</p>
      
      <h3>Key Milestones Achieved</h3>
      <ul>
        <li>Building structure completed</li>
        <li>Roof installation finished</li>
        <li>Internal wiring underway</li>
        <li>Plumbing systems installed</li>
      </ul>
      
      <h3>What's Next</h3>
      <p>The next phase includes equipment installation, interior finishing, and landscaping. We anticipate opening the doors to patients in early 2025.</p>
      
      <h3>Services Coming Soon</h3>
      <ul>
        <li>Primary & Preventive Care</li>
        <li>Maternal & Child Health</li>
        <li>Chronic Disease Management</li>
        <li>Diagnostic & Laboratory Services</li>
        <li>Emergency & Trauma Care</li>
      </ul>
      
      <p>Your continued support makes this possible. Thank you for being part of this journey to transform healthcare in rural Nigeria.</p>
    `,
    category: "Construction Updates",
    date: "April 5, 2024",
    author: "JoMabel Team",
    readTime: "3 min read",
    image: constructionImg,
    slug: "medical-center-construction-70-percent"
  },
  {
    id: 2,
    title: "A Message from Clara Ada Ogbaa: Why I Started JHF",
    excerpt: "Healthcare should never be a privilege reserved for a few. It is a human right — and it is the legacy we are called to leave.",
    content: `
      <p>When I survived cancer twice and received a kidney transplant, I knew I had been given a second chance. That second chance belongs to Ufuma. That is why JoMabel Healthcare Foundation exists.</p>
      
      <h3>My Journey</h3>
      <p>Born in Ufuma, Anambra State, I built a career as an educator in the United States. But it was my own journey through illness that transformed my life's mission entirely.</p>
      
      <p>I experienced firsthand what it means to fight for your life — and how access to quality healthcare can mean the difference between living and dying. I knew that millions in my hometown faced that same fight every day, without the resources I had been fortunate enough to access.</p>
      
      <h3>A Leap of Faith</h3>
      <p>Using my own modest retirement savings, I began building a healthcare campus in Ufuma — not waiting for someone else to act, but breaking ground. Today, JoMabel Healthcare Foundation is that vision made real.</p>
      
      <h3>My Promise</h3>
      <p>Healthcare should never be a privilege reserved for a few. It is a human right — and it is the legacy we are called to leave. Thank you for joining me on this journey.</p>
      
      <p>— Clara Ada Ogbaa, Ed.D., Founder & Executive Director</p>
    `,
    category: "Founder Updates",
    date: "April 3, 2024",
    author: "Clara Ada Ogbaa",
    readTime: "4 min read",
    image: founderImg,
    slug: "message-from-founder-clara-ogbaa"
  },
  {
    id: 3,
    title: "Medical Outreach Serves 300+ Families in Ufuma",
    excerpt: "Our recent medical outreach mission provided free consultations, screenings, and medications to over 300 families in Ufuma and surrounding communities.",
    content: `
      <p>Our recent medical outreach mission provided free consultations, screenings, and medications to over 300 families in Ufuma and surrounding communities. Working with local health workers, we identified critical health needs and provided referrals for follow-up care.</p>
      
      <h3>Services Provided</h3>
      <ul>
        <li>Blood pressure screening — 287 individuals</li>
        <li>Malaria testing — 312 individuals</li>
        <li>Blood sugar testing — 245 individuals</li>
        <li>Health education sessions — 400+ attendees</li>
        <li>Referrals for specialist care — 56 individuals</li>
      </ul>
      
      <h3>Community Impact</h3>
      <p>One community member shared: "Before JoMabel Healthcare Foundation reached our community, accessing medical care was a struggle. Today, my family receives proper treatment and health education. This foundation has truly restored hope to our family."</p>
      
      <h3>Thank You to Our Volunteers</h3>
      <p>We extend our deepest gratitude to the healthcare workers and volunteers who made this mission possible. Your dedication saves lives.</p>
      
      <h3>Upcoming Missions</h3>
      <p>Our next outreach mission is scheduled for May 2024. To support our work, please consider making a donation or volunteering with us.</p>
    `,
    category: "Community Outreach",
    date: "March 28, 2024",
    author: "JoMabel Team",
    readTime: "3 min read",
    image: outreachImg,
    slug: "medical-outreach-serves-300-families"
  },
  {
    id: 4,
    title: "Maternal Health Initiative Expands to New Communities",
    excerpt: "Our Maternal & Child Health Initiative is now reaching 5 new communities, providing safe pregnancy and delivery services to expectant mothers.",
    content: `
      <p>Our Maternal & Child Health Initiative is now reaching 5 new communities, providing safe pregnancy and delivery services to expectant mothers who previously had limited access to care.</p>
      
      <h3>Program Highlights</h3>
      <ul>
        <li>150+ expectant mothers currently enrolled</li>
        <li>25 successful deliveries supported</li>
        <li>200+ children received immunization</li>
        <li>300+ mothers attended health education sessions</li>
      </ul>
      
      <h3>Why Maternal Health Matters</h3>
      <p>Nigeria ranks #6 among countries with the highest maternal death rates globally. Many of these deaths are preventable with proper prenatal care, skilled birth attendants, and emergency obstetric services.</p>
      
      <h3>Services We Provide</h3>
      <ul>
        <li>Prenatal checkups and screenings</li>
        <li>Skilled birth attendance</li>
        <li>Postnatal care for mothers and babies</li>
        <li>Immunization and nutrition support</li>
        <li>Health education for families</li>
      </ul>
      
      <h3>Looking Ahead</h3>
      <p>We plan to expand this initiative to 10 additional communities by the end of the year. Your support helps us reach more mothers and children with life-saving care.</p>
    `,
    category: "Program Updates",
    date: "March 22, 2024",
    author: "JoMabel Team",
    readTime: "3 min read",
    image: maternalImg,
    slug: "maternal-health-initiative-expands"
  }
];

const categories = [
  "All",
  "Construction Updates",
  "Founder Updates",
  "Community Outreach",
  "Program Updates",
  "Health Education",
  "Events"
];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      <style>{`
        .blog-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section */
        .blog-hero {
          position: relative;
          height: 40vh;
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .blog-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
        }
        .blog-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
        }
        .blog-hero h1 {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .blog-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
        }
        
        /* Blog Content */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px;
        }
        
        /* Search and Filter Bar */
        .blog-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #E5E7EB;
        }
        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .category-btn {
          padding: 8px 20px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          background: #F3F4F6;
          color: #4B5563;
          border: none;
        }
        .category-btn:hover {
          background: #EBF5FB;
          color: #1D8FD4;
        }
        .category-btn.active {
          background: #1D8FD4;
          color: #ffffff;
        }
        .search-box {
          display: flex;
          align-items: center;
          border: 1px solid #E5E7EB;
          border-radius: 40px;
          padding: 8px 16px;
          background: #ffffff;
        }
        .search-box input {
          border: none;
          outline: none;
          padding: 8px;
          width: 200px;
          font-size: 14px;
        }
        
        /* Blog Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .blog-card {
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          border-color: #1D8FD4;
        }
        .blog-card-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }
        .blog-card-content {
          padding: 24px;
        }
        .blog-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #1D8FD4;
          background: #EBF5FB;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
        }
        .blog-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .blog-excerpt {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 12px;
          color: #9CA3AF;
          margin-bottom: 16px;
        }
        .blog-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .read-more {
          color: #1D8FD4;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }
        .read-more:hover {
          gap: 10px;
        }
        
        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }
        .modal-content {
          max-width: 800px;
          width: 100%;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        .modal-body {
          padding: 32px;
        }
        .modal-category {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #1D8FD4;
          background: #EBF5FB;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .modal-title {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }
        .modal-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E5E7EB;
        }
        .modal-content-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
        }
        .modal-content-text h3 {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 24px 0 12px;
        }
        .modal-content-text ul {
          margin: 12px 0;
          padding-left: 20px;
        }
        .modal-content-text li {
          margin: 8px 0;
        }
        .close-modal {
          position: sticky;
          top: 0;
          right: 0;
          float: right;
          margin: 16px;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 24px;
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1D8FD4 0%, #1570A6 100%);
          padding: 64px 24px;
          text-align: center;
          color: #ffffff;
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .cta-description {
          font-size: 18px;
          opacity: 0.95;
          margin-bottom: 32px;
        }
        .cta-btn {
          background: #ffffff;
          color: #1D8FD4;
          border: none;
          border-radius: 10px;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        @media (max-width: 768px) {
          .blog-hero h1 { font-size: 32px; }
          .blog-grid { grid-template-columns: 1fr; }
          .blog-controls { flex-direction: column; align-items: stretch; }
          .search-box input { width: 100%; }
          .modal-title { font-size: 22px; }
          .modal-body { padding: 20px; }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="blog-hero">
        <img src={heroImage} alt="Blog" className="blog-hero-image" />
        <div className="blog-hero-overlay" />
        <div className="blog-hero-content">
          <h1>Stories & Updates</h1>
          <p>News, updates, and stories from JoMabel Healthcare Foundation</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-container">
        <div className="blog-controls">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="search-box">
            <Search size={18} color="#9CA3AF" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <div key={post.id} className="blog-card" onClick={() => setSelectedPost(post)}>
              <img src={post.image} alt={post.title} className="blog-card-image" />
              <div className="blog-card-content">
                <span className="blog-category">{post.category}</span>
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-meta">
                  <span><Calendar size={12} /> {post.date}</span>
                  <span><User size={12} /> {post.author}</span>
                  <span>📖 {post.readTime}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="read-more">Read More <ChevronRight size={14} /></span>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px' }}>
            <p>No articles found. Try a different search term.</p>
          </div>
        )}
      </div>

      {/* Modal for Full Article */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPost(null)}>×</button>
            <img src={selectedPost.image} alt={selectedPost.title} className="modal-image" />
            <div className="modal-body">
              <span className="modal-category">{selectedPost.category}</span>
              <h2 className="modal-title">{selectedPost.title}</h2>
              <div className="modal-meta">
                <span><Calendar size={14} /> {selectedPost.date}</span>
                <span><User size={14} /> {selectedPost.author}</span>
                <span>📖 {selectedPost.readTime}</span>
              </div>
              <div className="modal-content-text" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="cta-section">
        <h3 className="cta-title">Stay Updated</h3>
        <p className="cta-description">
          Subscribe to our newsletter to receive the latest updates from JoMabel Healthcare Foundation.
        </p>
        <button className="cta-btn" onClick={() => navigate('/contact')}>
          Subscribe Now
          <ArrowRight size={16} />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
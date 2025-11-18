import { useState, useEffect } from 'react';
import './Blogs.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

  // Mock blog data
  const blogData = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt:
        'Exploring the latest trends and technologies shaping the future of web development, from AI integration to Web3.',
      content: 'Full content about web development trends...',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'technology',
      tags: ['webdev', 'trends', 'javascript'],
      image:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500',
      featured: true,
      likes: 42,
      comments: 12,
    },
    {
      id: 2,
      title: 'Mastering React Hooks: A Comprehensive Guide',
      excerpt:
        'Deep dive into React Hooks with practical examples and best practices for modern React development.',
      content: 'Full content about React Hooks...',
      author: 'Mike Johnson',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'programming',
      tags: ['react', 'hooks', 'javascript'],
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500',
      featured: false,
      likes: 38,
      comments: 8,
    },
    {
      id: 3,
      title: 'UI/UX Design Principles for 2024',
      excerpt:
        'Essential design principles and patterns that will dominate user interface design in the coming year.',
      content: 'Full content about UI/UX design...',
      author: 'Emma Davis',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'design',
      tags: ['design', 'uiux', 'trends'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500',
      featured: false,
      likes: 29,
      comments: 5,
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Architecture',
      excerpt:
        'Learn how to design and implement cloud-native applications that can scale to millions of users.',
      content: 'Full content about cloud architecture...',
      author: 'Alex Rodriguez',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'technology',
      tags: ['cloud', 'aws', 'architecture'],
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500',
      featured: false,
      likes: 31,
      comments: 7,
    },
    {
      id: 5,
      title: 'The Psychology of Color in Web Design',
      excerpt:
        'How color choices impact user behavior and conversion rates in digital products.',
      content: 'Full content about color psychology...',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'design',
      tags: ['design', 'psychology', 'colors'],
      image:
        'https://images.unsplash.com/photo-1491897554428-130a60dd4757?w=500',
      featured: false,
      likes: 27,
      comments: 4,
    },
    {
      id: 6,
      title: 'Getting Started with TypeScript',
      excerpt:
        "A beginner-friendly introduction to TypeScript and why it's becoming essential for modern web development.",
      content: 'Full content about TypeScript...',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'programming',
      tags: ['typescript', 'javascript', 'beginners'],
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      featured: false,
      likes: 35,
      comments: 9,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogData.length },
    {
      id: 'technology',
      name: 'Technology',
      count: blogData.filter((blog) => blog.category === 'technology').length,
    },
    {
      id: 'programming',
      name: 'Programming',
      count: blogData.filter((blog) => blog.category === 'programming').length,
    },
    {
      id: 'design',
      name: 'Design',
      count: blogData.filter((blog) => blog.category === 'design').length,
    },
  ];

  const popularTags = [
    'webdev',
    'react',
    'javascript',
    'design',
    'cloud',
    'typescript',
    'uiux',
    'trends',
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBlogs(blogData);
      setFilteredBlogs(blogData);
      setFeaturedPost(blogData.find((blog) => blog.featured));
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let results = blogs;

    // Filter by category
    if (activeCategory !== 'all') {
      results = results.filter((blog) => blog.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredBlogs(results);
  }, [activeCategory, searchTerm, blogs]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleLike = (blogId) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
    showNotification('❤️ Liked the post!');
  };

  const handleBookmark = (blogId) => {
    console.log(`Bookmarked post with ID: ${blogId}`);
    showNotification('🔖 Post bookmarked!');
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="blogs-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading latest articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Insights & <span className="highlight">Innovation</span>
          </h1>
          <p className="hero-subtitle">
            Discover the latest trends, tutorials, and insights in technology,
            programming, and design from industry experts.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Articles Published</p>
          </div>
          <div className="stat">
            <h3>10K+</h3>
            <p>Monthly Readers</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Expert Writers</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-section">
          <div className="section-header">
            <h2>Featured Post</h2>
            <div className="header-decoration"></div>
          </div>
          <div className="featured-post">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-content">
              <div className="post-meta">
                <span className="category-tag featured">
                  {featuredPost.category}
                </span>
                <span className="date">{formatDate(featuredPost.date)}</span>
                <span className="read-time">{featuredPost.readTime}</span>
              </div>
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="author-info">
                <div className="author-avatar">👩‍💻</div>
                <div className="author-details">
                  <span className="author-name">{featuredPost.author}</span>
                  <div className="post-stats">
                    <span>❤️ {featuredPost.likes} likes</span>
                    <span>💬 {featuredPost.comments} comments</span>
                  </div>
                </div>
              </div>
              <div className="featured-actions">
                <button className="btn-primary">Read Full Article</button>
                <button
                  className="btn-icon"
                  onClick={() => handleLike(featuredPost.id)}
                >
                  ❤️ Like
                </button>
                <button
                  className="btn-icon"
                  onClick={() => handleBookmark(featuredPost.id)}
                >
                  🔖 Bookmark
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="blog-layout">
        <div className="blog-main">
          {/* Categories Filter */}
          <div className="categories-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                onClick={() => handleCategoryFilter(category.id)}
              >
                {category.name}
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <section className="blog-grid-section">
            <div className="section-header">
              <h2>Latest Articles</h2>
              <p>Stay updated with our newest content</p>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="no-results">
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="blog-card"
                    data-aos="fade-up"
                  >
                    <div className="blog-image">
                      <img src={blog.image} alt={blog.title} />
                      <div className="card-overlay">
                        <button
                          className="icon-btn"
                          onClick={() => handleLike(blog.id)}
                        >
                          ❤️
                        </button>
                        <button
                          className="icon-btn"
                          onClick={() => handleBookmark(blog.id)}
                        >
                          🔖
                        </button>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="post-meta">
                        <span className={`category-tag ${blog.category}`}>
                          {blog.category}
                        </span>
                        <span className="date">{formatDate(blog.date)}</span>
                      </div>
                      <h3 className="blog-title">{blog.title}</h3>
                      <p className="blog-excerpt">{blog.excerpt}</p>
                      <div className="blog-footer">
                        <div className="author">
                          <span className="author-avatar-small">👤</span>
                          <span>{blog.author}</span>
                        </div>
                        <div className="post-stats-small">
                          <span>❤️ {blog.likes}</span>
                          <span>💬 {blog.comments}</span>
                          <span>⏱️ {blog.readTime}</span>
                        </div>
                      </div>
                      <div className="tags">
                        {blog.tags.map((tag) => (
                          <span key={tag} className="tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Popular Tags */}
          <div className="sidebar-widget">
            <h3>Popular Tags</h3>
            <div className="tags-cloud">
              {popularTags.map((tag) => (
                <button key={tag} className="tag-cloud">
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="sidebar-widget newsletter-widget">
            <h3>📧 Stay Updated</h3>
            <p>Get the latest articles delivered to your inbox</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary small">
                Subscribe
              </button>
            </form>
          </div>

          {/* Recent Posts */}
          <div className="sidebar-widget">
            <h3>Recent Posts</h3>
            <div className="recent-posts">
              {blogs.slice(0, 3).map((blog) => (
                <div key={blog.id} className="recent-post">
                  <img src={blog.image} alt={blog.title} />
                  <div className="recent-post-content">
                    <h4>{blog.title}</h4>
                    <span className="recent-date">{formatDate(blog.date)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="sidebar-widget">
            <h3>Follow Us</h3>
            <div className="social-links">
              <button
                className="social-btn twitter"
                onClick={() =>
                  window.open(
                    'https://twitter.com/YourHandle',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                🐦 Twitter
              </button>
              <button
                className="social-btn linkedin"
                onClick={() =>
                  window.open(
                    'https://linkedin.com/in/ajay-mudettula',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                💼 LinkedIn
              </button>
              <button
                className="social-btn github"
                onClick={() =>
                  window.open(
                    'https://github.com/AjaySmarc',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                🐙 GitHub
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Load More Section */}
      <section className="load-more-section">
        <button className="btn-outline large">Load More Articles</button>
      </section>

      {/* Notification */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default Blogs;

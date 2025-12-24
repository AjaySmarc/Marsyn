import { useState, useEffect, useRef } from 'react';
import './Blogs.css';
import blogData from '../data/blogitems';
// Removed BinarySearch import if not being used

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [showDetailedView, setShowDetailedView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const containerRef = useRef(null);
  const blogsPerPage = 6;
  const categories = ['All', ...new Set(blogData.map((blog) => blog.category))];

  useEffect(() => {
    setTimeout(() => {
      setBlogs(blogData);
      setLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search function
  const searchBlogs = () => {
    if (!searchInput.trim()) {
      setSearchResults([]);
      return;
    }

    const results = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchInput.toLowerCase()) ||
        blog.tags?.some((tag) =>
          tag.toLowerCase().includes(searchInput.toLowerCase())
        ) ||
        blog.description?.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  // Handle Enter key press for search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchBlogs();
    }
  };

  // Filter blogs based on category
  const filteredBlogs =
    activeCategory === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  // Use search results if search is active, otherwise use filtered blogs
  const displayBlogs = searchResults.length > 0 ? searchResults : filteredBlogs;

  const totalBlogs = displayBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = displayBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setShowDetailedView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setShowDetailedView(false);
    setSelectedBlog(null);
    setSearchResults([]);
    setSearchInput('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setSearchResults([]);
    setSearchInput('');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: containerRef.current?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    if (!e.target.value.trim()) {
      setSearchResults([]);
    }
  };

  if (loading) {
    return (
      <div className="luxury-loading">
        <div className="luxury-spinner"></div>
        <p className="luxury-loading-text">Curating content...</p>
      </div>
    );
  }

  if (showDetailedView && selectedBlog) {
    return (
      <div className="luxury-container">
        {/* Reading Progress Bar */}
        <div
          className="reading-progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        <div className="luxury-article">
          {/* Back Navigation */}
          <nav className="article-nav">
            <button className="back-to-blog" onClick={handleBackToList}>
              ← All Essays
            </button>
            <div className="article-meta-mobile">
              <span className="article-category">{selectedBlog.category}</span>
              <span className="article-date">
                {formatDate(selectedBlog.date)}
              </span>
            </div>
          </nav>

          {/* Article Hero */}
          <header className="article-header">
            <div className="article-category-tag">{selectedBlog.category}</div>
            <h1 className="article-title">{selectedBlog.title}</h1>
            <p className="article-excerpt">{selectedBlog.excerpt}</p>

            <div className="article-meta">
              <time className="article-date">
                {formatDate(selectedBlog.date)}
              </time>
              <span className="article-read-time">
                {selectedBlog.readTime} read
              </span>
            </div>
          </header>

          {/* Hero Image */}
          {selectedBlog.image && (
            <figure className="article-hero-image">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
              {selectedBlog.imageCaption && (
                <figcaption className="image-caption">
                  {selectedBlog.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Article Content */}
          <article className="article-content">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </article>

          {/* Article Footer */}
          <footer className="article-footer">
            <div className="article-tags">
              {selectedBlog.tags?.map((tag, index) => (
                <span key={index} className="article-tag">
                  #{tag}
                  {index < selectedBlog.tags.length - 1 && ' · '}
                </span>
              ))}
            </div>

            <div className="article-actions">
              <button className="back-to-list-btn" onClick={handleBackToList}>
                Return to Essays
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="luxury-container" ref={containerRef}>
      {/* Reading Progress Bar */}
      <div
        className="reading-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Hero Section */}
      <header className="luxury-hero">
        <h1 className="luxury-title">Essays & Thoughts</h1>
        <p className="luxury-subtitle">
          Long-form writing on technology, design, and building meaningful
          things.
        </p>
        <div className="luxury-divider"></div>
      </header>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search essays..."
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={searchBlogs}>
          Search
        </button>
      </div>

      {/* Show search results if search is active */}
      {searchResults.length > 0 && (
        <div className="search-results-container">
          <div className="section-label">
            Search Results ({searchResults.length})
          </div>
          <div className="search-results-grid">
            {currentBlogs.map((blog) => (
              <article
                key={blog.id}
                className="post-card"
                onClick={() => handleBlogClick(blog)}
              >
                {blog.image && (
                  <div className="post-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                )}
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-category">{blog.category}</span>
                    <span className="post-date">{formatDate(blog.date)}</span>
                  </div>
                  <h3 className="post-title">{blog.title}</h3>
                  <p className="post-excerpt">{blog.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-read-time">{blog.readTime}</span>
                    <button className="post-read-btn">Read →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* Pagination for search results */}
          {totalPages > 1 && (
            <nav className="luxury-pagination">
              <div className="pagination-info">
                Showing {Math.min(blogsPerPage, currentBlogs.length)} of{' '}
                {totalBlogs} essays
              </div>
              <div className="pagination-controls">
                <button
                  className={`pagination-btn prev ${
                    currentPage === 1 ? 'disabled' : ''
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className={`pagination-btn next ${
                    currentPage === totalPages ? 'disabled' : ''
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </div>
      )}

      {/* Only show category filter and regular content if no search is active */}
      {searchResults.length === 0 && (
        <>
          {/* Sticky Category Filter */}
          <nav className="luxury-category-nav">
            <div className="category-nav-container">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    activeCategory === category ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>

          {/* Featured Posts */}
          {currentPage === 1 && currentBlogs.length > 0 && (
            <section className="featured-section">
              <div className="section-label">Featured</div>
              <div className="featured-grid">
                {currentBlogs.slice(0, 2).map((blog) => (
                  <article
                    key={blog.id}
                    className="featured-card"
                    onClick={() => handleBlogClick(blog)}
                  >
                    <div className="featured-card-content">
                      <div className="featured-meta">
                        <span className="featured-category">
                          {blog.category}
                        </span>
                        <span className="featured-date">
                          {formatDate(blog.date)}
                        </span>
                      </div>
                      <h2 className="featured-title">{blog.title}</h2>
                      <p className="featured-excerpt">{blog.excerpt}</p>
                      <div className="featured-read-time">{blog.readTime}</div>
                    </div>
                    {blog.image && (
                      <div className="featured-image">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts Grid */}
          <section className="posts-section">
            {currentPage === 1 && currentBlogs.length > 2 && (
              <div className="section-label">All Essays</div>
            )}

            <div className="posts-grid">
              {currentBlogs.slice(currentPage === 1 ? 2 : 0).map((blog) => (
                <article
                  key={blog.id}
                  className="post-card"
                  onClick={() => handleBlogClick(blog)}
                >
                  {blog.image && (
                    <div className="post-image">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                  )}
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category">{blog.category}</span>
                      <span className="post-date">{formatDate(blog.date)}</span>
                    </div>
                    <h3 className="post-title">{blog.title}</h3>
                    <p className="post-excerpt">{blog.excerpt}</p>
                    <div className="post-footer">
                      <span className="post-read-time">{blog.readTime}</span>
                      <button className="post-read-btn">Read →</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="luxury-pagination">
              <div className="pagination-info">
                Showing {Math.min(blogsPerPage, currentBlogs.length)} of{' '}
                {totalBlogs} essays
              </div>
              <div className="pagination-controls">
                <button
                  className={`pagination-btn prev ${
                    currentPage === 1 ? 'disabled' : ''
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="page-numbers">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    if (pageNum > 0 && pageNum <= totalPages) {
                      return (
                        <button
                          key={pageNum}
                          className={`page-number ${
                            currentPage === pageNum ? 'active' : ''
                          }`}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    return null;
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="page-dots">...</span>
                      <button
                        className="page-number"
                        onClick={() => handlePageChange(totalPages)}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                <button
                  className={`pagination-btn next ${
                    currentPage === totalPages ? 'disabled' : ''
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </>
      )}

      {/* Footer */}
      <footer className="luxury-footer">
        <div className="footer-divider"></div>
        <p className="footer-text">
          A curated collection of thoughts and insights.
          <br />
          Updated monthly.
        </p>
      </footer>
    </div>
  );
}

export default Blogs;

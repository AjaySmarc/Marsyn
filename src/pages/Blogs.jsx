import { useState, useEffect } from 'react';
import './Blogs.css';
import { blogData } from '../data/blogitems';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 8; // 4 per row × 2 rows
  const totalBlogs = blogData.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBlogs(blogData);
      setLoading(false);
    }, 500);
  }, []);

  // Calculate which blogs to show based on current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading articles...</p>
      </div>
    );
  }

  // Detailed Blog View
  if (showDetailedView && selectedBlog) {
    return (
      <div className="blog-container">
        {/* Back Button */}
        <div className="back-to-list">
          <button className="back-btn" onClick={handleBackToList}>
            ← Back to Articles
          </button>
        </div>

        {/* Detailed Blog Content */}
        <div className="detailed-blog">
          <div className="blog-header">
            <div className="blog-meta">
              <span className="category">{selectedBlog.category}</span>
              <span>•</span>
              <span>{formatDate(selectedBlog.date)}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>
            <h1>{selectedBlog.title}</h1>
            <div className="author-info">
              <span className="author-avatar">👤</span>
              <span className="author-name">{selectedBlog.author}</span>
              <div className="blog-stats">
                <span>❤️ {selectedBlog.likes}</span>
                <span>💬 {selectedBlog.comments}</span>
              </div>
            </div>
          </div>

          <div className="blog-hero-image">
            <img src={selectedBlog.image} alt={selectedBlog.title} />
          </div>

          <div className="blog-content">
            <div className="excerpt">
              <p>{selectedBlog.excerpt}</p>
            </div>
            <div
              className="full-content"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </div>

          <div className="blog-footer">
            <div className="tags-section">
              {selectedBlog.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Blog List View
  return (
    <div className="blog-container">
      {/* Header */}
      <div className="blog-header">
        <h1>Latest Articles</h1>
        <p className="subtitle">Browse our collection of insightful articles</p>
        <div className="page-info">
          Page {currentPage} of {totalPages} • Showing {currentBlogs.length} of{' '}
          {totalBlogs} articles
        </div>
      </div>

      {/* Blog Grid - 4 items per row, 2 rows */}
      <div className="blog-grid">
        {currentBlogs.map((blog) => (
          <article
            key={blog.id}
            className="blog-card"
            onClick={() => handleBlogClick(blog)}
          >
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="read-time">{blog.readTime}</span>
                <span className="date">{formatDate(blog.date)}</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-tags">
                {blog.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="read-more-btn">Read Article →</button>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className={`pagination-btn prev ${
            currentPage === 1 ? 'disabled' : ''
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <div className="page-numbers">
          {/* Show first page */}
          <button
            className={`page-number ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>

          {/* Show pages around current page */}
          {currentPage > 3 && <span className="page-dots">...</span>}

          {Array.from({ length: Math.min(3, totalPages - 2) }, (_, i) => {
            let pageNumber;
            if (currentPage <= 3) {
              pageNumber = i + 2; // Show 2, 3, 4
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i; // Show pages near end
            } else {
              pageNumber = currentPage - 1 + i; // Show pages around current
            }

            if (pageNumber > 1 && pageNumber < totalPages) {
              return (
                <button
                  key={pageNumber}
                  className={`page-number ${
                    currentPage === pageNumber ? 'active' : ''
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }
            return null;
          })}

          {/* Show last page dots if needed */}
          {currentPage < totalPages - 2 && totalPages > 5 && (
            <span className="page-dots">...</span>
          )}

          {/* Show last page */}
          {totalPages > 1 && (
            <button
              className={`page-number ${
                currentPage === totalPages ? 'active' : ''
              }`}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          )}
        </div>

        <button
          className={`pagination-btn next ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>

      {/* Simple Back to Top */}
      <div className="back-to-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </button>
      </div>
    </div>
  );
}

export default Blogs;

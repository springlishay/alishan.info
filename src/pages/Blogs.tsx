import BlogCard from '../components/blog/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Tax Planning Strategies for Small Businesses",
    excerpt: "Effective tax planning is crucial for small business success. Learn about key strategies...",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Impact of Digital Transformation on Accounting Practices",
    excerpt: "Digital transformation is revolutionizing the accounting industry. Discover how...",
    date: "March 10, 2024",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Financial Planning Tips for Startups",
    excerpt: "Starting a new business? Here are essential financial planning tips to ensure...",
    date: "March 5, 2024",
    readTime: "6 min read"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Latest Insights</h1>
          <p className="mt-4 text-xl text-slate-600">
            Thoughts and advice on accounting, finance, and business growth
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
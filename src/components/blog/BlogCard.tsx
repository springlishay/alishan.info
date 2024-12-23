interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, date, readTime }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center text-sm text-slate-500">
          <time>{date}</time>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-3 text-slate-600">{excerpt}</p>
        <div className="mt-4">
          <a href="#" className="text-slate-900 hover:text-slate-700 font-medium">
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
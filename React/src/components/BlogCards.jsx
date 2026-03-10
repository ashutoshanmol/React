export default function BlogCards() {
  return (
    <section className="bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(blog => (
          <div key={blog} className="bg-white p-6 shadow">
            <h3 className="font-bold">Blog Title {blog}</h3>
            <p className="text-sm mt-2">Short blog description.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

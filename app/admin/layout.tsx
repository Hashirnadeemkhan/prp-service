export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
      {/* Admin topbar */}
      <header style={{ backgroundColor: "#1e3560" }} className="px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "#2d5486" }}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg">PRP Services — Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Back to Website
          </a>
          <a href="/api/admin-auth" className="px-3 py-1.5 rounded text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors">
            Logout
          </a>
        </div>
      </header>

      {/* Sidebar + content */}
      <div className="flex">
        <aside style={{ backgroundColor: "#fff", borderRight: "1px solid #e5e7eb", minWidth: "200px" }} className="min-h-screen py-6 px-4">
          <nav className="flex flex-col gap-1">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">Content</p>
            <a href="/admin/blog"
              className="flex items-center gap-2 px-3 py-2.5 rounded text-sm font-medium text-gray-700 hover:bg-[#f0f5fb] hover:text-[#2d5486] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Blog Posts
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}

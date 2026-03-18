import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  LogOut,
  Menu,
  X,
  PenSquare,
  ChevronLeft,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const navItems = [
  { label: "لوحة التحكم", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "المقالات", href: "/admin/blog", icon: FileText },
  { label: "الطلبات", href: "/admin/submissions", icon: MessageSquare },
];

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/admin");
  };

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <Link to="/ar" className="flex items-center gap-3 group">
          <img
            src="/photos/002677c5-a852-429a-b1aa-4f21fa7a3256.png"
            alt="تأكيد"
            className="h-9 w-auto object-contain brightness-0 invert"
          />
        </Link>
        <p className="text-sky-300 text-xs mt-2 font-medium tracking-wider uppercase">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.href || location.pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                active
                  ? "bg-white text-sky-950 shadow-sm"
                  : "text-sky-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{item.label}</span>
              {active && <ChevronLeft className="w-3 h-3 mr-auto opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 pb-6 pt-4 border-t border-white/10 space-y-3">
        <Link
          to="/admin/blog/new"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl text-sm transition-colors w-full"
          onClick={() => setSidebarOpen(false)}
        >
          <PenSquare className="w-4 h-4" />
          <span>مقال جديد</span>
        </Link>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-medium truncate">{user?.email}</p>
            <p className="text-sky-300 text-xs">مشرف</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sky-300 hover:text-red-400 transition-colors p-1"
            title="تسجيل الخروج"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-gradient-to-b from-sky-950 to-slate-900 flex-col fixed inset-y-0 right-0 z-30">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-sky-950 to-slate-900 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:mr-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-20">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              if (
                location.pathname === item.href ||
                location.pathname.startsWith(item.href + "/")
              ) {
                const Icon = item.icon;
                return (
                  <div key={item.href} className="flex items-center gap-2 text-gray-700">
                    <Icon className="w-4 h-4" />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <Link
            to="/ar"
            target="_blank"
            className="text-xs text-sky-700 hover:text-sky-900 flex items-center gap-1"
          >
            عرض الموقع
          </Link>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { login } from "@/lib/admin-auth";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/admin-login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a brief network delay for UX
    await new Promise((r) => setTimeout(r, 500));

    if (login(email, password)) {
      navigate({ to: "/admin/" });
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center">
              <span className="text-[#05231f] font-black text-lg">V</span>
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">
              Vesco<span className="text-teal font-light">Science</span>
            </span>
          </div>
          <p className="text-white/50 text-sm tracking-wide uppercase">Page Builder — Admin</p>
        </div>

        {/* Card */}
        <div className="bg-[#111c2d] border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-white text-2xl font-semibold mb-1">Welcome back</h1>
          <p className="text-white/50 text-sm mb-8">Sign in to access the page builder</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-10 py-3 text-sm placeholder:text-white/25 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-10 py-3 text-sm placeholder:text-white/25 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal text-[#05231f] font-bold py-3 rounded-lg text-sm tracking-wide uppercase hover:bg-teal/85 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-white/25 text-xs mt-6">
          Vesco Science · PageBuilder CMS
        </p>
      </div>
    </div>
  );
}

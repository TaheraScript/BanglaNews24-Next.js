import Link from "next/link";

const categories = [
  { label: "জাতীয়", href: "/category/national" },
  { label: "আন্তর্জাতিক", href: "/category/international" },
  { label: "রাজনীতি", href: "/category/politics" },
  { label: "অর্থনীতি", href: "/category/economy" },
  { label: "খেলা", href: "/category/sports" },
  { label: "বিনোদন", href: "/category/entertainment" },
  { label: "প্রযুক্তি", href: "/category/technology" },
];

const quickLinks = [
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "যোগাযোগ", href: "/contact" },
  { label: "বিজ্ঞাপন", href: "/advertise" },
  { label: "গোপনীয়তা নীতি", href: "/privacy" },
  { label: "ব্যবহারের শর্তাবলি", href: "/terms" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "X",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#7A1236] text-[#FFF5F6]">
      <div className="h-1 w-full bg-gradient-to-r from-[#D81B60] via-[#3E7C45] to-[#D81B60]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            বাংলা <span className="text-[#F06292]">নিউজ ২৪</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-[#F5D5DC]">
            দেশ ও বিশ্বের সর্বশেষ খবর, নির্ভরযোগ্য সংবাদ এবং বিশ্লেষণ, সবার আগে
            আপনার হাতের মুঠোয়।
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-[#D81B60]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">বিভাগসমূহ</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="text-[#F5D5DC] transition hover:pl-1 hover:text-white"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">গুরুত্বপূর্ণ লিংক</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[#F5D5DC] transition hover:pl-1 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">যোগাযোগ</h3>
          <ul className="space-y-2 text-sm text-[#F5D5DC]">
            <li>ঢাকা, বাংলাদেশ</li>
            <li>
              <a
                href="mailto:info@banglanews24.com"
                className="hover:text-white"
              >
                info@banglanews24.com
              </a>
            </li>
            <li>
              <a href="tel:+8801700000000" className="hover:text-white">
                +৮৮০ ১৭০০-০০০০০০
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-[#F5D5DC] sm:flex-row">
          <p>
            © {new Date().getFullYear()} বাংলা নিউজ ২৪। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p>
            Made with <span className="text-[#F06292]">♥</span> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

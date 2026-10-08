import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FFF5F6] px-4 text-center">
      {/* Radish illustration */}
      <svg
        viewBox="0 0 120 170"
        className="mb-4 h-36 w-auto drop-shadow-md"
        aria-hidden="true"
      >
        {/* leaves */}
        <path d="M60 50 C40 30 25 20 18 4 C40 6 55 20 60 50Z" fill="#3E7C45" />
        <path d="M60 50 C60 28 62 14 60 0 C74 14 66 32 60 50Z" fill="#5BA85F" />
        <path d="M60 50 C80 30 95 20 102 4 C80 6 65 20 60 50Z" fill="#3E7C45" />
        {/* bulb */}
        <path
          d="M60 46 C98 46 112 82 96 110 C88 126 72 134 62 150 C61 152 59 152 58 150 C48 134 32 126 24 110 C8 82 22 46 60 46Z"
          fill="#D81B60"
        />
        {/* highlight */}
        <ellipse cx="40" cy="80" rx="7" ry="14" fill="#F06292" opacity="0.7" />
        {/* root tip */}
        <path d="M60 148 L60 168" stroke="#F5E6E8" strokeWidth="3" strokeLinecap="round" />
        {/* face */}
        <circle cx="48" cy="88" r="3.5" fill="#FFF5F6" />
        <circle cx="72" cy="88" r="3.5" fill="#FFF5F6" />
        <path d="M51 108 Q60 101 69 108" stroke="#FFF5F6" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>

      <h1 className="text-8xl font-extrabold tracking-tight text-[#D81B60] sm:text-9xl">
        404
      </h1>

      <div className="mt-3 h-1 w-20 rounded-full bg-[#3E7C45]" />

      <h2 className="mt-5 text-2xl font-bold text-[#7A1236]">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </h2>
      <p className="mt-2 max-w-md text-[#9C4A63]">
        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি সরানো হয়েছে অথবা কখনো ছিলই না।
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="btn border-none bg-[#D81B60] text-white shadow-md hover:bg-[#B0124A]"
        >
          হোম পেজে ফিরে যান
        </Link>
        <Link
          href="/profile"
          className="btn border-2 border-[#3E7C45] bg-transparent text-[#3E7C45] hover:bg-[#3E7C45] hover:text-white"
        >
          প্রোফাইল
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
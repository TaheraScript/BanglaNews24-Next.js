const LoadingPage = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#FFF5F6] px-4"
    >
      {/* soft background glow */}
      <div className="absolute h-72 w-72 animate-pulse rounded-full bg-[#D81B60]/10 blur-3xl" />

      {/* spinner */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#D81B60]/15" />
        {/* spinning arc */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#D81B60] border-r-[#3E7C45]" />
        {/* pulsing center */}
        <div className="h-10 w-10 animate-pulse rounded-full bg-gradient-to-br from-[#F06292] to-[#D81B60] shadow-lg shadow-[#D81B60]/30" />
      </div>

      {/* text */}
      <h2 className="mt-8 text-xl font-bold tracking-wide text-[#7A1236]">
        লোড হচ্ছে
      </h2>
      <p className="mt-1 text-sm text-[#9C4A63]">অনুগ্রহ করে একটু অপেক্ষা করুন</p>

      {/* bouncing dots */}
      <div className="mt-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#D81B60]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#3E7C45] [animation-delay:150ms]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#D81B60] [animation-delay:300ms]" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingPage;
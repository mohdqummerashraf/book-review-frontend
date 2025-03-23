import Topbar from "./Topbar";
import Bottombar from "./Bottombar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between w-full">
      {/* Top Navigation Bar */}
      <Topbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-3xl">
        {/* Uncomment this if you want the image */}
        {/* <Image src="/book-summary.png" alt="Book Summary" width={200} height={200} className="w-32 sm:w-40 md:w-48" /> */}

        <h1 className="text-3xl sm:text-4xl font-bold">Book Summary</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          A collection of book summaries for software developers
        </p>
      </div>

      {/* Bottom Navigation */}
      <Bottombar />
    </div>
  );
}

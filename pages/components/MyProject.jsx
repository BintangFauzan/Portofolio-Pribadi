import ImageProject from "./PartComponents/ImageProject";

export default function MyProject({ children, src, href, h2, p }) {
  return (
    // The outer wrapper div remains for layout flexibility in index.js
    <div className="basis-1/3 flex-1 transition duration-300 ease-in-out transform hover:scale-[1.02] hover:-translate-y-4">
      {/* Applying core project card styles from porto.html */}
      <div className="project-card bg-white dark:bg-gray-80 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        {/* Image Area - Fixed height to match Porto template */}
        <div className="h-72 overflow-hidden">
          <ImageProject src={src} href={href} />
        </div>

        {/* Content Area - Padding adjusted to mimic the content block in porto.html (30px padding) */}
        <div className="p-6 md:p-8">
          <h2 className="project-title text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {h2}
          </h2>

          {/* Description Text */}
          <p className="project-desc text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
            {p}
          </p>

          {/* Children (Tech Tags, Links) are placed here. We assume children handles the internal layout now. */}
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

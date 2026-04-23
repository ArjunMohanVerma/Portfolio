import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-20 px-[4vw] md:px-[3vw] lg:px-[5vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-3 text-base font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/20 bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image (slightly increased height) */}
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="px-4 pb-5">
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>

              {/* Slightly more text */}
              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 5).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-[10px] font-semibold text-purple-400 rounded-full px-2 py-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              {/* Image */}
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold text-center"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
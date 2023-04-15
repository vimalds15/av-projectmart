import React from "react";
import { useNavigate } from 'react-router-dom'

const ProjectCard = () => {
  const tags = ["React", "Three.js", "3D"];
  const navigate = useNavigate()

  return (
    <div className="max-w-[250px] bg-blue-50 p-2 rounded-md">
      <img
        src="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWce0k5XmT0oYgy1xdoRsioH_u5A"
        alt="project"
        className="w-[250px] rounded-md"
      />
      <p className="truncate font-medium mt-2">
        3D Website with Three.js | React
      </p>
      <p className="text-sm">
        Category: <span className="font-semibold">Web Development</span>
      </p>
      <div className="flex mt-2 gap-2">
        {tags.map((tag) => (
          <p className="text-sm bg-blue-100 px-2 rounded-md">{tag}</p>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm mt-2">
            Price: <span className="font-semibold text-lg">$1499</span>
          </p>
        </div>
        <div>
          <button onClick={()=>navigate('/detail/1')} className="bg-blue-200 text-sm px-3 py-2 rounded-md font-semibold">View More</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

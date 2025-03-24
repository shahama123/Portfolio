// import React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { FaGithub } from 'react-icons/fa';
// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// const MediaCard = ({ image, title, description, demoUrl, gitUrl }) => {
//   return (
//     <Card className='shadow-lg' sx={{ maxWidth: 345 }}>
//       <CardMedia
//       className='hover:scale-105 transition-transform duration-300 ease-in-out'
//         sx={{ height: 140 }}
//         image={image}
//         title={title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <a
//             href={demoUrl}
//             className="flex  gap-1 py-2 px-4 bg-amber-400 text-center  rounded-md   text-xs text-stone-700  hover:bg-amber-300"
//           >
//             Preview
//             <FaArrowUpRightFromSquare className="text-center text-xs" />
//           </a>

//           <a
//             href={gitUrl}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-200 text-gray-800 font-medium rounded-md transition-colors duration-300 hover:shadow-md"
//             >
//             GitHib
//             <FaGithub className="text-center text-base" />
//           </a>
//       </CardActions>
//     </Card>
//   );
// };

// export default MediaCard;

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const MediaCard = ({ image, title, description, demoUrl, gitUrl }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Set character limit for truncation
  const maxLength = 200;
  const isLongText = description.length > maxLength;
  const truncatedText = isLongText ? description.slice(0, maxLength) + "..." : description;

  return (
    <Card className="shadow-lg flex flex-col justify-between" sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        className="hover:scale-105 transition-transform duration-300 ease-in-out"
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <div className="flex flex-col flex-grow">
        <CardContent className="flex-grow">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {expanded ? description : truncatedText}
            {isLongText && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-amber-500 ml-2 focus:outline-none"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
          </Typography>
        </CardContent>
      </div>
      <CardActions className="flex justify-between p-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex border items-center gap-2 py-2 px-4 bg-amber-400 text-center rounded-md text-xs text-stone-700 hover:bg-white hover:border-amber-400"
        >
          Live Demo
          <FaArrowUpRightFromSquare className="text-xs" />
        </a>

        <a
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex border text-xs items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-white hover:border-gray-400 text-gray-800 font-medium rounded-md transition-colors duration-300"
        >
          GitHub
          <FaGithub className="text-base" />
        </a>
      </CardActions>
    </Card>
  );
};

export default MediaCard;

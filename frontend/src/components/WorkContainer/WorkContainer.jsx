import { useState, useEffect, useRef } from "react";
import WorkCard from "../WorkCard/WorkCard";
import "./WorkContainer.scss";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

function WorkContainer() {
  const [work, setWork] = useState(null);
  const [skeletonCount, setSkeletonCount] = useState(5);

  useEffect(() => {
    fetch("/api/work")
      .then((res) => res.json())
      .then((data) => {
        setSkeletonCount(data.length);
        setWork(data);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {work != null ? (
        <div className="workCardContainer">
          {work.map((item) => (
            <WorkCard key={item.id} work={item} />
          ))}
        </div>
      ) : (
        <div className="skeletonContainer">
          {[...Array(skeletonCount)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={300}
              height={200}
            />
          ))}
        </div>
      )}
    </Box>
  );
}

export default WorkContainer;

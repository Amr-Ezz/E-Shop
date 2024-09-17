import { useState } from "react";

export const useTruncate = () => {
    const [toggleDescription, setToggleDescription] = useState<{
        [key: number]: boolean;
      }>({});
      const toggleHandler = (id: number) => {
        setToggleDescription((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
      };
    
      const truncateDescription = (
        description: string,
        maxLength: number,
        id: number
      ) => {
        if (toggleDescription[id]) return description;
        if (description.length <= maxLength) return description;
        return `${description.substring(0, maxLength)}....`;
      };
      return {toggleDescription, toggleHandler, truncateDescription};

}
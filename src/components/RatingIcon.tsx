import { Button, Icon } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

interface RatingIconProps {
  rating: number;
}

export const RatingIcon = ({ rating }: RatingIconProps) => {
  const ratingConfig = {
    high: {
      threshold: 4,
      color: "green",
      message: "Exceptional - Rating above 4",
    },
    medium: {
      threshold: 3,
      color: "yellow",
      message: "Recommended - Rating between 3 and 4",
    },
    low: { color: "red", message: "Skip - Rating below 3" },
  };

  const getRatingLevel = (rating: number) => {
    if (rating > ratingConfig.high.threshold) return ratingConfig.high;
    if (rating > ratingConfig.medium.threshold) return ratingConfig.medium;
    return ratingConfig.low;
  };

  const { color, message } = getRatingLevel(rating);

  return (
    <Tooltip
      content={message}
      showArrow
      positioning={{
        placement: "top",
      }}
      openDelay={100}
      closeDelay={100}
    >
      {rating > 0 ? (
        <FaThumbsUp size={20} color={color} />
      ) : (
        <FaThumbsDown size={20} color={color} />
      )}
    </Tooltip>
  );
  //TODO: fixed the following issue:
  //hook.js:608 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components Error Component Stack
};

export default RatingIcon;

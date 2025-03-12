import { Tooltip } from "@/components/ui/tooltip";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

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
};

export default RatingIcon;

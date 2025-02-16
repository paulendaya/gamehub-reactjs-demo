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
      color: "green.500",
      message: "Exceptional - Rating above 4",
    },
    medium: {
      threshold: 3,
      color: "yellow.500",
      message: "Recommended - Rating between 3 and 4",
    },
    low: { color: "red.500", message: "Skip - Rating below 3" },
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
    >
      <Button variant="ghost" size="sm">
        <Icon color={color} boxSize={5}>
          {rating > 0 ? <FaThumbsUp /> : <FaThumbsDown />}
        </Icon>
      </Button>
    </Tooltip>
  );
  //TODO: fixed the following issue:
  //hook.js:608 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components Error Component Stack
};

export default RatingIcon;

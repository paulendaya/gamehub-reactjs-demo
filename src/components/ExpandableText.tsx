import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
  textSeeMore?: string;
  textSeeLess?: string;
}

const ExpandableText = ({
  children,
  maxChars = 100,
  textSeeMore = "See More",
  textSeeLess = "See Less",
}: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return children;

  return (
    <p>
      {!expanded ? children.substring(0, maxChars) + "..." : children}
      <Button onClick={() => setExpanded(!expanded)} size="2xs">
        {!expanded ? textSeeMore : textSeeLess}
      </Button>
    </p>
  );
};

export default ExpandableText;

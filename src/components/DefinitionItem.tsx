import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <Box>
        <Heading as="dt" fontWeight="md" color="gray.500">
          {term}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </div>
  );
};

export default DefinitionItem;

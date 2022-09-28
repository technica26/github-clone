import { Box, Text } from "@chakra-ui/react";
import { VFC, useState, FC } from "react";

type Props = {
  children: string;
};

const Repository: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Box
      bg="#FFFFFF"
      w="1134px"
      pl="26px"
      py="57px"
      mx="73px"
      color="black"
      height="133px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Text fontSize="16px" fontWeight="700">
        {children}
      </Text>
    </Box>
  );
};

export default Repository;

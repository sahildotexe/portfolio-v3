import Sidebar from "@/components/Sidebar";
import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Box className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start ">
        <Sidebar />

      </Box>
    </>
  );
}

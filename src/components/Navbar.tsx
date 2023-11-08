"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const Links = ["Profile", "Projects", "Writings"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box as="a" px={2} py={1} rounded={"md"} href={"#"} className="text-2xl">
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="navbar-orkut text-white" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            backgroundColor={"transparent"}
            color={"white"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src="/logo.png" alt="Logo" width={170} height={200} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} >
            <Box className="hidden md:flex">
              <Text px={2} py={4} className="text-[#36527D] text-2xl font-normal">
                sahilkaling@gmail.com
              </Text>
              <Box
                as="a"
                px={2} py={4}
                mx={3}
                rounded={"md"}
                href={"#"}
                className="text-2xl"
              >
                Logout
              </Box>
              {/* <Box >
                <HStack p={3} className="bg-[#36527D] rounded-xl h-[10px] m-[40px]"  >
                    <Input p={2} backgroundColor={"white"} color={"black"} className="bg-white" placeholder="search orkut" />
                    <SearchIcon />
                </HStack>
              </Box> */}
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

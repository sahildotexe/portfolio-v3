"use client";

import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Sidebar() {
    return (
        <>
        <Box className="flex justify-center">
        <Flex className="side flex flex-col justify-center p-2 md:p-5 w-full md:w-[250px]" backgroundColor={"white"} m={4}>
            <Box className="flex flex-row md:flex-col">
                <Box>
                <Box className="flex justify-center items-center">
            <Image src="/myphoto.jpeg" alt="Logo" className="w-[320px] md:w-[200px]" width={170} height={200} />
            </Box>
            <Box className="mt-2 flex flex-row">
                <div className=" bg-emerald-500	m-2 mt-[12px] ml-0 h-[10px] w-[10px] rounded-full"></div>
                <Text className="text-2xl text-[#4E93AA]">Sahil Kaling</Text>
            </Box>
            <Text className="text-xl leading-6 font-medium">available for chat</Text>
            <Text className="text-xl leading-6 font-medium text-[#979797]">Pune, India</Text>
            <Divider mt={2} orientation='horizontal' bg='#EAEAEC' borderWidth={"1px"} />
            <Box className="my-2 flex flex-row">
                <Image src="/add-friend.png" alt="add friend" className="w-[25px] " width={170} height={200} />
                <Text className="text-xl mx-2 font-medium text-[#4E93AA]">add to friends</Text>
            </Box>
            <Divider mt={2} orientation='horizontal' bg='#EAEAEC' borderWidth={"1px"} />
                </Box>
                <Box className="my-2 bg-[#EFF9FF] ml-4 w-full md:mx-0 md:w-auto">
                <Box className="flex flex-row border-solid	border-2 p-2 border-[#DDE9F8] border-b-0" as={"a"} href="/">
                    <Image src="/profile.png" alt="add friend" className="w-[20px]" width={170} height={200} />
                    <Text className="text-xl mx-2 font-medium text-[#535C69]">profile</Text>
                </Box>
                <Box className="flex flex-row border-solid	border-2 p-2 border-[#DDE9F8] border-b-0" as={"a"} href="/projects">
                    <Image src="/projects.png" alt="add friend" className="w-[24px]" width={170} height={200} />
                    <Text className="text-xl mx-2 font-medium text-[#535C69]">projects</Text>
                </Box>
                <Box className="flex flex-row border-solid	border-2 p-2 border-[#DDE9F8] border-b-0">
                    <Image src="/writings.png" alt="add friend" className="w-[25px] h-[25px]" width={170} height={200} />
                    <Text className="text-xl mx-2 font-medium text-[#535C69]">writings</Text>
                </Box>
                {/* <Box className="flex flex-row border-solid	border-2 p-2 border-[#DDE9F8] border-b-0">
                    <Image src="/testimonials.png" alt="add friend" className="w-[25px] h-[25px]" width={170} height={200} />
                    <Text className="text-xl mx-2 font-medium text-[#535C69]">testimonials</Text>
                </Box> */}
                <Box className="flex flex-row border-solid	border-2 p-2 border-[#DDE9F8]">
                    <Image src="/resume.png" alt="add friend" className="w-[20px]" width={170} height={200} />
                    <Text className="text-xl mx-2 font-medium text-[#535C69]">resume</Text>
                </Box>
                </Box>
            </Box>

 
            
        </Flex>  
        </Box>

        </>
    )
}
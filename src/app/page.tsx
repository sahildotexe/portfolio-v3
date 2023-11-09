import Sidebar from "@/components/Sidebar";
import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start ">
        <Sidebar />
        <Box className="flex flex-col">
          <Flex
            className="side main-sec flex flex-col justify-center p-5 m-4 md:ml-0"
            backgroundColor={"white"}
          >
            <Text className="text-4xl">Sahil Kaling</Text>
            <Text className="text-xl my-2 border-2 p-2">
              {" "}
              master of it&apos;s not a bug, it&apos;s a feature excuse.
            </Text>
            <Divider
              mt={2}
              orientation="horizontal"
              bg="#EAEAEC"
              borderWidth={"1px"}
            />
            <Box className="flex flex-row">
              {/* <Box className="my-2">
                <Text className="text-xl text-[#535C69]">fans</Text>
                <Box className="flex flex-row">
                  <Image
                    src="/fans.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Text className="text-xl mx-1 text-[#535C69]">69</Text>
                </Box>
              </Box> */}
              <Box className="my-2 mx-2">
                <Text className="text-xl text-[#535C69]">trusty</Text>
                <Box className="flex flex-row mt-1">
                  <Image
                    src="/confidence.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/confidence.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/confidence.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/confidence.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                </Box>
              </Box>
              <Box className="my-2 mx-2 ">
                <Text className="text-xl text-[#535C69]">cool</Text>
                <Box className="flex flex-row mt-1">
                  <Image
                    src="/cool.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/cool.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/cool.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/cool.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/cool.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                </Box>
              </Box>
              <Box className="my-2 mx-2 ">
                <Text className="text-xl text-[#535C69]">sexy</Text>
                <Box className="flex flex-row mt-1">
                  <Image
                    src="/sexy.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/sexy.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                  <Image
                    src="/sexy.png"
                    alt="fans"
                    className="w-[20px]"
                    width={250}
                    height={200}
                  />
                </Box>
              </Box>
            </Box>
            <Divider
              mt={2}
              orientation="horizontal"
              bg="#EAEAEC"
              borderWidth={"1px"}
            />
            <Box>
              <Box className="flex flex-row justify-start items-center p-2 px-8 bg-[#DEEEFD]">
                <Text className="text-lg text-[#72777F] px-2 ">about me: </Text>
                <Text className="text-lg  mx-4">
                Hey there ! I am Sahil Kaling currently a final year CS
                  undergrad at VIT Vellore.
                </Text>
              </Box>
              <Box className="flex flex-row justify-start items-center p-2 px-8 bg-[#EEF8FE]">
                <Text className="text-lg text-[#72777F] mx-2 ">birthday: </Text>
                <Text className="text-lg  mx-4">March 14th</Text>
              </Box>
              <Box className="flex flex-row justify-start items-center p-2 px-8 bg-[#DEEEFD]">
                <Text className="text-lg text-[#72777F] px-2  ">
                  location:{" "}
                </Text>
                <Text className="text-lg  px-4">
                  Pune / Bangalore / Vellore / Existential Crisis
                </Text>
              </Box>
              <Box className="flex flex-row justify-start items-center p-2 px-8 bg-[#EEF8FE]">
                <Text className="text-lg text-[#72777F] mx-2 ">socials: </Text>
                <Text className="text-lg  mx-4">
                  <Link color={"#318c96"}>github</Link> /{" "}
                  <Link color={"#318c96"}>linkedin</Link> /{" "}
                  <Link color={"#318c96"}>instagram</Link> /{" "}
                  <Link color={"#318c96"}>twitter</Link>
                </Text>
              </Box>
            </Box>
            <Box className="my-2">
              <Text as={"a"} href="/resume.pdf" className="underline text-[#318c96]">
                view full profile
              </Text>
            </Box>
          </Flex>
          <Flex
            className="side flex flex-col justify-center p-5 m-2 mt-0 md:ml-0"
            backgroundColor={"white"}
          >
            <Text className="text-2xl">
              testimonials <span className="text-[#4E93AA]">(4)</span>{" "}             
            </Text>
            <Box className="flex flex-col justify-center items-center my-2">
            <Box className="flex flex-row justify-start items-center my-2 p-4 px-8 bg-[#DEEEFD]">
                <Image src={"/unpay.webp"} alt="pawpal" className="w-[125px] h-[125px]" width={150} height={150} />
                <Text className="text-lg  mx-4">
                  Hey there ! I am Sahil Kaling currently a final year CS
                  undergrad at VIT Vellore.
                </Text>
              </Box>
              <Box className="flex flex-row justify-start items-center my-2 p-4 px-8 bg-[#EEF8FE]">
                <Image src={"/unpay.webp"} alt="pawpal" className="w-[125px] h-[125px]" width={150} height={150} />
                <Text className="text-lg  mx-4">
                Hey there ! I am Sahil Kaling currently a final year CS
                  undergrad at VIT Vellore.
                </Text>
              </Box>
            </Box>
            
        </Flex>
        
        </Box>
        <Box className="flex flex-col">
        <Flex
            className="side flex flex-col justify-center p-5 m-4 ml-0"

            backgroundColor={"white"}
          >
            <Text className="text-2xl">
              my recent projects <span className="text-[#4E93AA]">(3)</span>{" "}
              
            </Text>
            <Box className="flex flex-row justify-center items-center">
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] p-3 mr-4 h-[150px] md:h-[200px]">
              <Image className="rounded-md h-[120px] md:h-[160px]" src={"/pawpal.png"} alt="pawpal" width={150} height={150} />
              <Text className="text-xl text-[#4E93AA]">Pawpal</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[150px] md:h-[200px] p-3 mr-4">
              <Image className="rounded-md h-[120px] md:h-[160px]" src={"/unpay.webp"} alt="pawpal" width={150} height={150} />
              <Text className="text-xl  text-[#4E93AA]">Unpay</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[150px] md:h-[200px] p-3 mr-4">
              <Image className="rounded-md h-[120px] md:h-[160px]" src={"/immortal-docs.png"} alt="pawpal" width={150} height={150} />
              <Text className="text-xl text-[#4E93AA]">Immortal Docs</Text>
            </Box>
            
            </Box>
            <Box className="my-1 mb-0" >
              <Text as={"a"} href="/projects" className="underline text-[#318c96] w-[200px]">
                view more
              </Text>
            </Box>
        </Flex>
        <Flex
            className="side flex flex-col justify-center p-5 m-4 mt-0 ml-0 max-w-[600px]"

            backgroundColor={"white"}
          >
            <Text className="text-2xl">
              technologies <span className="text-[#4E93AA]">(10+)</span>{" "}
              
            </Text>
            <Box className="flex flex-row justify-center items-center flex-wrap">
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] p-3 mr-4 h-[120px] md:h-[120px]">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/react.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">React</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/tailwind.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl  text-[#4E93AA]">Tailwind</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/javascript.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Javascript</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/typescript.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Typescript</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/nextjs.webp"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Nextjs</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/angular.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Angular</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/mongodb.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">MongoDB</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/postgres.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">PostgresSQL</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/nodejs.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Nodejs</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/express.webp"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Expressjs</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/aws.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">AWS</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/docker.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Docker</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/git.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Git</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/solidity.svg"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Solidity</Text>
            </Box>
            
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/python.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Python</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/cpp.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">C++</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/java.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Java</Text>
            </Box>
            <Box className="flex flex-col justify-center items-center my-2 bg-[#d9d8d848] h-[120px] md:h-[120px] p-3 mr-4">
              <Image className="rounded-md h-[60px] md:h-[80px]" src={"/golang.png"} alt="pawpal" width={80} height={150} />
              <Text className="text-xl text-[#4E93AA]">Golang</Text>
            </Box>
            </Box>
          
        </Flex>
        </Box>

      </Box>
    </>
  );
}

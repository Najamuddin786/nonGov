import { Box,Flex,Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Navbar(){
    useEffect(() => {
        const timer = setTimeout(() => {
          alert(
            "This website is not government-affiliated but provides access to Bihar Bhumi information. यह वेबसाइट सरकारी संबद्ध नहीं है, लेकिन यह बिहार भूमि की जानकारी प्रदान करती है, जिसमें खाता और भूमि रिकॉर्ड शामिल हैं।"
          );
        }, 8000); // 10 seconds delay (10000 ms)
      
        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
      }, []);

    return <>
            <Flex py='5px' alignItems={'center'} bg={'#2f3542'}  color={'white'} px={{base:'2%',md:'5%',xl:"10%"}} justifyContent={'space-between'} flexWrap={'wrap'}>
                
                <Flex fontWeight={700} alignItems={'center'} fontSize={{base:'1.4rem',xl:'2rem'}}><Text>nonGov</Text><Text color={'#ff4757'}>Website</Text></Flex>
                <Text borderRadius={'md'} fontWeight={900} p={'10px'} bg={'white'} color={'#2f3542'} fontSize={{base:'1.2rem',xl:'1.6rem'}}>Bihar Bhumi</Text>

            </Flex>
    </>
}
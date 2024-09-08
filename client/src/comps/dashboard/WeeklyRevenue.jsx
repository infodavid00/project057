import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card.jsx";
import BarChart from "./BarChart.jsx"; 
import { barChartOptionsConsumption } from "./Charts.jsx";
import { MdBarChart } from "react-icons/md";
import { useEffect, useState } from "react"; 
import { BaseEndpoint } from "../../etc/network";

export default function WeeklyRevenue({ information, ...props }) {
  const { ...rest } = props;

  const [registrationData, setRegistrationData] = useState(Array(8).fill(0));
  const [depositsData, setDepositsData] = useState(Array(8).fill(0));

  const fetchUserRegInfo = async () => {
    try {
      const response = await fetch(BaseEndpoint + '/user/getUserRegInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: information }), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const userData = await response.json();
      const currentMonth = new Date().getMonth();
      const newRegistrationData = Array(8).fill(0); 
      const newDepositsData = Array(8).fill(0);

      userData?.data?.forEach(entry => {
        const regDate = new Date(entry.regDate);
        const monthIndex = regDate.getMonth();

        const relativeIndex = (currentMonth - monthIndex + 12) % 12;

        if (relativeIndex < 8) {
          newRegistrationData[relativeIndex] += 1;

          if (entry.isRecorded) {
            newDepositsData[relativeIndex] += 1;
          }
        }
      });

      setRegistrationData(newRegistrationData.reverse());
      setDepositsData(newDepositsData.reverse());

    } catch (error) {
      console.error("Error fetching user registration info:", error);
    }
  };

  useEffect(() => {
    fetchUserRegInfo(); 
  }, [information]); // Add information as a dependency to refetch when it changes

  const barChartDataConsumption = [
    {
      name: "REGISTRATION",
      data: registrationData,
    },
    {
      name: "DEPOSITS",
      data: depositsData,
    },
  ];

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  return (
    <Card align="center" direction="column" w="100%" {...rest}>
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Monthly Revenue
        </Text>
        <Button
          align="center"
          justifyContent="center"
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
          {...rest}
        >
          <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
        </Button>
      </Flex>

      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}

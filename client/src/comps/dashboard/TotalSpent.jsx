import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card.jsx";
import LineChart from "./LineChart.jsx";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { lineChartOptionsTotalSpent } from "./Charts.jsx";

export default function TotalSpent({ information, ...props }) {
  function calculateCommission(deposit) {
    if (deposit === 250) {
      return 60;
    }
    if (deposit === 500) {
      return 120;
    }
    if (deposit === 1000) {
      return 165;
    }
    if (deposit === 3000) {
      return 210;
    }
    return 0; 
  }

  function getLastSixMonths() {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const currentMonth = new Date().getMonth();
    const lastSixMonths = [];
    for (let i = 5; i >= 0; i--) {
      let monthIndex = (currentMonth - i + 12) % 12;
      lastSixMonths.push(monthNames[monthIndex]);
    }
    return lastSixMonths;
  }

  const lastSixMonths = getLastSixMonths();
  const commissionsByMonth = lastSixMonths.reduce((acc, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  information.forEach(entry => {
    const date = new Date(entry.date);
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    if (commissionsByMonth.hasOwnProperty(month)) {
      const commission = calculateCommission(entry.deposit);
      commissionsByMonth[month] += commission;
    }
  });

  const currentMonthAmount = commissionsByMonth[lastSixMonths[5]];
  const previousMonthAmount = commissionsByMonth[lastSixMonths[4]];
  const difference = currentMonthAmount - previousMonthAmount;
  const isIncrease = difference >= 0;
  const differenceText = `${isIncrease ? "+" : ""}${difference.toFixed(2)}`;

  const lineChartDataTotalSpent = [
    {
      name: "Commissions",
      data: lastSixMonths.map(month => commissionsByMonth[month]),
    }
  ];

  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Flex justify="space-between" ps="0px" pe="0px" pt="5px">
        <Flex align="center" w="100%">
          <Button
            bg={"rgba(40,40,42,1)"}
            fontSize="sm"
            fontWeight="500"
            color={textColorSecondary}
            borderRadius="7px"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="dashboard-charts2-btn"
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me="4px"
            />
            <span style={{ marginTop: "0.3em" }}> Commission</span>
          </Button>
          <Button
            ms="auto"
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
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            €{currentMonthAmount.toFixed(2)}
          </Text>
          <Flex align="center" mb="20px">
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="2px"
              me="10px"
            >
              This Month
            </Text>
            <Flex align="center">
              <Icon as={isIncrease ? RiArrowUpSFill : RiArrowDownSFill} color={isIncrease ? "green.500" : "red.500"} me="1.4px" mt="1.4px" />
              <Text color={isIncrease ? "green.500" : "red.500"} fontSize="sm" fontWeight="700">
                {differenceText}
              </Text>
            </Flex>
          </Flex>

          <Flex align="center">
            <Icon as={IoCheckmarkCircle} color="green.500" me="4px" />
            <Text color="green.500" fontSize="md" fontWeight="700">
              Captured
            </Text>
          </Flex>
        </Flex>
        <Box minH="260px" minW="65%" mt="auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  );
}

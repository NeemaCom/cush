"use client"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 3000, mobile: 4000 },
  { month: "February", desktop: 4000, mobile: 2000 },
  { month: "March", desktop: 5000, mobile: 3000 },
  { month: "April", desktop: 3000, mobile: 2900 },
  { month: "May", desktop: 7090, mobile: 4300 },
  { month: "June", desktop: 6140, mobile: 3400 },
];

const UserStats = (() => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const months = [];
  let startMonth = new Date(2024, 7);

  for (let i = 0; i < 8; i++) {
    months.push(startMonth.toLocaleDateString(undefined, { month: 'short', year: 'numeric' }));
    startMonth.setMonth(startMonth.getMonth() + 1);
  }

  const yTicks = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];

  return (
    <Card className=''>
      <CardHeader className='mb-3'>
              <CardTitle className='font-bold pt-1 flex items-center justify-between'>
                  <h1>Total Balance: $12,000.87</h1>
                  {/* <h1>34577835546</h1> */}
              </CardTitle>
        <CardDescription className='text-[10px] font-bold'>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent className='overflow-hidden'>
        <ChartContainer config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
          mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
          },
        }}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }} // Remove left margin
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={15}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              ticks={yTicks}
              axisLine={false} // Remove Y-axis line
              tickFormatter={(value) => `${value / 1000}k`} // Format to 1k, 2k, etc.
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="red"
              strokeWidth={1}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="blue"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center mt-2 text-[13px] font-medium">
          <div className="grid gap-2">
            {months.join(" ")}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
});

export default UserStats;
"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Empty } from "antd";
import { Link } from "@nextui-org/react";
import { Link as RouterLink } from "lucide-react";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NextItemTabs({ data }: { data: any[] }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="text-primary" label="Education" {...a11yProps(0)} />
          <Tab className="text-primary" label="Exprience" {...a11yProps(1)} />
          <Tab className="text-primary" label="Review" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-col gap-6 pt-[10px] w-full">
          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-8 items-center">
                      <Avatar className="h-20 w-20 bg-white object-cover">
                        <AvatarImage
                          src={item.imageOrganization}
                          alt="@shadcn"
                          className=" "
                        />
                      </Avatar>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-2">
                          <p className="text-lg ">{item.organization_name}</p>
                        </div>

                        <span className="text-sm text-gray-400">
                          {item.achivements}
                        </span>
                        <span className="text-sm text-gray-400">
                          {item.start_year} - {item.end_year}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-end">
                      <Link
                        isExternal
                        showAnchorIcon
                        anchorIcon={<RouterLink />}
                        href={item.link_credential}
                        className="text-[15px] text-blue-500 gap-2"
                        color="primary"
                      >
                        show credentials
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <Empty className="bg-background" />
          )}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

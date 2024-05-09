import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Col, DatePicker, Drawer, Form, Row, Select, Space } from "antd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { tutorApiRequest } from "@/apiRequest/tutor";
import { BeatLoader } from "react-spinners";
const { Option } = Select;

interface SheetDemoProps {
  id: number;
}
export const applicationDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  college: z.string(),
  degree: z.string(),
  degreeType: z.string(),
  subject: z.array(z.string()),
  start_date_study_year: z.number(),
  end_date_study_year: z.number(),
  bio: z.string(),
});

export type ApplicationDetail = z.infer<typeof applicationDetailSchema>;

function useFetchApplications(id: number) {
  const { data, isLoading, error } = useQuery<ApplicationDetail>({
    queryKey: ["applications_detail", id],
    queryFn: () => tutorApiRequest.getApplicationById(id) as any,
  });
  return { data, isLoading, error };
}
const SheetDemo: React.FC<SheetDemoProps> = ({ id }) => {
  const [result, setResult] = useState<ApplicationDetail>(); // Update the type of 'result' to 'any[]'
  const { data, isLoading, error } = useFetchApplications(id);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (open && data) {
      setResult(data);
    }
  }, [open, data]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer}>Detail</Button>
      <Drawer
        title="Detail for application"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
            // backgroundColor: "bg-background",
          },
        }}
      >
        {isLoading ? (
          <div>
            <BeatLoader />
          </div>
        ) : (
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter user name" },
                  ]}
                >
                  <Input
                    placeholder={result?.name}
                    value="luantruong"
                    disabled={true}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="university name" label="University Name">
                  <Input
                    style={{ width: "100%" }}
                    // addonBefore="http://"
                    // addonAfter=".com"
                    placeholder={result?.college}
                    disabled={true}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="degree"
                  label="Degree"
                  rules={[
                    { required: true, message: "Please select an owner" },
                  ]}
                >
                  <Input
                    style={{ width: "100%" }}
                    // addonBefore="http://"
                    // addonAfter=".com"
                    placeholder={result?.degree}
                    value={result?.degree}
                    disabled={true}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="Degree_Type" label="Degree Type">
                  <Input
                    style={{ width: "100%" }}
                    // addonBefore="http://"
                    // addonAfter=".com"
                    placeholder={result?.degreeType}
                    value="Computer Science"
                    disabled={true}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="subject" label="Subject">
                  <Input
                    name="subject"
                    placeholder={result?.subject.join(", ")}
                    disabled={true}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <div className="flex flex-row gap-2">
                  <Form.Item name="Start Date Study" label="Start Date Study">
                    <Input
                      placeholder={
                        result?.start_date_study_year?.toString() ?? ""
                      }
                      className="text-center"
                      disabled={true}
                    />
                  </Form.Item>
                  <Form.Item name="End Date Study" label="End Date Study">
                    <Input
                      placeholder={result?.end_date_study_year.toString() ?? ""}
                      className="text-center"
                      disabled={true}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="bio"
                  label="Bio:"
                  rules={[
                    {
                      required: true,
                      message: "please enter url description",
                    },
                  ]}
                >
                  <p>{result?.bio}</p>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Drawer>
    </>
  );
};

export default SheetDemo;

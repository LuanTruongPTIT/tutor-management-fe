"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    icon: <PiEyeLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "CAM KẾT ĐIỂM THI ĐẦU RA",
    subheading:
      "Học sinh được cam kết tại các kỳ thi như: thi học kỳ, thi chuyển cấp, thi THPT, ĐGNL, ...điểm thi đều" +
      "trên 8+ hoặc tăng mỗi môn học ít nhất 3 điểm.Đặc biệt cam kết bằng hợp đồng ",

    image: "/assets/DumpingDoodle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "GIÁO VIÊN DẠY TRƯỜNG CHUYÊN",
    subheading:
      "Giáo viên có hơn 25 năm kinh nghiệm dạy học & luyện thi. Và đang dạy tại các trường chuyên danh giá hàng đầu cả nước: Trường chuyên Lê Hồng Phong, Trần Đại Nghĩa, Amsterdam,...",
    // image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "HỖ TRỢ NGOÀI GIỜ HỌC 24/7",
    subheading:
      "Các trợ giảng sẽ hỗ trợ giải đáp các thắc mắc của học sinh ngoài giờ học. Đốc thúc học viên học bài, làm bài tập về nhà,.. Ngoài ra có thể giảng lại bài nếu học viên chưa hiểu khi học trên lớp",
    // image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "HỌC TƯƠNG TÁC TRỰC TIẾP",
    subheading:
      "Học tập Livestream tương tác trực tiếp với giáo viên & đặt các câu hỏi thắc mắc trong suốt quá trình học. Hiệu quả hơn so với học video quay sẵn ",
    // image: "/assets/CoffeeDoddle.svg",
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images?: { title: string; picture: string }[];
  description?: string;
  image?: string;
};

const FourthSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
    setActiveImageIndex(0); // Reset activeImageIndex when clicking a new tab
  };

  return (
    <>
      <div className="flex flex-col  pt-20 xl:py-32 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          ĐIỂM ĐẶC BIỆT CỦA KHÓA HỌC
        </div>
        <div className="grid xl:grid-cols-4  md:grid-cols-2 md:row-span-1  gap-4  xl:gap-6 mt-8  px-8 md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${" xl:col-span-4 xl:row-span-3  md:col-span-2   flex-col  xl:flex-col"} bg-[#f6f5f4] p-6 rounded-xl  flex `}
            >
              <div className="flex flex-col ">
                {tab.icon}
                <div className="text-lg font-medium mt-2">{tab.header}</div>
                <div className=" mt-2 ">{tab.subheading}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FourthSection;

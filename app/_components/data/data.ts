export type TutorList = {
  id: number;
  name: string;
  count_students: number;
  lessons: number;
  subjects: string[];
  address: string;
  image: string;
};

export const fakeTutorList: TutorList[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    count_students: 10,
    lessons: 50,
    subjects: ["Toán", "Vật lý"],
    address: "123 Đường ABC, Quận XYZ, Thành phố HCM",
    image: "/teacher.png",
  },
  {
    id: 2,
    name: "Trần Thị B",
    count_students: 8,
    lessons: 40,
    subjects: ["Hóa học", "Tiếng Anh"],
    address: "456 Đường DEF, Quận UVW, Thành phố Hà Nội",
    image: "/teacher.png",
  },
  {
    id: 3,
    name: "Phạm Văn C",
    count_students: 12,
    lessons: 60,
    subjects: ["Lịch sử", "Địa lý"],
    address: "789 Đường GHI, Quận MNO, Thành phố Đà Nẵng",
    image: "/teacher.png",
  },
  {
    id: 3,
    name: "Phạm Văn C",
    count_students: 12,
    lessons: 60,
    subjects: ["Lịch sử", "Địa lý"],
    address: "789 Đường GHI, Quận MNO, Thành phố Đà Nẵng",
    image: "/teacher.png",
  },
  {
    id: 3,
    name: "Phạm Văn C",
    count_students: 12,
    lessons: 60,
    subjects: ["Lịch sử", "Địa lý"],
    address: "789 Đường GHI, Quận MNO, Thành phố Đà Nẵng",
    image: "/teacher.png",
  },
  // Các mục khác nếu cần
];

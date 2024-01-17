import { CgNpm, CgProfile } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { TbSmartHome } from "react-icons/tb";

export const CV_URL =
  "https://drive.google.com/file/d/1rcRaFPD3YWO2EKRElGlkuU3myWuoVnh5/view?usp=sharing";

export const CV_DIRECT_URL =
  "https://drive.usercontent.google.com/uc?id=1rcRaFPD3YWO2EKRElGlkuU3myWuoVnh5&authuser=3&export=download";

export const PROFILE_URL =
  "https://gist.githubusercontent.com/nghi9994/73a1e60190be0ec440284d47652be5d8/raw/86b27a0c2f83db913a208263078e5c4a2bc0fef1/profile.jpg";

export const HAND_ICON_URL =
  "https://gist.githubusercontent.com/nghi9994/9a5440a7f86f81ce5ef6cdf915867f5c/raw/08cea093916bcdbde0bd9e9fb94f5ebf0fcc8a27/hand-icon.svg";

export const navItems = [
  {
    icon: TbSmartHome,
    name: "home",
    title: "Home",
    href: "#home",
    navigate: "/",
  },
  {
    icon: CgProfile,
    name: "about",
    title: "About",
    href: "#about",
    navigate: "/about",
  },
  // {
  //   icon: FaRegFileLines,
  //   name: "skills",
  //   title: "Skills",
  //   href: "#skills",
  // },
  // {
  //   icon: HiOutlineBriefcase,
  //   name: "qualification",
  //   title: "Qualification",
  //   href: "#qualification",
  // },
  // {
  //   icon: <RxImage size={20} />,
  //   name: "Portfolio",
  //   href: "#portfolio",
  // },
  // {
  //   icon: <VscSend size={20} />,
  //   name: "Contact",
  //   href: "#contact",
  // },
];

export const socialItems = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/lio-nguyen/",
    showHome: true,
    showFooter: true,
  },
  {
    name: "Github",
    icon: FiGithub,
    href: "https://github.com/LioNguyen",
    showHome: true,
    showFooter: false,
  },
  {
    name: "Npm",
    icon: CgNpm,
    href: "https://www.npmjs.com/~lionguyen",
    showHome: true,
    showFooter: false,
  },
  {
    name: "Facebook",
    icon: ImFacebook2,
    href: "https://www.facebook.com/nghinguyen9994",
    showHome: false,
    showFooter: true,
  },
  {
    name: "Instagram",
    icon: ImInstagram,
    href: "https://www.instagram.com/nguyenthanhnghi9994/",
    showHome: false,
    showFooter: true,
  },
];

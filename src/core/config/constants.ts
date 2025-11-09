import { CgProfile } from 'react-icons/cg'
import { FaRegFileLines } from 'react-icons/fa6'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { MdWorkOutline } from 'react-icons/md'
import { TbSmartHome } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export const CV_URL =
  import.meta.env.VITE_CV_URL || 'https://drive.google.com/file/d/1wUUU5VSU_sG3KnQ1cBATWCnXyWz-6DzM/view?usp=drive_link'

export const CV_DIRECT_URL =
  'https://drive.usercontent.google.com/uc?id=1rcRaFPD3YWO2EKRElGlkuU3myWuoVnh5&authuser=3&export=download'

export const PROFILE_URL =
  'https://gist.githubusercontent.com/nghi9994/73a1e60190be0ec440284d47652be5d8/raw/86b27a0c2f83db913a208263078e5c4a2bc0fef1/profile.jpg'

export const HAND_ICON_URL =
  'https://gist.githubusercontent.com/nghi9994/9a5440a7f86f81ce5ef6cdf915867f5c/raw/08cea093916bcdbde0bd9e9fb94f5ebf0fcc8a27/hand-icon.svg'

export interface NavItem {
  href: string
  icon: IconType
  name: string
  value: string // Added for Tabs integration
}

export const navItems: NavItem[] = [
  {
    icon: TbSmartHome,
    name: 'Home',
    href: '#home',
    value: 'home',
  },
  {
    icon: FaRegFileLines,
    name: 'Skills',
    href: '#skills',
    value: 'skills',
  },
  {
    icon: HiOutlineBriefcase,
    name: 'Journey',
    href: '#journey',
    value: 'journey',
  },
  {
    icon: MdWorkOutline,
    name: 'Projects',
    href: '#projects',
    value: 'projects',
  },
  {
    icon: CgProfile,
    name: 'About',
    href: '#about',
    value: 'about',
  },
]

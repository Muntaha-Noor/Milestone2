import { UserObject } from '@/models/User'
import { NavItems } from '../models/Header'

export const userInfo: UserObject = {
    name : "Muntaha Noor",
    heading: 'I&#39;m a passionate Frontend Developer from Pakistan. I specialize in creating sleek, user-friendly web interfaces that provide seamless experiences. With a deep interest in modern web technologies, I&#39;ve built dynamic websites and web applications that drive innovation and enhance user engagement. My focus is on delivering efficient, visually appealing solutions that combine functionality with aesthetics.',
    about: ' I am a Frontend Developer with 1 years of experience in web development.I started my journey in IT in 2023 and have worked on various projects, enhancing my  skills.I enjoy transforming ideas into simple and effective solutions that meet user needs.',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js']

}

export const headerItems : NavItems = {
    home: {label: 'Home' , page: 'home'},
    about: {label: 'About', page: 'about'},
    skills: {label: 'Skills', page: 'skills'},
}
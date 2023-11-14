import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", () => {
	const imgPath = "projects/"
	const projects = [
		{
			id: 1,
			title: "Sayed Nafsak",
			summary: `Sayed Nafsak is an online social platform that facilitates direct communication and collaboration between freelancers and clients. It aims to increase the visibility and accessibility of the online workforce, and to enable skilled individuals to monetize their skills and expertise.`,
			role: "Full-stack developer",
			stack: ["vuejs", "nodejs", "graphql", "sequelize", "mysql"],
			liveLink: "https://sayidnafsak.com/",
			screenshots: [imgPath + "SN1.webp", imgPath + "SN2.webp", imgPath + "SN3.webp", imgPath + "SN4.webp", imgPath + "SN5.webp"]


		},
		{
			id: 2,
			title: "Afrotech",
			summary: `Afro-Tech is a Sudanese professional training center that provide high-quality training tailored to the specific needs of the local community. It offers a diverse range of courses in a variety of fields, and has grown to become one of the most trusted and respected training providers in Sudan.`,
			role: "Full-stack developer",
			stack: ["mysql", "expressjs", "nodejs"],
			liveLink: "https://afro-tech.net",
			screenshots: [imgPath + "afro-tech1.webp", imgPath + "afro-tech2.webp", imgPath + "afro-tech3.webp", imgPath + "afro-tech4.webp"]
		},

		{
			id: 3,
			title: "online-edu",
			summary: `As part of a comprehensive full-stack web development course, I undertook the task of creating a responsive e-learning platform to apply and evaluate the acquired knowledge and skills.`,
			role: "Frontend developer",
			stack: ["html", "css", "javascript"],
			liveLink: "https://mohap710.github.io/online-edu",
			screenshots: [imgPath + "online-edu1.webp", imgPath + "online-edu2.webp", imgPath + "online-edu3.webp", imgPath + "online-edu4.webp"]


		},
		{
			id: 4,
			title: "FrontendMentor Challenges",
			summary: `Frontend Mentor is a website that provides front-end coding challenges using a real-life workflow. It allows you to improve your HTML, CSS, and JavaScript skills by building real-world projects.`,
			role: "Frontend developer",
			stack: ["html", "css"],
			liveLink: "https://www.frontendmentor.io/profile/mohap710",
			screenshots: [imgPath + "chat-app.webp", imgPath + "fylo.webp", imgPath + "data-storage.webp", imgPath + "social-proof.webp", imgPath + "testimonial-grid.webp"]


		}
	]
	return { projects }
});
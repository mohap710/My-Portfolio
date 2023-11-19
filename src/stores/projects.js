import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", () => {
	const projects = [
		{
			id: 1,
			title: "Sayed Nafsak",
			summary: `Sayed Nafsak is an online social platform that facilitates direct communication and collaboration between freelancers and clients. It aims to increase the visibility and accessibility of the online workforce, and to enable skilled individuals to monetize their skills and expertise.`,
			role: "Full-stack Developer",
			stack: ["vuejs", "nodejs", "graphql", "sequelize", "mysql"],
			liveLink: "https://sayidnafsak.com/",
			screenshots: [
				{ desktop: "SN/1.webp" },
				{ desktop: "SN/2.webp" },
				{ desktop: "SN/3.webp" },
				{ desktop: "SN/4.webp" },
				{ desktop: "SN/5.webp" },
			]


		},
		{
			id: 2,
			title: "Afrotech",
			summary: `Afro-Tech is a Sudanese professional training center that provide high-quality training tailored to the specific needs of the local community. It offers a diverse range of courses in a variety of fields, and has grown to become one of the most trusted and respected training providers in Sudan.`,
			role: "Back-end Developer",
			stack: ["mysql", "expressjs", "nodejs"],
			liveLink: "https://afro-tech.net",
			screenshots: [
				{ desktop: "afro-tech/1-desktop.png" },
				{ desktop: "afro-tech/2-desktop.png" },
				{ desktop: "afro-tech/3-desktop.png" },
				{ desktop: "afro-tech/4.webp" }
			]
		},


		{
			id: 3,
			title: "online-edu",
			summary: `As part of a comprehensive full-stack web development course, I undertook the task of creating a responsive e-learning platform to apply and evaluate the acquired knowledge and skills.`,
			role: "Frontend Developer",
			stack: ["html", "css", "javascript"],
			liveLink: "https://mohap710.github.io/online-edu",
			screenshots: [{ desktop: "online-edu/1.webp" },
			{ desktop: "online-edu/2.webp" },
			{ desktop: "online-edu/3.webp" },
			{ desktop: "online-edu/4.webp" }]


		},
		{
			id: 4,
			title: "FrontendMentor Challenges",
			summary: `Frontend Mentor is a website that provides front-end coding challenges using a real-life workflow. It allows you to improve your HTML, CSS, and JavaScript skills by building real-world projects.`,
			role: "Frontend Developer",
			stack: ["html", "css"],
			liveLink: "https://www.frontendmentor.io/profile/mohap710",
			screenshots: [{ desktop: "frontend-mentor/chat-app.png" },
			{ desktop: "frontend-mentor/fylo.png" },
			{ desktop: "frontend-mentor/data-storage.png" },
			{ desktop: "frontend-mentor/social-proof.png" },
			{ desktop: "frontend-mentor/testimonial-grid.png" },
			]


		}
	]
	return { projects }
});
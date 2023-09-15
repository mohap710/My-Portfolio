import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", () => {
	const imgpath = "/src/assets/images/projects/"
	const projects = [
		{
			id: 1,
			title: "Project 1",
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo molestiae dolorum a vitae quo voluptates velit corporis sapiente facere magni itaque eius, atque quasi aspernatur repellendus accusantium dicta quisquam, ullam, culpa eveniet amet quidem doloremque voluptatem. Quisquam veritatis nam adipisci recusandae a reprehenderit aspernatur.`,
			role: "Full-stack developer",
			stack: ["vuejs", "nodejs"],
			links: { github: "https://github.com/mohap710", live: "https://google.com" },
			screenshot: imgpath + "chat-app.png"
		},
		{
			id: 2,
			title: "Project 2",
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo molestiae dolorum a vitae quo voluptates velit corporis sapiente facere magni itaque eius, atque quasi aspernatur repellendus accusantium dicta quisquam, ullam, culpa eveniet amet quidem doloremque voluptatem. Quisquam veritatis nam adipisci recusandae a reprehenderit aspernatur.`,
			role: "Full-stack developer",
			stack: ["git", "nodejs", "mysql"],
			links: { live: "https://google.com" },
			screenshot: imgpath + "SN1.png"


		}
	]
	return { projects }
});
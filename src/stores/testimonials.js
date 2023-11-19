import { defineStore } from "pinia";
export const useTestimonialStore = defineStore("testimonials", () => {
	const testimonials = [
		{
			id: 1,
			name: "Mutwakil Mohamed Kakoum",
			quote: `Mohab is a great full stack developer, I have worked with him in serveral projects and he was an example of dedication and passion, with strong ability to solve problems.`,
			role: "Founder of Digital Valley Technology",
			img: "testimonial/mutwakil.jpeg",
		},
		{
			id: 2,
			name: "Mostafaadil Hassan",
			quote: `Mohab is a highly motivated and dedicated developer. He is always willing to go the extra mile to get the job done.I highly recommend Mohab Mohamed for any web development position. He is eager to learn and grow. He is a valuable asset to any team.`,
			role: "Software engineer | Team Leader",
			img: "testimonial/mustafa.jpeg",
		},
		{
			id: 3,
			name: "Arwa Hassan Albeely",
			quote: `Mohab is a very smart developer, easy going he understands exactly your needs and applies it perfectly; he's a great, ambitious, patient and good at his job, I'd love to work with him again, and I highly recommend him for your projects he knows exactly what he's doing.`,
			role: "Founder & CEO Of Sayed Nafsak ",
			img: "testimonial/arwa.jpeg",
		},
		{
			id: 4,
			name: "Mohammed Zahir",
			quote: "I strongly recommend Mohab Mohammed, he is very experienced, have good knowledge on web development using various technologies , also good problem solving mentality",
			role: "E-commerce Specialist",
			img: "testimonial/zahir.jpeg",
		}
	];
	return { testimonials }
});
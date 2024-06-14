import { Hero } from '@components/index';
import {
	ai_3d_tshirts,
	ai_summarizer,
	astro,
	php,
	chat_gpt,
	cns_portfolio,
	css,
	canva,
	ps,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	logo,
	e_commerce,
	eventlify,
	flutter,
	freelance,
	galeri,
	game_2048,
	kucing,
	git,
	e_katalog,
	github_alt,
	email,
	html,
	javascript,
	linkedin,
	mobile,
	qwik,
	reactjs,
	social_network,
	space_invaders,
	tailwind,
	threejs,
	tiny_world_3d,
	typescript,
	vite,
	webpack,
} from '../assets';

const githubUser = import.meta.env.VITE_APP_GITHUB_USER;
const linkedinUser = import.meta.env.VITE_APP_LINKEDIN_USER;
const discordUser = import.meta.env.VITE_APP_DISCORD_USER;

export const navLinks = [
	{
		id: 'about',
		title: 'Tentang',
	},
	{
		id: 'projects',
		title: 'Projek',
	},
	{
		id: 'contact',
		title: 'Kontak',
	},
];

const technologies = [
	{
		name: 'HTML',
		icon: html,
	},
	{
		name: 'CSS',
		icon: css,
	},
	{
		name: 'Javascript',
		icon: javascript,
	},
	{
		name: 'PHP',
		icon: php,
	},
	{
		name: 'Canva',
		icon: canva,
	},
	{
		name: 'Photoshop',
		icon: ps,
	},
	{
		name: 'Gitbash',
		icon: git,
	},
	// {
	// 	name: 'HTML5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	// {
	// 	name: 'Tailwind',
	// 	icon: tailwind,
	// },
	// {
	// 	name: 'git',
	// 	icon: git,
	// },
	// {
	// 	name: 'Webpack',
	// 	icon: webpack,
	// },
	{
		name: 'github',
		icon: github_alt,
	},
];

const experiences = [
	{
		title: 'Ratu Paket Lebaran',
		company_name: 'Sebagai Admin',
		icon: logo,
		iconBg: '#383E56',
		date: 'Juni - Desember 2023',
		points: [
			"Awal mula hanya mengerjakan editan saja seperti video dan foto",
			'Lalu coba cobalah membuat website',
			"Dan semakin kesini semakin seru dan menantang",
			'Lalu membuat template untuk E - KATALOG',
		],
	},
	// {
	// 	title: 'Web Developer',
	// 	company_name: 'Doctor At Work',
	// 	icon: doctoratwork1,
	// 	iconBg: '#E6DEDD',
	// 	date: 'September 2020 - February 2021',
	// 	points: [
	// 		'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 	],
	// },
	{
		title: 'Ratu Paket Lebaran',
		company_name: 'Sebagai Admin',
		icon: freelance,
		iconBg: '#383E56',
		date: 'Januari - Saat ini',
		points: [
			'Beberapa upgrade website dan membuat aplikasi undian',
			'Untuk saat ini sedang mengembangkan aplikasi setoran dan membuat game, hanya untuk mengisi waktu gabut saja',
		],
	},
];

const projects = [
	{
		name: 'E - Katalog Ratu Paket',
		description:
			'Menampilkan paket apa saja yang ada di Ratu Paket Lebaran',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: e_katalog,
		source_code_link: 'https://www.e-katalogratupaket2025.com/',
	},
	{
		name: 'Galeri Ratu Paket',
		description:
			'Mengupload kenangan bersama ratu paket ataupun memberikan kesan pesan',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'next14',
				color: 'yellow-text-gradient',
			},
		],
		image: galeri,
		website_link: 'https://galeri-ratupaket.vercel.app/',
	},
	{
		name: 'Lihat Semuanya',
		description:
			'Website Pernikahan, Website Undian, Game, Bot Whatsaap, Bot Telegram, dll (Tap Icon Link Di Atas Yaaa)',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'php',
				color: 'green-text-gradient',
			},
			{
				name: 'html',
				color: 'pink-text-gradient',
			},
			{
				name: 'css',
				color: 'yellow-text-gradient',
			},
		],
		image: kucing,
		source_code_link: 'https://github.com/exslym/3D-AI-Project/',
		website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	// {
	// 	name: 'ChatGPT App (web vers.)',
	// 	description:
	// 		'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
	// 	tags: [
	// 		{
	// 			name: 'dart',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'flutter',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai-api',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: chat_gpt,
	// 	source_code_link: 'https://github.com/exslym/ChatGPT_App/',
	// 	website_link: 'https://chat-gpt-app-kohl.vercel.app/',
	// },
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },
];

const socials = [
	{
		name: 'email',
		icon: email,
		link: `https://putrislvv@gmail.com/`,
	},
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/rdculous/`,
	},
	{
		name: 'discord',
		icon: discord,
		link: `https://discordapp.com`,
	},
];

export { experiences, projects, socials, technologies };

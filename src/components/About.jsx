import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Tentang Aku</p>
				<h2 className={styles.sectionHeadText}>Perkenalan</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				Aku berminat&nbsp;belajar tentang Teknologi sejak SMP&nbsp;dan aku&nbsp;memutuskan
				untuk lanjut&nbsp;ke SMK mengambil jurusan tentang teknologi yaitu Rekayasa Perangkat Lunak (RPL)&nbsp;di SMK Purnawarman
				Purwakarta. tidak hanya itu aku suka edit ataupun membuat vector. 	
				<br />
				Beberapa&nbsp;projek sudah di kerjakan&nbsp;dari yang awalnya hanya berani membuat web memakai HTML  & CSS&nbsp;sekarang&nbsp;mencoba
				mengejarkan menggunakan&nbsp;PHP, JAVASCRIPT, REACT, NEXTJS, SCSS. Dan sekarang
				aku buat portofolio ini&nbsp;untuk mengapresiasi&nbsp;diri sendiri.
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');

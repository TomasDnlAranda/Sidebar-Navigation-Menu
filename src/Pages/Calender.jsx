import { motion } from 'framer-motion';
import React from 'react';

const Calender = () => {
	return (
		<motion.h1
			initial={{ y: 500 }}
			animate={{ y: 0, transition: { duration: 0.5, type: 'spring' } }}
			exit={{
				y: -500,
				transition: { duration: 0.5, type: 'spring' },
			}}
		>
			Calender
		</motion.h1>
	);
};

export default Calender;

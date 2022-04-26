import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
	return (
		<motion.h1
			initial={{ y: 500 }}
			animate={{ y: 0, transition: { duration: 0.5, type: 'spring' } }}
			exit={{
				y: -500,
				transition: { duration: 0.5, type: 'spring' },
			}}
		>
			Team
		</motion.h1>
	);
};
export default Team;

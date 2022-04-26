import React from 'react';
import { motion } from 'framer-motion';

const Document = () => {
	return (
		<motion.h1
			initial={{ y: 500 }}
			animate={{ y: 0, transition: { duration: 0.5, type: 'spring' } }}
			exit={{
				y: -500,
				transition: { duration: 0.5, type: 'spring' },
			}}
		>
			Document
		</motion.h1>
	);
};

export default Document;

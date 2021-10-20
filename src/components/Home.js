import React from "react";
import { motion } from "framer-motion";

const Home = () => {
	const slideLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<section className="home_page">
			<div className="main_intro">
				<div className="intro">
					<motion.h1
						variants={slideLeft}
						initial="hidden"
						animate="visible"
						transition={{ duration: 1 }}
					>
						I am a Web Developer.
					</motion.h1>

					<hr />
					<br />

					<motion.p
						className="quote"
						variants={slideLeft}
						initial="hidden"
						animate="visible"
						transition={{ duration: 1.5 }}
					>
						'We are never free.To be free, is to be oneself'
					</motion.p>

					<motion.h4
						className="author_name"
						variants={slideLeft}
						initial="hidden"
						animate="visible"
						transition={{ duration: 2 }}
					>
						Dr Mumbi Seraki{" "}
					</motion.h4>
				</div>
				<motion.div
					className="contact_me_button"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95, backgroundColor: "cyan" }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 1.9 } }}
				>
					<motion.a href="/contacts">CONTACT ME</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Home;

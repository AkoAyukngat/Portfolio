import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

function NavBar() {
	const [isMobile, setIsMobile] = useState(false);

	const logoVariants = {
		hidden: { opacity: 0, pathLength: 0 },
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: { duration: 5, ease: "easeInOut" },
		},
	};
	return (
		<div>
			<nav className="nav_bar">
				<motion.div
					className="Logo"
					animate={{ y: -10 }}
					initial={{ y: -250 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
				>
					<motion.a
						href="/"
						className="Logo2Home"
						variants={logoVariants}
						initial="hidden"
						animate="visible"
					>
						AkoAyukngat
					</motion.a>
				</motion.div>

				<ul
					className={isMobile ? "mobile_navig_links" : "navigation_links"}
					onClick={() => setIsMobile(false)}
				>
					<motion.li
						whileHover={{ scale: 1.3, color: "#00FFFF" }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<Link to="/about" className="about_me">
							About Me
						</Link>
					</motion.li>
					<motion.li
						whileHover={{ scale: 1.3, color: "#00FFFF" }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<Link to="/skills" className="skills">
							Skills
						</Link>
					</motion.li>
					<motion.li
						whileHover={{ scale: 1.3, color: "#00FFFF" }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<Link to="/projects" className="projects">
							My Work
						</Link>
					</motion.li>
				</ul>
				<button
					className="mobile_menu_icon"
					onClick={() => setIsMobile(!isMobile)}
				>
					{isMobile ? (
						<i className="FaTimes">{<FaTimes />}</i>
					) : (
						<i className="FaBars">{<FaBars />} </i>
					)}
				</button>
			</nav>
		</div>
	);
}
export default NavBar;

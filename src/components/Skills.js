import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMysql } from "react-icons/si";
import {
	faNodeJs,
	faReact,
	faJs,
	faHtml5,
	faCss3,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
	return (
		<section className="skills_page">
			<div className="skills_container">
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon">
							<span>
								<FontAwesomeIcon className="html" icon={faHtml5} />
							</span>
						</i>
					</div>
					<div className="skill_name">
						<h3>HTML</h3>
					</div>
				</div>
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon">
							<FontAwesomeIcon icon={faCss3} />
						</i>
					</div>
					<div className="skill_name">
						<h3>CSS</h3>
					</div>
				</div>
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon">
							<FontAwesomeIcon icon={faJs} />
						</i>
					</div>
					<div className="skill_name">
						<h3>JAVASCRIPT</h3>
					</div>
				</div>
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon">
							<FontAwesomeIcon icon={faReact} />
						</i>
					</div>
					<div className="skill_name">
						<h3>REACT</h3>
					</div>
				</div>
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon">
							<FontAwesomeIcon icon={faNodeJs} />
						</i>
					</div>
					<div className="skill_name">
						<h3>NODEJS</h3>
					</div>
				</div>
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon_mysql">
							<SiMysql />
						</i>
					</div>
					<div className="skill_name">
						<h3>MYSQL</h3>
					</div>
				</div>
				<div className="card">
					<div className="skill_box">
						<i className="skills_icon">
							<FontAwesomeIcon icon={faGithub} />
						</i>
					</div>
					<div className="skill_name">
						<h3>GITHUB</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;

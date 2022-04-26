import React, { useState } from 'react';
import Logo from '../../assets/svg/logo.svg';
import Home from '../../assets/svg/home-solid.svg';
import Team from '../../assets/svg/social.svg';
import Calender from '../../assets/svg/sceduled.svg';
import Proyects from '../../assets/svg/starred.svg';
import Document from '../../assets/svg/draft.svg';
import PowerOff from '../../assets/svg/power-off-solid.svg';
import Me from '../../assets/images/me.png';
import styled from 'styled-components';
const Button = styled.button`
	background-color: ${(props) => props.theme.dark};
	border: none;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	margin: 0.5rem 0 0 0.5rem;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	&::before {
		content: '';
		background: ${(props) => props.theme.light};
		height: 2px;
		width: 1.5rem;
		position: absolute;
		top: ${(props) => (props.click ? '1.5' : '1rem')};
		transform: ${(props) => (props.click ? 'rotate(135deg)' : 'rotate(0)')};
		transition: all 0.5s ease;
	}

	&::after {
		content: '';
		background: ${(props) => props.theme.light};
		height: 2px;
		width: 1.5rem;
		position: absolute;
		top: ${(props) => (props.click ? '1.2' : '1.5rem')};
		transform: ${(props) => (props.click ? 'rotate(-135deg)' : 'rotate(0)')};
		transition: all 0.5s ease;
	}
`;

const SidebarContainer = styled.div`
	background-color: ${(props) => props.theme.dark};
	width: 3.5rem;
	height: 80vh;
	margin-top: 1rem;
	border-radius: 0 30px 30px 0;
	padding: 1rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const LogoContainer = styled.div`
	width: 2rem;

	img {
		width: 100%;
		height: auto;
	}
`;

const SlickBar = styled.ul`
	color: ${(props) => props.theme.light};
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.theme.dark};
	padding: 2rem 0;

	position: absolute;
	top: 8rem;
	left: 0;

	width: ${(props) => (props.click ? '12rem' : '3.5rem')};
	transition: all 0.5s ease;
	border-radius: 0 30px 30px 0;
`;

const Item = styled.li`
	width: 100%;
	padding: 1rem 0;

	display: flex;
	padding-left: 1rem;

	&:hover {
		border-right: 4px solid ${(props) => props.theme.light};
		img {
			filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
		}
	}

	img {
		width: 1.2rem;
		filter: invert(76%) sepia(4%) saturate(1033%) hue-rotate(169deg) brightness(78%) contrast(85%);
		height: auto;
	}
`;

const Text = styled.span`
	width: ${(props) => (props.click ? '100%' : 0)};
	overflow: hidden;
	margin-left: ${(props) => (props.click ? '2rem' : '0')};
	transition: all 0.3s ease;
`;

const Profile = styled.div`
	width: ${(props) => (props.click ? '14rem' : '3rem')};
	height: 3rem;
	/* 
	border: 2px solid ${(props) => props.theme.light}; */
	border-radius: 20px;
	padding: 0.5rem 1rem;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.dark};
	margin-left: ${(props) => (props.click ? '9rem' : '0')};
	transition: all 0.3s ease;

	img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;

		&:hover {
			border: 2px solid ${(props) => props.theme.gray};
			padding: 2px;
		}
	}
`;

const Detail = styled.div`
	display: ${(props) => (props.click ? 'flex' : 'none')};
	justify-content: space-between;
	align-items: center;
`;

const Name = styled.div`
	transition: all 0.3s ease;
	color: ${(props) => props.theme.light};
	display: ${(props) => (props.click ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 6.5rem;
	h4 {
		color: ${(props) => props.theme.light};
		display: inline-block;
		font-size: ${(props) => (props.click ? '0.7rem' : '0')};
		overflow: hidden;
		transition: all 0.3s ease !important;
	}

	a {
		font-size: 0.6rem;
		text-decoration: none;
		color: ${(props) => props.theme.gray};
		overflow: hidden;
		&:hover {
			color: ${(props) => props.theme.light};
		}
	}
`;

const Logout = styled.button`
	border: none;
	width: 1.5rem;
	height: 1.5rem;
	background: transparent;

	img {
		width: 100%;
		height: auto;
		filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg) brightness(100%) contrast(126%);
		transition: all 0.3s ease;

		&:hover {
			border: none;
			padding: 0;
			opacity: 0.5;
		}
	}
`;

const Sidebar = () => {
	const [click, setClick] = useState(false);
	const [clickProfile, setClickProfile] = useState(false);

	const handleClick = () => setClick(!click);

	const handleClickProfile = () => setClickProfile(!clickProfile);

	return (
		<>
			<Button onClick={handleClick} click={click}></Button>
			<SidebarContainer>
				<LogoContainer>
					<img src={Logo} alt="logo" />
				</LogoContainer>
				<SlickBar click={click}>
					<Item>
						<img src={Home} alt="home" />
						<Text click={click} className="hola">
							Home
						</Text>
					</Item>
					<Item>
						<img src={Team} alt="team" />
						<Text click={click}>Team</Text>
					</Item>
					<Item>
						<img src={Calender} alt="calender" />
						<Text click={click}>Calender</Text>
					</Item>
					<Item>
						<img src={Proyects} alt="proyects" />
						<Text click={click}>Proyects</Text>
					</Item>
					<Item>
						<img src={Document} alt="document" />
						<Text click={click}>Document</Text>
					</Item>
				</SlickBar>

				<Profile click={clickProfile}>
					<img src={Me} alt="profile" onClick={handleClickProfile} />
					<Detail click={clickProfile}>
						<Name click={clickProfile}>
							<h4>Jhon Doe</h4>
							<a href="/#">view profile</a>
						</Name>
						<Logout>
							<img src={PowerOff} alt="powerOff" />
						</Logout>
					</Detail>
				</Profile>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;

import styled from 'styled-components';
import LogoImg from '../../../assets/images/logo.png';
import LogoMobileImg from '../../../assets/images/logomobile.svg';
import InputSearch from '../../../ui/InputSearch';
import MenuProfile from '../components/MenuProfile';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ setSearch, search, setIsOpenModal, setIsEdit, origin }) => {
	const redirectTo = () => {
		window.location.assign('/');
	};
	const user = JSON.parse(localStorage.getItem('user'));
	const openModal = () => {
		setIsEdit(false);
		setIsOpenModal(true);
	};
	return (
		<HeaderElement>
			<Logo src={LogoImg} alt="logo" onClick={redirectTo} />
			<LogoMobile src={LogoMobileImg} onClick={redirectTo} alt="logo" />
			{origin !== 'statistics' ? (
				<InputSearch setSearch={setSearch} search={search} />
			) : (
				<div></div>
			)}
			<IconMobile>
				<FontAwesomeIcon icon={faSearch} size="lg" color={'gray'} />
			</IconMobile>
			<Menu>
				{user?.name === 'Admin' && (
					<button onClick={openModal}>
						<FontAwesomeIcon icon={faPlus} size="sm" color={'white'} />
					</button>
				)}
				<MenuProfile />
			</Menu>
		</HeaderElement>
	);
};

const HeaderElement = styled.div`
	z-index: 99999;
	min-width: 99vw;
	max-width: 99vw;
	position: fixed;
	display: grid;
	grid-template-columns: 1fr 40px 120px;
	align-items: center;
	background: white;
	grid-area: header;
	padding: 1rem;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	& button {
		background: linear-gradient(90deg, #073992 1.89%, #00628f 98.36%);
		height: 35px;
		width: 35px;
		height: 35px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}
`;

const Logo = styled.img`
	display: none;
	cursor: pointer;
	@media (min-width: 800px) {
		display: block;
	}
`;

const LogoMobile = styled.img`
	display: block;
	cursor: pointer;
	@media (min-width: 800px) {
		display: none;
	}
`;

const IconMobile = styled.div`
	display: grid;
	justify-content: center;
	@media (min-width: 768px) {
		display: none;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1.5rem;
`;

export default Header;

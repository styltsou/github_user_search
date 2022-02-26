import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import Header from "./Header/Header";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard/ProfileCard";

import ButtonsModal from "./ButtonsModal";

const BackgroundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100vh;
	background-color: var(--color-background);
`;

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90rem;
`;

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const [searchData, setSearchData] = useState({
		searchTerm: "octocat",
		results: {},
	});

	const [userProfile, setUserProfile] = useState("octocat");

	useEffect(() => {
		const getData = async () => {
			const results = await fetch(
				`https://api.github.com/users/${userProfile}`
			);

			const data = await results.json();

			setSearchData((prevData) => ({
				...prevData,
				results: data,
			}));
		};

		getData();
	}, []);

	return (
		<ThemeProvider theme={darkMode ? theme.dark : theme.light}>
			<BackgroundContainer>
				<Wrapper>
					<Header darkMode={darkMode} setDarkMode={setDarkMode} />
					<SearchBar
						searchData={searchData}
						setSearchData={setSearchData}
						userProfile={userProfile}
						setUserProfile={setUserProfile}
					/>
					<ProfileCard data={searchData.results} />
					<ButtonsModal user={userProfile} />
				</Wrapper>
			</BackgroundContainer>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;

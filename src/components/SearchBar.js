import React, { useState } from "react";
import styled from "styled-components";

import { GoSearch } from "react-icons/go";

const Form = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 3rem;
	padding: 0.8rem 1rem;
	background-color: var(--color-card-background);
	border-radius: 0.7rem;
	box-shadow: var(--shadow);
`;

const SearchIcon = styled(GoSearch)`
	color: var(--color-primary);
	font-size: 2.7rem;
	margin-right: 1.5rem;
	line-height: 100%;
`;

const Input = styled.input`
	background-color: transparent;
	width: 100%;
	font-size: 1.7rem;
	color: var(--color-text);
	border: none;
`;

const SearchInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

const Button = styled.button`
	justify-self: flex-end;
	color: #fff;
	background-color: var(--color-primary);
	border: none;
	padding: 1.5rem 2.5rem;
	font-size: 1.6rem;
	border-radius: 0.7rem;
`;

const ErrorMessage = styled.span`
	position: relative;
	top: 0;
	right: 0;
	color: red;
	font-size: 1.5rem;
	white-space: nowrap;
	margin-right: 2rem;
	transform: ${(props) => (props.error ? "translateX(0)" : "translateX(1rem)")};
	opacity: ${(props) => (props.error ? "1" : "0")};
	visibility: ${(props) => (props.error ? "visible" : "hidden")};
	transition: all 0.1s ease-in;
`;

function SearchBar({ searchData, setSearchData, setUserProfile }) {
	const [userNotFound, setUserNotFound] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setUserNotFound(false);

		const getSearchResults = async () => {
			const response = await fetch(
				`https://api.github.com/users/${searchData.searchTerm}`
			);

			if (response.status === 404) {
				setUserNotFound(true);
				return;
			}

			const data = await response.json();

			setSearchData((prevData) => ({
				...prevData,
				results: data,
			}));

			setUserProfile(searchData.searchTerm);
		};

		getSearchResults();
	};

	const handleChange = (e) => {
		setSearchData((prevData) => ({
			...prevData,
			searchTerm: e.target.value,
		}));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchInputWrapper>
				<SearchIcon />
				<Input
					type="text"
					value={searchData.searchTerm}
					onChange={handleChange}
					placeholder="Search Github username..."
				/>
				<ErrorMessage error={userNotFound}>User not found</ErrorMessage>
			</SearchInputWrapper>
			<Button>Search</Button>
		</Form>
	);
}

export default SearchBar;

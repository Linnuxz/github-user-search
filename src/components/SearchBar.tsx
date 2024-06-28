import { useState } from 'react';
import SearchIcon from '/assets/icon-search.svg';
import { GithubUserData, TTheme } from '../types';
import { fetchApi } from './FetchGhApi';

type TComponent = TTheme & {
    onUserDataChange: (data: GithubUserData) => void;
};

const SearchBar = ({ isLightTheme, onUserDataChange }: TComponent) => {
    const [username, setUsername] = useState<string>('octocat');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        try {
            const data = await fetchApi(username);
            onUserDataChange(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            <input
                className={`w-full h-[60px] rounded-[17px] pl-[45px] md:pl-[55px] text-[13px] md:text-[18px] leading-[25px] outline-none caret-blue ${
                    isLightTheme
                        ? 'shadow-light-theme bg-[#FEFEFE] text-[#222731] duration-500'
                        : 'bg-dark-theme text-white duration-500'
                }`}
                placeholder="Search GitHub username..."
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            ></input>
            <img
                src={SearchIcon}
                alt="searchIcon"
                className="w-[20px] h-[20px] absolute top-5 left-4"
            />
            <button
                className="absolute right-2 top-[6px] bg-[#0079FF] text-white w-[84px] md:w-[106px] h-[46px] rounded-[10px]"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;

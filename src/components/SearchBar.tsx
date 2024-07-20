import { useState } from 'react';
import SearchIcon from '/assets/icon-search.svg';
import { GithubUserData, TTheme } from '../types';
import { fetchApi } from './FetchGhApi';

type TComponent = TTheme & {
    onUserDataChange: (data: GithubUserData) => void;
    setIsNotFound: (value: boolean) => void;
    isNotFound: boolean;
};

const SearchBar = ({
    isLightTheme,
    onUserDataChange,
    isNotFound,
    setIsNotFound,
}: TComponent) => {
    const [username, setUsername] = useState<string>('Linnuxz');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const onDataNotFound = () => {
        setIsNotFound(true);
        setTimeout(() => {
            setIsNotFound(false);
        }, 2000);
    };

    const handleSearch = async () => {
        try {
            const data = await fetchApi(username);
            if (data.message === 'Not Found') {
                onDataNotFound();
                return;
            }
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
            <p
                className={`absolute top-[19px] right-[140px] z-10 text-[#F74646] hidden ${
                    isNotFound ? 'md:block' : ''
                }`}
            >
                No results
            </p>
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

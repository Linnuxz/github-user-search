import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import InfoComponent from './components/InfoComponent';
import { GithubUserData } from './types';
import { fetchApi } from './components/FetchGhApi';

const App = () => {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
    const [userData, setUserData] = useState<GithubUserData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApi('linnuxz');
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleUserDataChange = (data: GithubUserData) => {
        setUserData(data);
    };

    return (
        <div
            className={`min-h-screen px-[24px] py-[31px] ${
                isLightTheme
                    ? 'bg-[#F6F8FF] duration-500'
                    : 'bg-[#141D2F] duration-500'
            }`}
        >
            <div className='md:max-w-[573px] mx-auto'>
                <Header
                    isLightTheme={isLightTheme}
                    setIsLightTheme={setIsLightTheme}
                />
                <div className="flex flex-col gap-4 mt-9">
                    <SearchBar
                        isLightTheme={isLightTheme}
                        onUserDataChange={handleUserDataChange}
                    />
                    {userData && (
                        <InfoComponent
                            isLightTheme={isLightTheme}
                            data={userData}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;

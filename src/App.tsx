import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import InfoComponent from './components/InfoComponent';
import { GithubUserData } from './types';
import { fetchApi } from './components/FetchGhApi';

const App = () => {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
    const [userData, setUserData] = useState<GithubUserData>();
    const [isNotFound, setIsNotFound] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApi('Linnuxz');
                setUserData(data);
                setIsNotFound(false);
            } catch (error) {
                setIsNotFound(true);
                setTimeout(() => {
                    setIsNotFound(false);
                }, 3000);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(isNotFound);
    }, [isNotFound]);

    const handleUserDataChange = (data: GithubUserData) => {
        if (data) {
            setUserData(data);
            setIsNotFound(false);
        } else {
            setIsNotFound(true);
            setTimeout(() => {
                setIsNotFound(false);
            }, 3000);
        }
    };

    return (
        <div
            className={`min-h-screen px-[24px] py-[31px]  ${
                isLightTheme
                    ? 'bg-[#F6F8FF] duration-500'
                    : 'bg-[#141D2F] duration-500'
            }`}
        >
            <div className="md:max-w-[573px] xl:max-w-[730px] mx-auto">
                <Header
                    isLightTheme={isLightTheme}
                    setIsLightTheme={setIsLightTheme}
                />
                <div className="flex flex-col gap-4 mt-9">
                    <SearchBar
                        isLightTheme={isLightTheme}
                        onUserDataChange={handleUserDataChange}
                        isNotFound={isNotFound}
                        setIsNotFound={setIsNotFound}
                    />
                    {userData && (
                        <InfoComponent
                            isLightTheme={isLightTheme}
                            data={userData}
                            isNotFound={isNotFound}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;

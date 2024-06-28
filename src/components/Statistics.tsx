import { GithubUserData, TTheme } from '../types';

type TComponent = TTheme & {
    data: GithubUserData;
};

const Statistics = ({ data, isLightTheme }: TComponent) => {
    return (
        <div
            className={`flex ${
                isLightTheme
                    ? 'bg-[#F6F8FF] duration-500'
                    : 'bg-[#141D2F] duration-500'
            }  h-[85px] w-full items-center justify-center rounded-[10px] md:justify-around`}
        >
            <div className="w-[79px] text-center md:text-left flex flex-col gap-2 md:gap-1">
                <p
                    className={`text-[11px] md:text-[13px] ${
                        isLightTheme
                            ? 'text-[#4B6A9B] duration-500'
                            : 'text-white duration-500'
                    }`}
                >
                    Repos
                </p>
                <p
                    className={`font-bold text-[16px] md:text-[22px] ${
                        isLightTheme
                            ? 'text-[#2B3442] duration-500'
                            : 'text-white duration-500'
                    }`}
                >
                    {data.public_repos}
                </p>
            </div>
            <div className="w-[79px] text-center md:text-left flex flex-col gap-2 md:gap-1">
                <p
                    className={`text-[11px] md:text-[13px] ${
                        isLightTheme
                            ? 'text-[#4B6A9B] duration-500'
                            : 'text-white duration-500'
                    }`}
                >
                    Followers
                </p>
                <p
                    className={`font-bold text-[16px] md:text-[22px] ${
                        isLightTheme
                            ? 'text-[#2B3442] duration-500'
                            : 'text-white duration-500'
                    }`}
                >
                    {data.followers}
                </p>
            </div>
            <div className="w-[79px] text-center md:text-left flex flex-col gap-2 md:gap-1">
                <p
                    className={`text-[11px] md:text-[13px] ${
                        isLightTheme
                            ? 'text-[#4B6A9B] duration-500'
                            : 'text-white duration-500'
                    }`}
                >
                    Following
                </p>
                <p
                    className={`font-bold text-[16px] md:text-[22px] ${
                        isLightTheme
                            ? 'text-[#2B3442] duration-500'
                            : 'text-white duration-500'
                    }`}
                >
                    {data.following}
                </p>
            </div>
        </div>
    );
};

export default Statistics;

import Statistics from './Statistics';
import { TComponent } from '../types';
import ContactInfo from './ContactInfo';

type TComp = TComponent & {
    isNotFound: boolean;
};

const InfoComponent = ({ data, isLightTheme, isNotFound }: TComp) => {
    const formatDate = (createdAt: string) => {
        const date = new Date(createdAt);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        return `Joined ${day} ${month} ${year}`;
    };
    const joinData: string = data.created_at as string;
    const joinedDate = formatDate(joinData);

    return (
        <div className="relative">
            {isNotFound && (
                <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-[#F74646] md:hidden">
                    No Results
                </div>
            )}
            <div
                className={`w-full ${
                    isLightTheme
                        ? 'bg-[#FEFEFE] shadow-light-theme duration-500'
                        : 'bg-[#1E2A47] duration-500'
                } ${
                    isNotFound ? 'opacity-20 duration-300 md:opacity-100' : ''
                } py-[33px] flex gap-[20px] rounded-[15px] px-[24px] flex-col md:px-[40px] xl:flex-row`}
            >
                {typeof data.avatar_url === 'string' && (
                    <img
                        src={data.avatar_url}
                        alt="Avatar"
                        className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full hidden xl:block"
                    />
                )}
                <div className="xl:max-w-[480px]">
                    <div className="flex flex-col gap-[18px]">
                        <div className="flex items-center gap-[20px] md:gap-[41px]">
                            {typeof data.avatar_url === 'string' && (
                                <img
                                    src={data.avatar_url}
                                    alt="Avatar"
                                    className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full xl:hidden"
                                />
                            )}
                            <div className="xl:flex xl:justify-between xl:w-full">
                                <div>
                                    <h2
                                        className={`${
                                            isLightTheme
                                                ? 'text-[#2B3442] duration-500'
                                                : 'text-white duration-500'
                                        } text-[16px] md:text-[26px] font-bold`}
                                    >
                                        {data.name}
                                    </h2>
                                    <p
                                        className={`text-[#0079FF] text-[13px] md:text-[16px]`}
                                    >
                                        @{data.login}
                                    </p>
                                </div>
                                <p
                                    className={`${
                                        isLightTheme
                                            ? 'text-[#697C9A] duration-500'
                                            : 'text-white duration-500'
                                    } text-[13px] md:text-[15px] xl:mt-2`}
                                >
                                    {joinedDate}
                                </p>
                            </div>
                        </div>
                        <p
                            className={`${
                                isLightTheme
                                    ? 'text-[#4B6A9B] duration-500'
                                    : 'text-white duration-500'
                            } text-[13px] md:text-[15px] leading-[25px]`}
                        >
                            {data.bio ||
                                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donecodio. Quisque volutpat mattis eros.'}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[32px] xl:gap-[37px] mt-[23px] xl:mt-[32px]">
                        <Statistics data={data} isLightTheme={isLightTheme} />

                        <ContactInfo data={data} isLightTheme={isLightTheme} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoComponent;

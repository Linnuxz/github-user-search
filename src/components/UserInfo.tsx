import { TComponent } from '../types';

const UserInfo = ({ data, isLightTheme }: TComponent) => {
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
        <>
            <div className="flex items-center gap-[20px] md:gap-[41px]">
                {typeof data.avatar_url === 'string' && (
                    <img
                        src={data.avatar_url}
                        alt="Avatar"
                        className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
                    />
                )}
                <div>
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
                        } text-[13px] md:text-[15px]`}
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
        </>
    );
};

export default UserInfo;

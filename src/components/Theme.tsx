import Sun from '/assets/icon-sun.svg';
import Moon from '/assets/icon-moon.svg';
import { TTheme } from '../types';

const Theme = ({ isLightTheme, setIsLightTheme }: TTheme) => {
    return (
        <button
            className="flex gap-4 items-center"
            onClick={() => setIsLightTheme && setIsLightTheme(!isLightTheme)}
        >
            <p
                className={`text-[13px] uppercase font-bold tracking-[2.5px] ${
                    isLightTheme ? 'text-custom-gray' : 'text-white'
                }`}
            >
                {isLightTheme ? 'Dark' : 'Light'}
            </p>
            <img src={isLightTheme ? Moon : Sun} alt="" />
        </button>
    );
};

export default Theme;

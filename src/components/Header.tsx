import { TTheme } from '../types';
import Theme from './Theme';

const Header = ({ isLightTheme, setIsLightTheme }: TTheme) => {
    return (
        <div className="flex justify-between items-center">
            <h1
                className={`${
                    isLightTheme ? 'text-[#222731]' : 'text-white'
                } text-[26px] font-bold`}
            >
                devfinder
            </h1>
            <div>
                <Theme
                    isLightTheme={isLightTheme}
                    setIsLightTheme={setIsLightTheme}
                />
            </div>
        </div>
    );
};

export default Header;

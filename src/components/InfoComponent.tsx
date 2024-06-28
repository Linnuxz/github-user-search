import Statistics from './Statistics';
import { TComponent } from '../types';
import ContactInfo from './ContactInfo';
import UserInfo from './UserInfo';

const InfoComponent = ({ data, isLightTheme }: TComponent) => {
    return (
        <div
            className={`w-full ${
                isLightTheme
                    ? 'bg-[#FEFEFE] shadow-light-theme duration-500'
                    : 'bg-[#1E2A47] duration-500'
            } py-[33px] flex gap-[20px] rounded-[15px] px-[24px] flex-col md:px-[40px]`}
        >
            <UserInfo data={data} isLightTheme={isLightTheme} />

            <Statistics data={data} isLightTheme={isLightTheme} />

            <ContactInfo data={data} isLightTheme={isLightTheme} />
        </div>
    );
};

export default InfoComponent;

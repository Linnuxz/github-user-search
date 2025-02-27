import { TComponent } from '../types';

import LocationIcon from '/assets/icon-location.svg';
import WebsiteIcon from '/assets/icon-website.svg';
import TwitterIcon from '/assets/icon-twitter.svg';
import CompanyIcon from '/assets/icon-company.svg';

const ContactInfo = ({ isLightTheme, data }: TComponent) => {
    return (
        <div
            className={`flex flex-col md:flex-row gap-[16px] ${
                isLightTheme
                    ? 'text-custom-gray duration-500'
                    : 'text-white duration-500'
            }`}
        >
            <div className="flex flex-col gap-[16px]">
                {/* Location */}
                <div
                    className={`flex gap-[19px] items-center ${
                        !data.location ? 'flex opacity-50' : ''
                    }`}
                >
                    <img
                        src={LocationIcon}
                        className={`w-[13px] h-[20px] ${
                            !isLightTheme ? 'filter-white duration-500' : ''
                        }`}
                    />
                    <p className='text-[13px] md:text-[15px]'>{data.location || 'Not Available'}</p>
                </div>
                {/* URL */}
                <div
                    className={`flex gap-[13px] items-center ${
                        !data.html_url ? 'flex opacity-50' : ''
                    }`}
                >
                    <img
                        src={WebsiteIcon}
                        className={`w-[20px] h-[20px] ${
                            !isLightTheme ? 'filter-white duration-500' : ''
                        }`}
                    />
                    <a href={`${data.html_url}`} target='_blank' className='text-[13px] md:text-[15px] xl:hover:underline'>{data.html_url || 'Not Available'}</a>
                </div>
            </div>
            {/* Twitter */}
            <div className="flex flex-col gap-[16px]">
                <div
                    className={`flex gap-[13px] items-center ${
                        !data.twitter_username ? 'flex opacity-50' : ''
                    }`}
                >
                    <img
                        src={TwitterIcon}
                        className={`w-[20px] h-[20px] ${
                            !isLightTheme ? 'filter-white duration-500' : ''
                        }`}
                    />
                    <p className='text-[13px] md:text-[15px]'>{data.twitter_username || 'Not Available'}</p>
                </div>

                <div
                    className={`flex gap-[13px] items-center ${
                        !data.company ? 'flex opacity-50' : ''
                    }`}
                >
                    <img
                        src={CompanyIcon}
                        className={`w-[20px] h-[20px] ${
                            !isLightTheme ? 'filter-white duration-500' : ''
                        }`}
                    />
                    <p className='text-[13px] md:text-[15px]'>{data.company || 'Not Available'}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

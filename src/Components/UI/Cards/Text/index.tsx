import { TextCardProps } from '../../../../Types/PropTypes';

const TextCard = ({ heading, paragraph }: TextCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-6 space-y-6">
            <div className="w-full max-w-xl flex flex-col gap-[38px]">
                <h1 className="md:w-full md:text-left text-center text-[#263238] text-[40px] font-normal font-freeman lg:leading-[29px] md:leading-normal tracking-tight">
                    {heading}
                </h1>
                <p
                    className="text-[#727272] md:text-[26px] text-[15px] font-normal font-msUIGothic leading-7 tracking-tight md:text-left text-center pr-[16px]"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                />
            </div>
        </div>
    );
};

export default TextCard;

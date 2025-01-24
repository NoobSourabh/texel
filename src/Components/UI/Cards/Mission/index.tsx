type MissionCardProp = {
    title: string;
    content: string;
};

const MissionCard = ({ title, content }: MissionCardProp) => {
    return (
        <div className="flex flex-col w-[328px] h-[378px] py-[35px] px-[40px] pr-[10px] gap-[20px] rounded-[10px] bg-[#9BCAC71A] shadow-lg">
            <h2 className="text-[#252b42] text-2xl font-bold font-montserrat leading-loose tracking-tight">{title}</h2>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <p className="w-[273px] text-left text-sm text-gray font-semibold font-montserrat leading-tight tracking-tight">{content}</p>
        </div>
    );
};

export default MissionCard;

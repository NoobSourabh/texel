type CardProps = {
    iconUrl: string;
    heading: string;
    description: string;
};

const FeatureCard = ({ iconUrl, heading, description }: CardProps) => {
    return (
        <div className="w-[312px] h-[276px] p-[24px] gap-[24px] bg-white flex flex-col items-center text-black">
            <div className="w-[78.23px] h-[80px] p-[20px] flex justify-center items-center opacity-100 bg-secondary">
                <img src={iconUrl} alt="Icon" className="w-full h-full object-contain" />
            </div>

            <div className="w-[264px] h-auto gap-[10px] opacity-100 flex flex-col items-center">
                <h3 className="text-[18px] font-medium leading-[24px] text-center text-[#1D2026]">
                    {heading}
                </h3>
                <p className="text-[14px] font-normal font-inter leading-[22px] text-center text-[#6E7485]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;






















































//https://github.com/NoobSourabh/texel.git
// Developed by Sourabh Chouhan | GitHub: https://github.com/NoobSourabh
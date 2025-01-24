import TexelLogo from '../../../../assets/images/TexelLogo';

type VectorbgProps = {
    className?: string;
};

const LeftCard = ({ className }: VectorbgProps) => {
    return (
        <div className={className}>
            <div className="flex flex-col justify-between w-[48vw] md:w-[40vw] gap-4 md:gap-10">
                <p className="text-[11px] md:text-m text-brown font-bold py-2 md:py-4">
                    Empowering Education Through Seamless Connections
                </p>
                <div className="md:w-[60%] overflow-hidden">
                    <TexelLogo className="w-[120px] md:w-[500px]" />
                </div>
                <p className="text-[11px] md:text-m text-brown py-2 md:py-4">
                    Switch to paperless work and more consistent results
                </p>
                <button className="text-[7px] md:text-m w-[56px] md:w-[165px] h-[17px] md:h-[52px] border border-[#937663] rounded-sm md:rounded-md">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default LeftCard;

type PropType = {
  url: string;
  title: string;
  description: string;
};

const HomeCard = ({ url, title, description }: PropType) => {
  return (
    <div className="w-[260px] h-[202px] pl-[14px] pr-[17px] pt-[9.91px] pb-2 bg-white shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] flex-col justify-start items-start gap-3 inline-flex overflow-hidden md:w-[328px] md:h-[296px] md:px-10 md:py-[35px]">
      <div className="pr-[15.58px] justify-start items-center inline-flex overflow-hidden md:h-[67px] md:pr-[7px]">
        <img className="w-[45px] h-12 md:w-[65px] md:h-[65px]" src={url} alt={title} />
      </div>
      <h3 className="text-[#252b42] text-xl font-bold font-montserrat leading-loose tracking-tight md:text-2xl">
        {title}
      </h3>
      <div className="w-[50px] h-0.5 bg-[#e64040] md:w-[50px]"></div>
      <p className="w-[229px] opacity-90 text-[#727272] text-[13px] font-bold font-montserrat leading-tight tracking-tight md:w-[273px] md:text-sm">
        {description}
      </p>
    </div>
  );
};

export default HomeCard;

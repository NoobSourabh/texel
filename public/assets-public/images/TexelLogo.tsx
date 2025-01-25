
type VectorbgProps = {
    className?: string;  // Optional className prop
}
const TexelLogo = ({ className }: VectorbgProps) => {
    return (
        <img className={className} src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736224067/texellogolg_w6o6px.png" />
    )
}

export default TexelLogo 
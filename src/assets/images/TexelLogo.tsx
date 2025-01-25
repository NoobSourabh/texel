
type VectorbgProps = {
    className?: string;  // Optional className prop
}
const TexelLogo = ({ className }: VectorbgProps) => {
    return (
        <img className={className} src='/assets-public/images/footer-texel-logo.svg'
/>
    )
}

export default TexelLogo 
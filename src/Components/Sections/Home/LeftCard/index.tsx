import TexelLogo from '../../../../assets/images/TexelLogo';
import './styles.css'
type VectorbgProps = {
    className?: string;
}
const LeftCard = ({ className }: VectorbgProps) => {
    return (


        <div className={className}>
            <div className='left-card'>
                <p className='left-card-heading'>Empowering Education Through Seamless Connections </p>
                <div className="left-card-img-container">
                    <TexelLogo className='left-card-img' />
                </div>
                <p className='left-card-text'>Switch to paperless work and more consistent results</p>
                <button className="btn">Learn More</button>
            </div>
        </div>
    )
}

export default LeftCard
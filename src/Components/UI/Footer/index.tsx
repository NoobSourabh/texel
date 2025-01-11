import TexelLogo from '../../../assets/images/TexelLogo'
import './styles.css'
const Footer = () => {
    return (
        <div className='footer'>
        <div className='flex  mx-auto py-8'>
            <div className='footer-container'>
                <div className='footer-logo-container'>
                    <TexelLogo />
                </div>
                <div className='grid-2 '>
                    <div>
                        <h3 className="footer-h3">Know Us</h3>
                    </div>
                    <div className='inner-grid-2'>
                        <a href=''>Home</a>
                        <a href=''>Features</a>
                        <a href=''>Mission</a>
                        <a href=''>About Us</a>
                    </div>
                </div>
                <div className='grid-2'>
                    <div>
                        <h3 className="footer-h3">Contact Us</h3>
                    </div>
                    <div className='inner-grid-2'>
                        <a href=''>contact@mytexel.com</a>
                        <a href=''>+91-91253-55841</a>
                    </div>
                </div>
                <div className='grid-2'>
                    <div>
                        <h3 className="footer-h3">Social</h3>
                    </div>
                    <div className='social'>
                        <a href=''>
                            <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311304/image-2_gr2ued.svg' />
                        </a>
                        <a href=''>
                            <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311297/image-3_dfs7e4.svg' />
                        </a>
                        <a href=''>
                            <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311289/image-4_m39zo3.svg' />
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <div className='lowest'>
                <p>© 2024 Texel Co. | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer

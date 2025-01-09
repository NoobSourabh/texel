import './nav.css'; // Importing the external Tailwind CSS file

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className='logo-img' src='https://s3-alpha-sig.figma.com/img/33f5/203d/f6ea48f63482a333fb0807a8a1adb165?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baRUijVvIejRADJnUOuWX6~USctCWEvoeOvHPHvCwPZp1yDt7BObZjbYhhwayr9~oOvQBGb00hqIg36tkY7-~l30jOpNgZBNlexvRARvVId5T1RPH1eZZxextXS3ayxWw7-N52URakRWxyrvTsGIIj7USEfjmlGwAALqLpp-ryOGq-OyvTIrkJEez9g6~HOSHfxKmV~LeEdbu0GVK0Z1ZQUwq~F9vG3EfoEv7OAvN21ic7k-Nk8PUahCJghG8aglCi7LeivqKWEispq8uCRpj345nbI~~XWqiAzICWiPOYk7-Jgt0IJn2mBGw8Crvt0v-oXk6rsg7BVD9NFEMbKm1Q__'
                />
                <h1 className='font-berlin'>TEXEL</h1>
            </div>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/for-schools">For Schools</a></li>
                <li><a href="/mission">Mission</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="contact">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Header;

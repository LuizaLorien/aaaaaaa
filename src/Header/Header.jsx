import star from '../assets/images/icon-star.svg'

const Header = () => {
    return (
        <>
            <div className='star'>
                <img src={star} alt="star" />
            </div>
            <span className='Header'>
                <h1>How did we do?</h1>
            </span>
        </>
    )
}

export default Header;
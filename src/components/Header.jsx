import log from '../assets/img/MD-Logo-300px_0.png';

const Header = () => {

    return (
        <div className="header">
            <div className="menu">
                <div className="mark">
                    <img className='markLogo' alt="logo" src={log} />
                    <a href="javascript():;" >
                        Home
                    </a>
                </div>
                <div className="recycleBin">
                    <div className='userName'>J</div>

                    <div className="dropdown">
                        <button className="dropbtn">Julian Gonzelez &nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-angle-down"></i></button>
                        <div className="dropdown-content">
                            <a href="#"> Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="bin">
                        <a href="#"> <i className="fa fa-archive"></i></a>
                    </div>
                </div>
            </div>
            <div className='search'>
                <div className='transfer'>
                    <button className='transferBtn'>Transfer</button>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Find Event" name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
    )
}
export default Header;

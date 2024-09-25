export default function Header(props) {
    // console.log("Current pagename:", props?.pagename); 

    return (
        <>
            <header>
                <div className="top-area">
                    <div className="header-area">
                        <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                        <i className="fa fa-bars"></i>
                                    </button>
                                    <a className="navbar-brand" href="index.html">carvilla<span></span></a>
                                </div>

                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className="scroll active">
                                            <a href="/home" className={props?.pagename === "home" ? "active" : null}>home</a>
                                        </li>
                                        <li className="scroll active">
                                            <a href="/service" className={props?.pagename === "service" ? "active" : null}>service</a>
                                        </li>
                                        <li className="scroll active">
                                            <a href="/featured_cars" className={props?.pagename === "featured_cars" ? "active" : null}>featured cars</a>
                                        </li>
                                        <li className="scroll active">
                                            <a href="/new_cars" className={props?.pagename === "new_cars" ? "active" : null}>new cars</a>
                                        </li>
                                        <li className="scroll active">
                                            <a href="/brands" className={props?.pagename === "brands" ? "active" : null}>brands</a>
                                        </li>
                                        <li className="scroll active">
                                            <a href="/contact" className={props?.pagename === "contact" ? "active" : null}>contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </header>
        </>
    );
}

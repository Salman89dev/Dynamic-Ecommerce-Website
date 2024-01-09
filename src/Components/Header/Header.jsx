import Logo from "./Logo/Logo"
import MenuArray from "./Navbar/MenuArray"
import Navbars from "./Navbar/Navbar"
import RightMenu from "./RightMenu/RightMenu"

let Header=(props)=>
{
    // console.log(props.count)
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Logo/>
                    </div>
                    <div className="col-md-6">
                    <Navbars/>
                    </div>
                    <div className="col-md-3">
                        <RightMenu countValue={props.countValue}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
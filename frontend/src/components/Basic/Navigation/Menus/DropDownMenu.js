import { Children, cloneElement, isValidElement } from 'react'
import { toggleClass } from '../../../utils';
import './DropDownMenu.css'

///parent element must have position: relative to function
const DropDownMenu =
    ({
        children,
        entry,
        sessionUser,
        iconClassString,
        rotateToShow
    }) => {


        if (!iconClassString) iconClassString = "fas fa-chevron-circle-down";
        if (rotateToShow === undefined) rotateToShow = true;

        let clickFunction

        if (rotateToShow) {
            clickFunction =
                e => {
                    e.stopPropagation()
                    toggleClass(e.target, 'show-menu')
                    toggleClass(e.target.parentElement, 'show-menu')
                    toggleClass(e.target.parentElement.parentElement, 'show-menu')
                    toggleClass(e.target, 'rotate180')
                }
        } else {
            clickFunction =
                e => {
                    e.stopPropagation()
                    toggleClass(e.target, 'show-menu')
                    toggleClass(e.target.parentElement, 'show-menu')
                    toggleClass(e.target.parentElement.parentElement, 'show-menu')
                }
        }


        const childrenWithProps = Children.map(children, child => {
            if (isValidElement(child)) {
                return cloneElement(child, { entry, sessionUser })
            }
            return child;
        })




         return (
            <>{
                 <div className="drop-down-menu" >
                     <div className='hide-menu-check'>
                         {childrenWithProps}
                     </div>
                        <div className="menu-button">
                                <i
                                    className={iconClassString}
                                onClick={e => clickFunction(e)}
                                ></i>
                        </div>

                        <div className="menu-area">
                                {childrenWithProps}
                            </div>
                    </div>
            }
            </>

        )
    }


    export default DropDownMenu

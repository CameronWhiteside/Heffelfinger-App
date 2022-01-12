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

        // if (entry && entry.name) console.log(entry.name)
        // console.log(children[2])

        // for (let child in children){
        //     console.log((children[child].type) )
        //   }




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
        console.log(children)

        const validateChildren = Children.toArray(childrenWithProps).map(child => child.props)
            // .map(child => child.type())

        console.log({validateChildren})


         return (
            <>{
                 <div className="drop-down-menu" >
                     <div className='hideTest'>
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

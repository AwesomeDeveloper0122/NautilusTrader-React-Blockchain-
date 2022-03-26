// ** React Imports
import { useEffect } from 'react'
import { NavLink, useLocation, matchPath, useParams } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { Badge,UncontrolledTooltip  } from 'reactstrap'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

// ** Vertical Menu Array Of Items
import navigation from '@src/navigation/vertical'
import bottomNavigation from '@src/navigation/bottom'

// ** Utils
import { isNavLinkActive, search, getAllParents } from '@layouts/utils'
import { Dashboard } from 'uppy'
import {BlogList} from '../../../../../views/pages/blog/list'
import { useComponent } from '../../../../../utility/hooks/useComponent'
import '@src/assets/scss/style.scss'



const VerticalNavMenuLink = ({
  item,
  groupActive,
  setGroupActive,
  activeItem,
  setActiveItem,
  groupOpen,
  setGroupOpen,
  toggleActiveGroup,
  parentItem,
  routerProps,
  currentActiveItem
}) => {
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? 'a' : NavLink
  const [skin, setSkin] = useSkin()
  const [component, setComponent] = useComponent()
  // const [activeItem, setActiveItem] = useState(null)

  


  // ** URL Vars
  const location = useLocation()
  const currentURL = location.pathname

  // ** To match path
  const match = matchPath(currentURL, {
    path: `${item.navLink}/:param`,
    exact: true,
    strict: false
  })

  // ** Search for current item parents
  const searchParents = (navigation, currentURL) => {
    const parents = search(navigation, currentURL, routerProps) // Search for parent object
    const allParents = getAllParents(parents, 'id') // Parents Object to Parents Array
    return allParents
  }

  // ** URL Vars
  const resetActiveGroup = navLink => {
    const parents = search(navigation, navLink, match)
    toggleActiveGroup(item.id, parents)
  }

  // ** Reset Active & Open Group Arrays
  const resetActiveAndOpenGroups = () => {
    setGroupActive([])
    setGroupOpen([])
  }
  if(activeItem==null) {
    activeItem = "portfolio"
  }
  const layoutStore = useSelector(state => state.layout)
 
  const menuCollapsed = layoutStore.menuCollapsed
  console.log("menuCollapsed",menuCollapsed);
  return (
    
    
    <li
      className={classnames({
        'nav-item': !item.children,
        disabled: item.disabled,
        active: item.id === activeItem,
        'mb-2': item.margin === "mb-2",
        'mb-1' : item.margin === "mb-1"
      })}
    >
      
      
      <LinkTag
        className='d-flex align-items-center'
        target={item.newTab ? '_blank' : undefined}
        title={(menuCollapsed===true ? item.title : "")}
        
        // style={{size:"5px",color:"black"}}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
              href: item.navLink || '/'
            }
          : {
              to: item.navLink || '/',
              isActive: (match, location) => {
                if (!match) {
                  return false
                }

                if (match.url && match.url !== '' && match.url === item.navLink) {
                  currentActiveItem = item.navLink
                }
              }
            })}
        /*eslint-enable */
        onClick={e => {
          e.preventDefault();
       
          switch (item.id) {
         
            case "light":
              setSkin('light')
              //  setActiveItem("light")
              break;
            case "dark":
              setSkin('dark') 
              //  setActiveItem("dark")
              break;
            case "portfolio":
              setComponent("portfolio");
              setActiveItem("portfolio")
                break;
            case "strategy":
              setComponent("strategy");
              setActiveItem("strategy")
                break;
            case "backtest":
              setComponent("backtest");
              setActiveItem("backtest")
                break;
            case "customize":
              setComponent("customize");
              setActiveItem("customize")
                break;
            case "profile":
              setComponent("profile");
              setActiveItem("profile")
                break;
          
            default:
              break;
          }
       
        }}
      >
        {skin === "dark" && item.iconDark}
        {skin === "light" && item.iconLight}
        <span className='ml-2 menu-item text-truncate'>
          <FormattedMessage id={item.title} />
        </span>

        {item.badge && item.badgeText ? (
          <Badge className='ml-auto mr-1' color={item.badge} pill>
            {item.badgeText}
          </Badge>
        ) : null}
      </LinkTag>
    
    </li>
  )
}

export default VerticalNavMenuLink

import settingDark from '@src/assets/images/menu/setting_dark.png'
import settingLight from '@src/assets/images/menu/setting_light.png'
// import { FileText, Circle } from 'react-feather'
import { Settings, Circle,Moon,Sun, Menu, CheckCircle } from 'react-feather'

export default [
    {
        id: 'settings',
        title: 'Settings',
        iconDark: <img src={settingDark} alt="portfolio" />,
        iconLight:<img src={settingLight} alt="portfolio" />,
        // icon: <Settings size={20} />,
        // margin:'mb-1',
        // navLink: '/setting',
        
        children: [
            {
              id: 'themeColor',
              title: 'Theme Color',
              iconDark: <Moon className='ficon' style={{width:20,height:20}} />,
              iconLight: <Sun className='ficon' style={{width:20,height:20}} />,
              children:[
                {
                  id: 'light',
                  title: 'Light Color',
                  iconDark: <Circle size={14}/>,
                  iconLight: <CheckCircle size={14} />,
                  // permissions: ['admin', 'editor'],
                  // navLink: '/pages/login-v2',
                  // newTab: true
                },
                {
                  id: 'dark',
                  title: 'Dark Color',
                  iconDark: <CheckCircle size={14}/>,
                  iconLight: <Circle size={14} />,
                  // permissions: ['admin', 'editor'],
                  // navLink: '/pages/register-v1',
                  // newTab: true
                },
              ]
            //   permissions: ['admin', 'editor'],
            //   navLink: '/pages/blog/list',
           
            },
            {
              id: 'menu',
              title: 'Menu',
              iconDark: <Menu className='ficon' style={{width:20,height:20}} />,
              iconLight: <Menu className='ficon' style={{width:20,height:20}} />,
            
              children: [
                {
                  id: 'menuatrest',
                  title: 'menu at-rest',
                  iconDark: <CheckCircle size={14}/>,
                  iconLight: <Circle size={14} />,
                  // permissions: ['admin', 'editor'],
                  // navLink: '/pages/login-v1',
                  // newTab: true
                  children : [
                    {
                      id: 'hidden',
                      title: 'Hidden',
                      permissions: ['admin', 'editor'],
                      navLink: '/pages/login-v1',
                      newTab: true
                    },
                    {
                      id: 'onlyicon',
                      title: 'Show icons-only',
                      permissions: ['admin', 'editor'],
                      navLink: '/pages/login-v2',
                      newTab: true
                    },
                    {
                      id: 'iconlabel',
                      title: 'Show icons and lables',
                      permissions: ['admin', 'editor'],
                      navLink: '/pages/register-v1',
                      newTab: true
                    },
                  ]
                },
                {
                  id: 'onmouseovermenu',
                  title: 'on mouse-over menu',
                  iconDark: <Circle size={12}/>,
                  iconLight: <Circle size={12} />,
                  // permissions: ['admin', 'editor'],
                  // navLink: '/pages/login-v2',
                  // newTab: true
                },
                {
                  id: 'onleftclickicon',
                  title: 'on left-click icon',
                  iconDark: <Circle size={12}/>,
                  iconLight: <Circle size={12} />,
                  // permissions: ['admin', 'editor'],
                  // navLink: '/pages/register-v1',
                  // newTab: true
                },
                {
                  id: 'onrightclickicon',
                  title: 'on right-click icon',
                  iconDark: <Circle size={12}/>,
                  iconLight: <Circle size={12} />,
                  // permissions: ['admin', 'editor'],
                  // navLink: '/pages/register-v1',
                  // newTab: true
                },
              ]
            },
            // {
            //   id: 'blogEdit',
            //   title: 'Edit',
            //   icon: <Circle size={12} />,
            //   permissions: ['admin', 'editor'],
            //   navLink: '/pages/blog/edit'
            // }
          ]
        
    },
    
]
import profileDark from '@src/assets/images/menu/profile_dark.png'
import profileLight from '@src/assets/images/menu/profile_light.png'


export default [
    {
        id: 'profile',
        title: 'Profile',
        iconDark: <img src={profileDark} alt="portfolio" />,
        iconLight:<img src={profileLight} alt="portfolio" />,
        margin:'mb-1',
        navLink: '/profile'
    }
]
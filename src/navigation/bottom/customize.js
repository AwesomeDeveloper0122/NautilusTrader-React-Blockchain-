import customizeDark from '@src/assets/images/menu/customize_dark.png'
import customizeLight from '@src/assets/images/menu/customize_light.png'

export default [
    {
        id: 'customize',
        title: 'Customize',
        iconDark: <img src={customizeDark} alt="portfolio" />,
        iconLight:<img src={customizeLight} alt="portfolio" />,
        margin:'mb-1',
        navLink: '/customize'
    }
]
import portfolioDark from '@src/assets/images/menu/portfolio_dark.png'
import portfolioLight from '@src/assets/images/menu/portfolio_light.png'


export default [
    {
        id: 'portfolio',
        title: 'Portfolio',
        iconDark: <img src={portfolioDark} alt="portfolio" />,
        iconLight:<img src={portfolioLight} alt="portfolio" />,
        margin:'mb-2',
        navLink: '/dashboard'
    }
]
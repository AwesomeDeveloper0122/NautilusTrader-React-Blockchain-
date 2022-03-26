import strategyDark from '@src/assets/images/menu/strategy_dark.png'
import strategyLight from '@src/assets/images/menu/strategy_light.png'

export default [
    {
        id: 'strategy',
        title: 'Strategy',
        iconDark: <img src={strategyDark} alt="portfolio" />,
        iconLight:<img src={strategyLight} alt="portfolio" />,
        margin:'mb-2',
        navLink: '/pages/blog/list'
    }
]
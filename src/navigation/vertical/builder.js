import builderDark from '@src/assets/images/menu/builder_dark.png'
import builderLight from '@src/assets/images/menu/builder_light.png'

export default [
    {
        id: 'backtest',
        title: 'BackTest',
        iconDark: <img src={builderDark} alt="portfolio" />,
        iconLight:<img src={builderLight} alt="portfolio" />,
        margin:'mb-2',
        navLink: '/backtest'
    }
]
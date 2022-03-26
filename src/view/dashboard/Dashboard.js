import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { useSkin } from '@hooks/useSkin'
import { ArrowDownRight } from 'react-feather'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { handleLogin } from '@store/actions/auth'
import { DashboardComponent } from './Portfolio'

import {Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'
import { useComponent } from '../../utility/hooks/useComponent'
import BlogList from '../../views/pages/blog/list'
import Portfolio from './Portfolio'

const Dashboard = () => {   
    const dispatch = useDispatch()
    // useEffect(() => {
    //         useJwt
    //             .login({email:"admin@demo.com", password:"admin"})
    //             .then(res => {
    //               const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
    //               dispatch(handleLogin(data))
    //               ability.update(res.data.userData.ability)
    //               history.push(getHomeRouteForLoggedInUser(data.role))
    //               toast.success(
    //                 <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
    //                 { transition: Slide, hideProgressBar: true, autoClose: 2000 }
    //               )
    //             })
    //             .catch(err => console.log(err))
    //     }, [])
    const [skin, setSkin] = useSkin()
    const [component, setComponent] = useComponent()
    switch (component) {
        case "portfolio":
            return <Portfolio />
           
        case "strategy":
            return <BlogList />
           
        case "backTest":
            
            break;
    
        default:
            return <Portfolio />
    }
    
    return (
      
        <div >
             
            <Row className="text-center align-items-center " >
                <Col className= " card pt-2 pb-2 pl-3  align-items-start" style={{borderRadius:0}}>
                    <Row>
                        <Col className="text-right pr-0">
                            <h1 className={skin === "light" ? 'text-black' : ''}>37863.93</h1>
                        </Col>
                        <Col className="text-left pl-0">
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color='flat-secondary' caret>
                                    USD
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href='/' tag='a'>USD</DropdownItem>
                                    <DropdownItem href='/' tag='a'>BTC</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </Col>
                    </Row>
                    <h3>Totao Fiat Balance</h3>
                </Col>
                <Col className= "card pt-2 pb-2 align-items-start" style={{borderRadius:0}} >
                    <Row className="text-left">
                        <Col className="text-right pr-0">
                            <h1 className={skin === "light" ? 'text-black' : ''}>37863.93</h1>
                        </Col>
                        <Col className="text-left pl-0">
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color='flat-secondary' caret>
                                    USD
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href='/' tag='a'>USD</DropdownItem>
                                    <DropdownItem href='/' tag='a'>BTC</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </Col>
                    </Row>
                    <h3 className="text-left">Totao Crypto Balance</h3>
                </Col>
                <Col className= "card pt-2 pb-2 align-items-start" style={{borderRadius:0}}>
                    <Row className="text-left align-items-center">
                        <Col className="text-right pr-0">
                            <h1 className={'text-danger'}>-1.723%</h1>
                        </Col>
                        <Col className="text-left pl-0 align-items-center">
                            <span>
                                <ArrowDownRight className="text-danger" size={20} />
                            </span>
                        </Col>
                    </Row>
                    <h3 className="text-left">24H Progress</h3>
                </Col>
                <Col className= "card pt-2 pb-2 align-items-start" style={{borderRadius:0}}>
                    <Row className="text-left align-items-center">
                        <Col className="text-right pr-0">
                            <h1 className={'text-danger'}>-10.009%</h1>
                        </Col>
                        <Col className="text-left pl-0 align-items-center">
                            <span>
                                <ArrowDownRight className="text-danger" size={20} />
                            </span>
                        </Col>
                    </Row>
                    <h3 className="text-left">24H Progress</h3>
                </Col>
            </Row>
            <div>
                
            </div>
        </div>
    
    )
}

export default Dashboard

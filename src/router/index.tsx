import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/home/index'
import NoFoundPage from '../views/404'
import Layout from "../views/layout/index";
import Table from '../views/table'
import Form from '../views/form'
import EchartsBar from '../views/echarts/bar/bar'
import EchartsPie from '../views/echarts/pie/pie'
import OrderDetails from '../views/table/details'
import Todos from '../views/todos'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/order/detail/:id' component={OrderDetails} />
                <Route path='/' render={() =>
                    <Layout>
                        <Switch>
                            <Route exact path='/index'>
                                <Home />
                            </Route>
                            <Route path='/table'>
                                <Table />
                            </Route>
                            <Route path="/todos">
                                <Todos />
                            </Route>
                            <Route path='/form' component={Form} />
                            <Route path='/echarts/bar' component={EchartsBar} />
                            <Route path='/echarts/pie' component={EchartsPie} />
                            <Route component={NoFoundPage} />
                        </Switch>
                    </Layout>
                } />
                <Route component={NoFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
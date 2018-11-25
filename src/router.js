import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// 页面
import Admin from './admin'
import User from 'pages/user'
import Detail from 'pages/user/detail'
import Hongbao from 'pages/contents/hongbao'
import Message from 'pages/contents/message'
import Orders from 'pages/orders'
import Record from 'pages/withdraw/record'
import Pending from 'pages/withdraw/pending'
import Exception from 'pages/withdraw/exception'
import Report from 'pages/report'
import Notice from 'pages/notice'
import NoMatch from 'pages/nomatch'

const Router = props => (
  <Admin>
    <Switch>
      {true ? <Redirect exact from="/" to="/user" /> : <Redirect to="/login" />}
      <Route exact path="/user" component={User} />
      <Route path="/user/:userid" component={Detail} />
      <Route exact path="/contents/hongbao" component={Hongbao} />
      <Route exact path="/contents/message" component={Message} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/withdraw/record" component={Record} />
      <Route exact path="/withdraw/pending" component={Pending} />
      <Route exact path="/withdraw/exception" component={Exception} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/notice" component={Notice} />
      <Route component={NoMatch} />
    </Switch>
  </Admin>
)

export default Router
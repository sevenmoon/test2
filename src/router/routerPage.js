import React from 'react'  
import PageIndex from '../page';
import '../page/config/globalConfig'

import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Tabble from '../page/tabble/tabbleIndex';
import LabelIndex from '../page/tabPane/labelIndex';
import FormIndex from '../page/form/formIndex';
import CarouselIndex from '../page/carousel/carouselIndex';
import ShopIndex from '../page/shop/shopIndex';


export default class RouterPage extends React.Component{
    render(){
        return (
<Router history={this.props.history}>
  <div>
      <Route   path="/" component={PageIndex}/>

<Route path="/tabble" component={Tabble}/>

<Route path="/label" component={LabelIndex}/>
<Route path='/form' component={FormIndex}/>
<Route path='/carousel' component={CarouselIndex}/>
<Route path='/shop_home' component={ShopIndex}/>

    
  </div>
      
</Router>
         );
    }
}
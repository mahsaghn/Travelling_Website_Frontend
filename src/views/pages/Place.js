import React from 'react';
import Place_nav from '../components/Place/Tabs/Place_nav'
import Slides from '../components/Place/slides';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as placeAction  from '../../core/place/place_action';
import {connect} from 'react-redux'

class Place extends React.Component {
  constructor(props) {
    super(props);
  }
  
  async componentWillMount(){
    console.log("in handel submit place")
    var idplace = window.location.pathname.split('/')[2]
    console.log(idplace)
    await this.props.place(idplace)
    console.log("slides are:",this.props.slidesinfo)
    console.log("infos are:",this.props.info)
  }

  render() {
    console.log("in place")
    console.log(this.props.info)
    return (
      <div id="mystyle">
        { this.props.slides ? <Slides/> : null}
        { this.props.info ? <Place_nav/> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    
  return{
    placeLeaded : state.place_reducer.place_info,
    slides : state.place_reducer.slide_info,
    info : state.place_reducer.place_info
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      place : (place_id) => dispatch(placeAction.place(place_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Place);



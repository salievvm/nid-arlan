import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import DarkTheme from './style.json';
import Icon from '@material-ui/core/Icon';
 
const AnyReactComponent = ({ text }) => <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-beetween', marginTop: '-3%', padding: '5px', width: '200px', color: "#fff", borderRadius: '15px', backgroundColor: '#202020'}}><Icon>location_on</Icon>{text}</div>;
const KEY = 'AIzaSyCwruVB_398D9nDVL_Rqoec5epnhikfsOg';
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.260327,
      lng: 76.938604
    },
    zoom: 15, 
    style: DarkTheme
  };

  state = {
    isMounted: false 
  }

  componentDidMount = () => {
    const isMounted = true;
    this.setState({isMounted});
  }
 
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
          {this.state.isMounted ? <AnyReactComponent
            lat={43.260327}
            lng={76.938604}
            text="г. Алматы, ул. Желтоксан, дом 71/73, кв. 56"
          /> : false}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;
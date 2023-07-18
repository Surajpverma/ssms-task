import GoogleMapReact from 'google-map-react';

const Map = () => {
    const defaultProps = {
        center: {
          lat: 28.36350,
          lng: 75.58705
        },
        zoom: 18
      };
  return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFxQyrh2y2oLqUEKBNqq4pQgfxWXuR-qY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
  )
}

export default Map
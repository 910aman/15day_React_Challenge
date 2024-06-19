import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const center =    {
    lat: 23.042050716132717,
    lng: 72.67865422879068
};

const points = [
    {
        lat: 23.05796421529968,
        lng: 72.68740194352155
    },
    {
        lat: 23.042050716132717,
        lng: 72.67865422879068
    },
    {
        lat: 23.05584233670713, 
        lng: 72.67108968990811
    },
    {
        lat:23.0640436282628, 
        lng: 72.67748477880973
    }

]

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDfdrcRnS1bXNAZX6aRR_QZyBBVkcy5US0"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                streetViewControl: false,
                mapTypeControl: false
            }}
        >
            {points.map((point, i) => (

                <MarkerF position={point} key={i}>
                </MarkerF>
            ))}

        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)
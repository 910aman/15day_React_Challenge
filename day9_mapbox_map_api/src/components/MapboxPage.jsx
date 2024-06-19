import 'mapbox-gl/dist/mapbox-gl.css';
import React, { } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const GoogleMap = () => {

    // const token = "pk.eyJ1IjoibWlsYW45MTAiLCJhIjoiY2x4MWZxbTgxMGJtODJpcXB2ajg5M21kciJ9.oir0o1xC8GhXsDSjfpA3_A";

    const Map = ReactMapboxGl({
        style: 'https://api.mapbox.com/styles/v1/milan910/clx1mj6vr01lm01pn6ul50kp4/wmts?access_token=pk.eyJ1IjoibWlsYW45MTAiLCJhIjoiY2x4MWZxbTgxMGJtODJpcXB2ajg5M21kciJ9.oir0o1xC8GhXsDSjfpA3_A',
        projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
        zoom: 0,
        center: [-74.5, 40],
        accessToken: 'pk.eyJ1IjoibWlsYW45MTAiLCJhIjoiY2x4MWZxbTgxMGJtODJpcXB2ajg5M21kciJ9.oir0o1xC8GhXsDSjfpA3_A'
    });

    return (

        <Map containerStyle={{
            height: '100vh',
            width: '100vw',
        }}>
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.13235092163085938, 51.518250335096376]} />
            </Layer>
        </Map>

        // in render()
        // <div>
        //     <ReactMapboxGl
        //         {...viewPort}
        //         mapboxAccessToken={token}
        //         width="100%"
        //         height="100%"
        //         transitionDuration="300"
        //         onViewportChange={viewPort => {
        //             setViewPort(viewPort)
        //         }}
        //         style="mapbox://styles/mapbox/streets-v9">
        //     </ReactMapboxGl>
        //  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.502241102474!2d72.67608131135245!3d23.04204157907313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87177278bbe1%3A0xa60363305159da02!2sStroke%20Infotech%20-%20MERN%20%26%20MEAN%20Stack%20Development%20Company!5e0!3m2!1sen!2sin!4v1717564579811!5m2!1sen!2sin" style={{width:"600", height:"450", style:"border:0", allowfullscreen:"true", loading:"lazy"}} referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        // </div>
    )
}

export default GoogleMap
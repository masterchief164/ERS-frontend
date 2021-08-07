import React, {useState} from "react";
import "./Map.scss"
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {GoogleMap, InfoWindow, LoadScript, Marker} from "@react-google-maps/api";

const locations = [
    {
        name: "IIITDM Jabalpur",
        location: {
            lat: 23.1768539,
            lng: 80.0245566
        },
        address: "Airport Rd, PDPM IIITDM Jabalpur Campus, Khamaria, Jabalpur, Madhya Pradesh 482005"
    }
]
const mapStyles = {
    margin: "7vh 0",
    height: "65vh",
    width: "100%"
};

const defaultCenter = {
    lat: 23.1768539,
    lng: 80.0245566
}

const Map = () => {
    const [selected, setSelected] = useState({});
    const onSelect = item => {
        setSelected(item);
    }
    return (
        <div className="container">
            <div className="row ">
                <h2 className="map-h2">Come Visit Us At Our Campus</h2>
                <div className="map col-lg-6">
                    <LoadScript
                        googleMapsApiKey='AIzaSyDuyD9nq6tzG9O5FHwGBSbp9vjQ0I11OlA'>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={18}
                            center={defaultCenter}
                        >
                            {
                                locations.map(item => {
                                    return (
                                        <Marker key={item.name}
                                                position={item.location}
                                                onClick={() => onSelect(item)}
                                        />
                                    )
                                })
                            }
                            {
                                selected.location &&
                                (
                                    <InfoWindow
                                        position={selected.location}
                                        clickable={true}
                                        onCloseClick={() => setSelected({})}
                                    >
                                        <div className='container'>
                                            <h3>{selected.name}</h3>
                                            <p>{selected.address}</p>
                                        </div>
                                    </InfoWindow>
                                )
                            }
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="col-lg-6 info">
                    <p><a href={`tel:+918529458915`}><PhoneIcon/> Contact Us:  8529458915</a></p>
                    <p><a href={`mailto:ers@iiitdmj.ac.in`}><EmailIcon/> Email Id : ers@iiitdmj.ac.in</a></p>
                </div>
            </div>
        </div>
    );
}

export default Map;
"use client"
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function GoogleMap() {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!!}>
            <div className="w-full">
                <Map
                    defaultCenter={{lat: 49.2606, lng: -123.2460}}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
                >
                    <AdvancedMarker position={{lat: 49.2606, lng: -123.2460}}>
                    </AdvancedMarker>
                    <AdvancedMarker position={{lat: 48.2606, lng: -123.2460}}>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
}
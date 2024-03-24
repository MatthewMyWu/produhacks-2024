"use client"
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function GoogleMap({ suppliers }: { suppliers: any[] }) {
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
                    {
                        suppliers.map((supplier: any, i: number) => (
                            <AdvancedMarker key={i} position={supplier.coordinates} />
                        ))
                    }
                </Map>
            </div>
        </APIProvider>
    );
}
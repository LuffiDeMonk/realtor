'use client'

import React from 'react'
import "leaflet/dist/leaflet.css";
import { Maps } from './Custom';


export default function CustomMap({ lat, lng }: { lat: number, lng: number }) {
    return (
        <Maps.MapContainer center={[lat, lng]} zoom={6} scrollWheelZoom={false} className='h-80'>
            <Maps.TileLayer
                attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Maps.Marker position={[lat, lng]}>
                <Maps.Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Maps.Popup>
            </Maps.Marker>
        </Maps.MapContainer>
    )
}

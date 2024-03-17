import React from 'react'
import MQTTSubscriber from "@/app/components/MQTTSubscriber";

const Hero = () => {
    return (
        <div className="hero min-h-screen"
             style={{backgroundImage: 'url(https://www.javeriana.edu.co/recursosdb/659410/668610/deparatamentos-e-institutos.jpg/39709ee8-a370-7ea2-4880-fb9d9f6e2c3d?t=1684251553829)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex flex-col max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">MQTT</h1>
                    <div>
                        <MQTTSubscriber/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
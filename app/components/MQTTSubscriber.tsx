'use client';
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const broker = "ws://broker.emqx.io:8083/mqtt";
const topic = 'python/mqtt';

const MQTTSubscriber = () => {
    const [latestMessage, setLatestMessage] = useState('');

    useEffect(() => {
        const client = mqtt.connect(broker);

        client.on('connect', () => {
            console.log('Connected to MQTT broker');
            client.subscribe(topic);
        });

        client.on('message', (topic, message) => {
            console.log(`Received message on topic '${topic}': ${message.toString()}`);
            setLatestMessage(message.toString());
        });

        return () => {
            client.end();
        };
    }, [broker, topic]);

    return (
        <div>
            Latest message: {latestMessage}
        </div>
    );
};

export default MQTTSubscriber;

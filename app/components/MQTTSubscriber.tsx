'use client';
import React, {useState, useEffect} from 'react';
import mqtt from 'mqtt';

const broker = "ws://broker.emqx.io:8083/mqtt";

const MQTTSubscriber = () => {

    const [latestMessage, setLatestMessage] = useState('');
    const [topic, setTopic] = useState('musica');

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

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        if(formData.get('topic')) {
            setTopic(formData.get('topic').toString());
        }
        else{
            console.log("No topic provided")
        }
    }

    return (
        <>
            <div className="card bg-base-200 shadow-xl max-w-xl h-2/3">
                <div className="card-body flex">
                    <h2 className="mt-6 card-title justify-center"> Subscribed to: {topic}</h2>
                    <p className={"mt-6 justify-center"}>Latest message: {latestMessage}</p>

                    <div className="mt-6 flex max-w-lg gap-x-4">
                        <form method={"post"} onSubmit={handleSubmit}>
                            <input
                                id="topic"
                                type={"text"}
                                name={"topic"}
                                className="w-100 rounded-md border-0 bg-accent/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent-100 sm:text-sm sm:leading-6"
                                placeholder="Subscribe to a different topic"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-accent-content px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MQTTSubscriber;

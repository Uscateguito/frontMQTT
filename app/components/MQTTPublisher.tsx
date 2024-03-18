'use client';
import React, {useState, useEffect} from 'react';
import mqtt from 'mqtt';

const broker = "ws://broker.emqx.io:8083/mqtt";

const MQTTPublisher = () => {

    const [client, setClient] = useState(null)
    const [latestMessage, setLatestMessage] = useState('');
    const [topic, setTopic] = useState('musica');
    const [connectStatus, setConnectStatus] = useState('Connect')


    useEffect(() => {
        const client = mqtt.connect(broker);

        client.on('connect', () => {
            console.log('Connected to MQTT broker');
        });

        return () => {
            client.end();
        };
    }, [broker, topic]);

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        const client = mqtt.connect(broker);

        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        if(formData.get('topic')) {
            console.log(formData.get('topic').toString());
            setTopic(formData.get('topic').toString());
        }
        else{
            console.log("No topic provided")
        }

        if(formData.get('msg')) {
            client.publish(topic, formData.get('msg').toString());
        }
        else{
            console.log("No msg provided")
        }

    }

    return (
        <>
            <div className="card bg-base-200 shadow-xl max-w-xl">
                <div className="card-body flex flex-col">
                    <h2 className="mt-6 card-title justify-center"> Publish in: {topic}</h2>

                    <div className="mt-6 flex max-w-lg">
                        <form method={"post"} onSubmit={handleSubmit}>
                            <input
                                id="topic"
                                type={"text"}
                                name={"topic"}
                                className="justify-center w-100 rounded-md border-0 bg-accent/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent-100 sm:text-sm sm:leading-6"
                                placeholder="Publish in a different topic"
                            />
                            <input
                                id="msg"
                                type={"text"}
                                name={"msg"}
                                className="mt-6 justify-center w-100 rounded-md border-0 bg-accent/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent-100 sm:text-sm sm:leading-6"
                                placeholder="Send a message"
                            />
                            <button
                                type="submit"
                                className="mt-6 flex-none rounded-md bg-accent-content px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                Send
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MQTTPublisher;

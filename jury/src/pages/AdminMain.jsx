import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import Event from "../components/AdminMain/Event";
import "../components/AdminMain/AdminMain.css";
import Navbar from "../components/navbar/Navbar";

class AdminMain extends React.Component {

    
    state = {
        events: []
    }

    componentDidMount() {
        for (let index = 1; index < 5; index++) {
            axios.get('http://aleksbcg.beget.tech/events/', {
            }).then(response => {
                    // this.setState({ events: [ ...this.state.events, response.data.posts[index]] })         
            }).catch(function (error) {
                console.log(error);
            });
        }
        }
    render() {
        return (
                    <>
            <section className="AdminMain">
                <h1>Мероприятия</h1>
                <div className="AdminMain__EventPull">
                    {this.state.events.map((event) =>
                        <Event event={event} key={event.id} />
                    )}
                </div>
                <div className="AdminMain__buttons">
                    <button>Жюри</button>
                    <button>Мероприятие</button>
                </div>
            </section>
        </>
        )   
    }
}

export default AdminMain
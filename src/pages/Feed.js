import React, { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Deyvison Penha</span>
                            <span className="place">Belém do Pará</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://cdn.pixabay.com/photo/2015/06/25/17/56/people-821624_960_720.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Uma foto do AP
                            <span>#apartamento</span>
                            <span>#meuap</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Deyvison Penha</span>
                            <span className="place">Belém do Pará</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_960_720.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Uma foto do AP
                            <span>#apartamento</span>
                            <span>#meuap</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;
import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
    return (
        <section id="header">
            <div className="container">
                {/* Logo */}
                <h1 id="logo">
                    <a href="index.html">E.D. Brockett's Blog</a>
                </h1>
                <p>Explore several topics from fiction to game reviews.</p>

                {/* Nav */}
                <nav id="nav">
                    <ul>
                        <li>
                            <a className="icon solid fa-home" href="/">
                                <span>Introduction</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="icon fa-chart-bar">
                                <span>Dropdown</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="/">Lorem ipsum dolor</a>
                                </li>
                                <li>
                                    <a href="/">Magna phasellus</a>
                                </li>
                                <li>
                                    <a href="/">Etiam dolore nisl</a>
                                </li>
                                <li>
                                    <a href="/">Phasellus consequat</a>
                                    <ul>
                                        <li>
                                            <a href="/">Magna phasellus</a>
                                        </li>
                                        <li>
                                            <a href="/">Etiam dolore nisl</a>
                                        </li>
                                        <li>
                                            <a href="/">Phasellus consequat</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">Veroeros feugiat</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                className="icon solid fa-cog"
                                href="left-sidebar.html"
                            >
                                <span>Left Sidebar</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="icon solid fa-retweet"
                                href="right-sidebar.html"
                            >
                                <span>Right Sidebar</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="icon solid fa-sitemap"
                                href="no-sidebar.html"
                            >
                                <span>No Sidebar</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Navbar;

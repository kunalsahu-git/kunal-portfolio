import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
        <NavBar />
        <div className="header flex light-bg">
            <div className="header-content">
                <button className="expertise-tag">Full Stack Developer</button>
                <h1 className="white">Empowering digital experiences.</h1>
                <h1 className="white">From idea to execution.</h1>
                <p className="gray">I specialize in creating scalable, efficient, and engaging applications using <strong>React</strong>, <strong>Drupal</strong>, and other cutting-edge technologies.</p>
                <ul className="expertise-list">
                    <li><span className="green">React.js</span><p className="white">for interactive UIs</p></li>
                    <li><span className="green">Drupal</span><p className="white"> for robust content management</p></li>
                    <li><p className="white">Other tools for seamless integration and optimization</p></li>
                </ul>
                <a className="contact-link green" href="mailto:kunalsahumail@gmail.com">Let&#39;s Collaborate!</a>
            </div>
            <div className="header-image">
                <Image src="/images/kunal-profile.png" width={463} height={513} alt="Kunal - Full Stack Developer" />
            </div>
        </div>
    </header>
    )
}
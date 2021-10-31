import "./Banner.scss";
import Button from "../Button/Button"
import { useEffect, useState } from "react";
import client from "../../client";

const bannerId = "7wnZLuOiH9PBkHfeea2cff";

function Banner() {

    const [heading, setHeading] = useState("Hello! 👋 My name is Elizabeth.")
    const [salutation, setSalutation] = useState("Hiya")
    const [about, setAbout] = useState("I'm Here!")

    useEffect(()=>
    client.getEntry(bannerId)
    .then(entry => {
        setHeading(entry.fields.heading)
        setSalutation(entry.fields.salutation)
        setAbout(entry.fields.about)
    })
    .catch((error) => console.log(error))
    , []);

    return (
        <section className="wrapper">
            <p className="salutation">{salutation}</p>
            <h1 className="heading">{heading} <br />
            {about}
            </h1>
            <Button link="#contact">About Me</Button>
        </section>
    );
}


export default Banner;
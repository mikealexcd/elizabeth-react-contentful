import styles from "./Navbar.module.scss";
import client from "../../client";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png"

const navBarId = "2lPS31HYiA5aNAil9ZZIM";

function Navbar() {

    const [logo, setLogo] = useState(Logo);

    useEffect(()=>
    client.getEntry(navBarId)
    .then(entry => {
        setLogo(entry.fields.logo.fields.file.url)
    })
    .catch((error) => console.log(error))
    , [])

return (
    <header className={styles.navigation}>
        <div className={styles.navbar}>
            <img src={logo} alt="Elizabeth Logo" />
            <div className={styles.navigation_links}>
                <Links />
            </div>
        </div>
    </header>
);   
}


function Links() {
    const [navElement, setNavElement] = useState([]);

    function addNavElement(_oldArray, newNavElement) {
        setNavElement((_oldArray) => [..._oldArray, newNavElement]);
      }

    useEffect(()=>
    client.getEntry(navBarId)
    .then(entry => entry.fields.links.map(link => addNavElement(navElement, link.fields)))
    .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

    const linkList = navElement.map((element) => 
    <a className={styles.navlink} href={element.link} key={element.link}>{element.text}</a>
    );

    return linkList;
}

export default Navbar;
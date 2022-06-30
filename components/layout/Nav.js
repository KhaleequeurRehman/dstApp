import Link from "next/link";
import { useEffect, useState } from "react";
import  { useRouter } from "next/router";

//Styles
import styles from "../../styles/Nav.module.css"
import Hamburger from "./Hamburger";

function Nav() {
	const router = useRouter();
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [hamburgerDisplay, setHamburgerDisplay] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);

		if (!hamburgerOpen) {
			setHamburgerDisplay(true);
		}
	}

	const menuTransition = () => {
		if (!hamburgerOpen) {
			setHamburgerDisplay(false);
		}
	}

	useEffect(() => {
		router.events.on("routeChangeComplete", () => {
			console.log("route change routeChangeComplete");
			setHamburgerOpen(false)
		  });
	}, [router.events])

  return (
	  <>
	  	<div className="navigation" onTransitionEnd={menuTransition}>
			<nav className={styles.nav}>
				<Link href="/">home</Link>
				<Link href="/about">about</Link>
				<Link href="/courses">courses</Link>
				<Link href="/insights">insights</Link>
				<Link href="/login">signin</Link>
				<Link href="/signup">signup</Link>
				{/* <Link href="/adminpanel">dashboard</Link> */}
			</nav>
		</div>
		<div className="hamburger" onClick={toggleHamburger}>
			<Hamburger isOpen={hamburgerOpen}/>	
		</div>
		<style jsx>{`
                .hamburger{
                    display: none;
                    z-index: 6;
                } 
                @media (max-width: 768px){
                  
                    .hamburger{
                        display:contents;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }
                
                   
                    .navigation {
                        opacity: ${hamburgerOpen ? '100' : '0'};
						display: ${hamburgerDisplay ? 'grid' : 'none'};
						justify-items: center;
						align-items: center;
                        background-color: white;
                        height: 100vh;
                        width: 100vw;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
                        position: fixed;
						z-index: 1;
						transition: 0.3s;
                    }
                }
                
               
                
            `}</style>
	  </>
	)
	
}

export default Nav;

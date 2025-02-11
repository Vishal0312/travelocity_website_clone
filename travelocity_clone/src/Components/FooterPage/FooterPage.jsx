import styles from "./FooterPage.module.css";
import React from 'react';
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <div className={styles.Footer_container}>
            <div className={styles.footer}>
                <div className={styles.Footer_flex}>
                    <div>
                        <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" />
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Company</h3>
                            <li><Link to="#"> About</Link></li>
                            <li><Link to="#"> Jobs</Link></li>
                            <li><Link to="#"> List your property</Link></li>
                            <li><Link to="#"> Partnerships</Link></li>
                            <li><Link to="#"> Newsroom</Link></li>
                            <li><Link to="#"> Investor Relations</Link></li>
                            <li><Link to="#"> Roaming Gnome Store</Link></li>
                            <li><Link to="#"> Advertising</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Explore</h3>
                            <li><Link to="#">Hotels in United States</Link></li>
                            <li><Link to="#">Vacation Rentals in United States</Link></li>
                            <li><Link to="#">Vacation Packages in United States</Link></li>
                            <li><Link to="#">Domestic Flights</Link></li>
                            <li><Link to="#">Car Rentals in United States</Link></li>
                            <li><Link to="#">Travelocity Reviews</Link></li>
                            <li><Link to="#">Travelocity Coupons</Link></li>
                            <li><Link to="#">Unique Places to Stay</Link></li>
                            <li><Link to="#">Travel Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Policies</h3>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Vrbo terms and conditions</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Do not sell my personal information</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Help</h3>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Cancel your hotel or vacation rental booking</Link></li>
                            <li><Link to="#">Cancel your flight</Link></li>
                            <li><Link to="#">Refund timelines, policies & processes</Link></li>
                            <li><Link to="#">Use a Travelocity coupon</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className={styles.footerHr} />
                <div className={styles.license}>
                    <p>© 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.</p>
                    <p>Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
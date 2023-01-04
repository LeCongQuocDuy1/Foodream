import classNames from 'classnames/bind';
import styles from '../Footer/Footer.module.scss';
import images from '../../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-header')}>
                    <div className={cx('grid wide')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-3 m-3 c-6')}>
                                <h3 className={cx('footer-header__title')}>CUSTOMER SERVICE</h3>
                                <ul className={cx('footer-header__lists')}>
                                    <li>
                                        <a href="#">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="#">Shopping Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('col l-4 m-3 c-6')}>
                                <h3 className={cx('footer-header__title')}>ABOUT US</h3>
                                <ul className={cx('footer-header__lists')}>
                                    <li>
                                        <a href="#">About FoodHub - Thực Phẩm Sơ Chế Theo Yêu Cầu</a>
                                    </li>
                                    <li>
                                        <a href="#">Payment Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Policy Terms</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('col l-2 m-2 c-6')}>
                                <h3 className={cx('footer-header__title')}>FOLLOW US</h3>
                                <ul className={cx('footer-header__socials')}>
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon
                                                className={cx('footer-header__socials-icon')}
                                                icon={faFacebook}
                                            />
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon
                                                className={cx('footer-header__socials-icon')}
                                                icon={faYoutube}
                                            />
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('col l-3 m-4 c-6')}>
                                <h3 className={cx('footer-header__title')}>
                                    GO TO THE APP STORE FOODHUB - THỰC PHẨM SƠ CHẾ THEO YÊU CẦU
                                </h3>
                                <div className={cx('footer-header__qr')}>
                                    <a href="#">
                                        <img src={images.qrcode} alt="QR code" />
                                        <div className={cx('footer-header__qr-gr')}>
                                            <img src={images.appstore} alt="App Store" />
                                            <img src={images.ggplay} alt="Google Play" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <div className={cx("footer-container")}>
                        <div className="grid wide">
                            <ul className={cx("footer-bottom__menus")}>
                                <li><a href="#">PRIVACY POLICY</a></li>
                                <li><a href="#">OPERATING REGULATIONS</a></li>
                                <li><a href="#">RETURN & REFUND</a></li>
                                <li><a href="#">SITEMAP</a></li>
                            </ul>
                            <p className={cx("footer-bottom__infomations")}>
                                © 2021. Công ty cổ phần FoodHub Vietnam. GPDKKD: 0107709060 do sở KH & ĐT TP Hà Nội cấp ngày 18/01/2017. 
                                Địa chỉ: Số 29, ngõ 66, ngách 66/36, đường Hồ Tùng Mậu, tổ 20, Phường Mai Dịch, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.
                                Cửa hàng: 224 Nguyễn Huy Tưởng, quận Thanh Xuân, Thành phố Hà Nội.
                                Điện thoại: 0888.30.15.18.
                                Email: contact@foodhub.vn.
                            </p>
                            <a href="#"><img src="https://img.abaha.vn/photos/resized/x/28-1618376329-foodhub.png" alt="Chung nhan" className={cx("footer-bottom__img")} /></a>
                            <p className={cx("footer-bottom__infomations")}>
                                ♥ Powered by <a href="#">FoodHub</a> - Platform to provide clean food at home
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import images from '../../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faArrowDown,
    faBell,
    faPhone,
    faPhoneAlt,
    faQuestionCircle,
    faSearch,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-top')}>
                <div className="grid wide">
                    <div className={cx('header-top__container')}>
                        <div className={cx('header-top__left')}>
                            <div className={cx('row')}>
                                <div className={cx('gotoapp')}>
                                    <p>Download App FoodHub - Thực phẩm sơ chế theo yêu cầu</p>
                                    <div className={cx('header-top__qr')}>
                                        <a href="http://share.abphotos.link/ywoy">
                                            <img
                                                src={images.qrcode}
                                                alt="QR code"
                                                className={cx('header-top__qr-img')}
                                            />
                                            <div className={cx('header-top__qr-stores')}>
                                                <img
                                                    className={cx('header-top__qr-store')}
                                                    src={images.appstore}
                                                    alt="App Store"
                                                />
                                                <img
                                                    className={cx('header-top__qr-store')}
                                                    src={images.ggplay}
                                                    alt="Google Play"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('phone')}>
                                    <FontAwesomeIcon className={cx('phone-icon')} icon={faPhone} />
                                    <a href="tel:0865350416">0865350416</a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('header-top__right')}>
                            <div className={cx('row')}>
                                <div className={cx('notifi')}>
                                    <FontAwesomeIcon className={cx('notifi-icon')} icon={faBell} />
                                    <a href="#">News</a>
                                    <div className={cx("header-top__notinews")}>
                                        <div className={cx("header-top__notinews-header")}>
                                            <span>Latest News</span>
                                        </div>
                                        <div className={cx("header-top__notinews-body")}>
                                            <a href="#">
                                                <div className={cx("item")}>
                                                    <img src={images.news1} alt="" />
                                                    <div className={cx("item-content")}>
                                                        <h3>Đổi Vị Mâm Cỗ Ngày Tết Với 8 Món Ngon Lạ Miệng, Hấp Dẫn</h3>
                                                        <p>Tết Nguyên Đán là ngày lễ truyền thống của Việt Nam</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className={cx("item")}>
                                                    <img src={images.news2} alt="" />
                                                    <div className={cx("item-content")}>
                                                        <h3>Đổi Vị Mâm Cỗ Ngày Tết Với 8 Món Ngon Lạ Miệng, Hấp Dẫn</h3>
                                                        <p>Tết Nguyên Đán là ngày lễ truyền thống của Việt Nam</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('notifi')}>
                                    <FontAwesomeIcon className={cx('notifi-icon')} icon={faQuestionCircle} />
                                    <a href="#">Contact</a>
                                </div>
                                <div className={cx('welcome')}>
                                    <a href="#" className={cx('welcome-text')}>
                                        Sign Up
                                    </a>
                                    <span></span>
                                    <a href="#" className={cx('welcome-text')}>
                                        Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-body')}>
                <div className="grid wide">
                    <div className={cx('header-body__container')}>
                        <div className={cx('header-logo')}>
                            <a href="/">
                                <img src={images.logo} alt="" />
                            </a>
                        </div>
                        <div className={cx('header-search')}>
                            <div className={cx("header-search__container")}>
                                <input type="text" placeholder='Search...' />
                                <div className={cx("header-search__drop")}>
                                    <span>Shop</span>
                                    <FontAwesomeIcon className={cx('header-search__drop-icon')} icon={faArrowDown} />
                                </div>
                                <button className={cx("header-search__btn")}>
                                    <FontAwesomeIcon className={cx('header-search__btn-icon')} icon={faSearch} />
                                </button>
                            </div>
                        </div>
                        <div className={cx('header-cart')}>
                            <FontAwesomeIcon className={cx('header-cart__icon')} icon={faShoppingCart} />
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

import classNames from 'classnames/bind';
import styles from '../Home/Home.module.scss';
import images from '../../assets/images';
// import Sidebar from '../../components/Layout/SidebarLayout/Sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="row">
            <div className="col l-2 m-2 c-0">
                <div className={cx("sidebar")}></div>
            </div>
            <div className="col l-10 m-10 c-12">
                <div className="row">
                    <div className="col l-8 m-12 c-12">
                        <div className={cx("slide-left")}></div>
                    </div>
                    <div className="col l-4 m-0 c-0">
                        <div className={cx("slide-right")}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
import Header from '../components/Header';
import Footer from '../components/Footer';

function HeaderFooterLayout({ children }) {
    return <div>
        <Header />
        <div className="container">
            <div className="content">{children}</div>
        </div>
        <Footer />
    </div>;
}

export default HeaderFooterLayout;

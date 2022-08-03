import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// console.log(styles);

const cx = classNames.bind(styles);
// console.log(cx);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}
export default Header;

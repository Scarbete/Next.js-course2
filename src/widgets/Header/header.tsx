import styles from './header.module.css'
import Navigation from '@/components/Navigation'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Posts', href: '/posts' },
]

const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation navLinks={navItems} />
        </header>
    )
}

export default Header
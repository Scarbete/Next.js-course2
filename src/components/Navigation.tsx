'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavLink = {
    label: string
    href: string
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map(item =>
                <Link
                    href={item.href}
                    key={item.label}
                    className={pathname === item.href ? 'active' : ''
                }>
                    {item.label}
                </Link>
            )}
        </>
    )
}

export default Navigation
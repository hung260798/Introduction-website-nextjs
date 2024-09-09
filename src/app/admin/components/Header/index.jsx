"use client";
import styles from "@/app/admin/admin.module.css";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header({ isSidebarOpen, onToggleSidebar }) {

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                {isSidebarOpen ? (
                    <CloseIcon onClick={onToggleSidebar} className={styles.menuIcon} />
                ) : (
                    <MenuIcon onClick={onToggleSidebar} className={styles.menuIcon} />
                )}
                <Link href="/admin">
                    <img src="/images/Techno7.png" alt="Logo" className={styles.logo} />
                </Link>
                <h1 variant="h6" className={styles.title}>ADMIN DASHBOARD</h1>
            </div>
        </header>
    );
};
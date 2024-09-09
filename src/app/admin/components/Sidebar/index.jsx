"use client";
import styles from "@/app/admin/admin.module.css";

const Sidebar = ({ setActiveSection, activeSection, isOpen }) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            <div className={styles.sidebarContent}>
                <div
                    onClick={() => setActiveSection('managePosts')}
                    className={`${styles.sidebarItem} ${activeSection === 'managePosts' ? styles.activeSidebarItem : ''}`}
                >
                    Quản lý bài viết
                </div>
                <div
                    onClick={() => setActiveSection('checkComment')}
                    className={`${styles.sidebarItem} ${activeSection === 'checkComment' ? styles.activeSidebarItem : ''}`}
                >
                    Xem comment
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
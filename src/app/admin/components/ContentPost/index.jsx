"use client";
import styles from "@/app/admin/admin.module.css";

const ContentPost = ({ posts, handleDelete, handleDeleteMultiple, openEditModal, openViewModal, selectedPosts, setSelectedPosts }) => {
    const toggleSelectPost = (id) => {
        const updatedSelectedPosts = new Set(selectedPosts);
        if (updatedSelectedPosts.has(id)) {
            updatedSelectedPosts.delete(id);
        } else {
            updatedSelectedPosts.add(id);
        }
        setSelectedPosts(updatedSelectedPosts);
    };

    return (
        <div className={styles.contentTable}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Chọn</th>
                            <th>Tiêu đề</th>
                            <th>Ảnh</th>
                            <th>Nội dung</th>
                            <th>Thời gian tạo</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan="6" className={styles.noData}>
                                    Không tìm thấy bài viết nào.
                                </td>
                            </tr>
                        ) : (
                            posts.map(post => (
                                <tr key={post.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${post.id}`}
                                            className={styles.checkbox}
                                            checked={selectedPosts.has(post.id)}
                                            onChange={() => toggleSelectPost(post.id)}
                                        />
                                    </td>
                                    <td>{post.title}</td>
                                    <td>{post.image}</td>
                                    <td className={styles.contentCell}>
                                        <div className={styles.innerContent}>
                                            {post.content}
                                        </div>
                                    </td>
                                    <td>{post.createdAt}</td>
                                    <td className={styles.buttonTableGroup}>
                                        <button onClick={() => openEditModal(post)} className={`${styles.button} ${styles.buttonPrimary}`}>Sửa</button>
                                        <button onClick={() => handleDelete(post.id)} className={`${styles.button} ${styles.buttonDanger}`}>Xóa</button>
                                        <button onClick={() => openViewModal(post)} className={`${styles.button} ${styles.buttonDefault}`}>Xem</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContentPost;
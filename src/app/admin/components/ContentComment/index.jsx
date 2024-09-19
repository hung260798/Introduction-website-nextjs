"use client";
import styles from "@/app/admin/admin.module.css";

const ContentComment = ({ comments, handleDeleteComments, handleDeleteMultipleComments, selectedComments, setSelectedComments }) => {
    const toggleSelectComment = (id) => {
        const updatedSelectedComments = new Set(selectedComments);
        if (updatedSelectedComments.has(id)) {
            updatedSelectedComments.delete(id);
        } else {
            updatedSelectedComments.add(id);
        }
        setSelectedComments(updatedSelectedComments);
    };

    return (
        <div className={styles.contentTable}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Chọn</th>
                            <th>Tên</th>
                            <th>Họ</th>
                            <th>Email</th>
                            <th>Nội dung</th>
                            <th>Thời gian tạo</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.length === 0 ? (
                            <tr>
                                <td colSpan="6" className={styles.noData}>
                                    Không tìm thấy comment nào.
                                </td>
                            </tr>
                        ) : (
                            comments.map(comment => (
                                <tr key={comment.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${comment.id}`}
                                            className={styles.checkbox}
                                            checked={selectedComments.has(comment.id)}
                                            onChange={() => toggleSelectComment(comment.id)}
                                        />
                                    </td>
                                    <td>{comment.name}</td>
                                    <td>{comment.surname}</td>
                                    <td>{comment.emailuser}</td>
                                    <td className={styles.contentCell}>
                                        <div className={styles.innerContent}>
                                            {comment.content}
                                        </div>
                                    </td>
                                    <td>{new Date(comment.createdAt).toLocaleString()}</td>
                                    <td className={styles.buttonTableGroup}>
                                        <button onClick={() => handleDeleteComments(comment.id)} className={`${styles.button} ${styles.buttonDanger}`}>Xóa</button>
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

export default ContentComment;

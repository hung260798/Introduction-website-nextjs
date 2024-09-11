"use client";
import styles from "@/app/admin/admin.module.css";

const ContentComment = ({ comments }) => {
    return (
        <div className={styles.contentTable}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Họ</th>
                            <th>Email</th>
                            <th>Nội dung</th>
                            <th>Thời gian tạo</th>
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
                                    <td>{comment.name}</td>
                                    <td>{comment.surname}</td>
                                    <td>{comment.emailuser}</td>
                                    <td>{comment.content}</td>
                                    <td>{comment.createdAt}</td>
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

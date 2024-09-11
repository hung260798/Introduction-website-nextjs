"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '@mui/material';
import styles from './admin.module.css';
import Header from './components/Header';
import ContentPost from './components/ContentPost';
import ContentComment from './components/ContentComment';
import Sidebar from './components/Sidebar';

const AdminPage = () => {
    const [activeSection, setActiveSection] = useState('managePosts');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const staticDataPosts = [
        {
            id: 1,
            title: "TẦM QUAN TRỌNG CỦA NGÀNH CÔNG NGHỆ THÔNG TIN TRONG CUỘC SỐNG HIỆN NAY",
            image: "https://it.ctim.edu.vn/uploads/images/T3_2023/111718_Nganh_Cong_nghe_thong_tin.jpg",
            content: "Trong giai đoạn hiện nay, ngành CNTT đang trở thành một yếu tố quan trọng trong sự phát triển của các doanh nghiệp và tổ chức trên toàn thế giới. Với sự phát triển của công nghệ và mạng internet, nhu cầu về các dịch vụ công nghệ thông tin đã tăng đáng kể, bao gồm cả lưu trữ dữ liệu, phát triển phần mềm và bảo mật thông tin. Các công nghệ mới như trí tuệ nhân tạo (AI), máy học (machine learning), đám mây (cloud computing) và blockchain đang tạo ra các cơ hội mới cho các doanh nghiệp và tổ chức. Ở Việt Nam, ngành CNTT đang được đánh giá là một trong những ngành có tốc độ phát triển nhanh nhất. Theo báo cáo của Tổ chức WISE, số lượng lập trình viên ở Việt Nam đã tăng lên gấp đôi trong vòng 4 năm, đạt hơn 250.000 người. Đây là một con số ấn tượng cho thấy sự phát triển mạnh mẽ của ngành CNTT trong nước. Ngành CNTT không chỉ đóng vai trò quan trọng trong lĩnh vực kinh doanh mà còn góp phần quan trọng trong việc nâng cao chất lượng cuộc sống. Các ứng dụng CNTT như video hội nghị trực tuyến, dịch vụ trực tuyến và các ứng dụng di động đã giúp cho con người có thể kết nối và truy cập thông tin một cách nhanh chóng và tiện lợi hơn. Đặc biệt, trong bối cảnh đại dịch COVID-19, CNTT đóng vai trò quan trọng trong việc hỗ trợ các hoạt động học tập và làm việc từ xa.",
            createdAt: "2023-09-01",
        },
        {
            id: 2,
            title: "Top 5 phần mềm viết code tốt nhất mà bạn nên sử dụng",
            image: "https://it.ctim.edu.vn/uploads/images/T11_2023/184319_phan-mem-viet-code-2.jpg",
            content: "IDE (Integrated Development Environment) – môi trường phát triển tích hợp là phần mềm dùng để xây dựng các ứng dụng kết hợp sẵn các công cụ phổ biến cho lập trình viên vào một giao diện duy nhất. Code Editor – là một công cụ để làm việc với văn bản trong tập tin cùng một số hỗ trợ về định dạng code cũng như gợi ý từ khóa theo ngôn ngữ lập trình, anh em lập trình dùng nó đơn thuần để viết code và lưu ở dạng văn bản thuần túy. Điểm khác nhau cơ bản giữa IDE và Code Editor là việc IDE được tích hợp sẵn các trình biên dịch giúp bạn có thể triển khai code (build, test, deploy) ngay lúc lập trình. Vì vậy nếu bạn lập trình ứng dụng trên PC hay mobile, thông thường IDE sẽ được lựa chọn để có thể build code và kiểm tra tính đúng đắn ngay lập tức. Tuy nhiên ngược lại, Code Editor sẽ được ưu tiên với các công việc lập trình mà không đòi hỏi việc build, deploy phức tạp; ví dụ như làm Front-end Web.",
            createdAt: "2023-09-02",
        },
        {
            id: 3,
            title: "Top 5 phần mềm viết code tốt nhất mà bạn nên sử dụng",
            image: "https://it.ctim.edu.vn/uploads/images/T11_2023/184319_phan-mem-viet-code-2.jpg",
            content: "IDE (Integrated Development Environment) – môi trường phát triển tích hợp là phần mềm dùng để xây dựng các ứng dụng kết hợp sẵn các công cụ phổ biến cho lập trình viên vào một giao diện duy nhất. Code Editor – là một công cụ để làm việc với văn bản trong tập tin cùng một số hỗ trợ về định dạng code cũng như gợi ý từ khóa theo ngôn ngữ lập trình, anh em lập trình dùng nó đơn thuần để viết code và lưu ở dạng văn bản thuần túy. Điểm khác nhau cơ bản giữa IDE và Code Editor là việc IDE được tích hợp sẵn các trình biên dịch giúp bạn có thể triển khai code (build, test, deploy) ngay lúc lập trình. Vì vậy nếu bạn lập trình ứng dụng trên PC hay mobile, thông thường IDE sẽ được lựa chọn để có thể build code và kiểm tra tính đúng đắn ngay lập tức. Tuy nhiên ngược lại, Code Editor sẽ được ưu tiên với các công việc lập trình mà không đòi hỏi việc build, deploy phức tạp; ví dụ như làm Front-end Web.",
            createdAt: "2023-09-02",
        },
        {
            id: 4,
            title: "Top 5 phần mềm viết code tốt nhất mà bạn nên sử dụng",
            image: "https://it.ctim.edu.vn/uploads/images/T11_2023/184319_phan-mem-viet-code-2.jpg",
            content: "IDE (Integrated Development Environment) – môi trường phát triển tích hợp là phần mềm dùng để xây dựng các ứng dụng kết hợp sẵn các công cụ phổ biến cho lập trình viên vào một giao diện duy nhất. Code Editor – là một công cụ để làm việc với văn bản trong tập tin cùng một số hỗ trợ về định dạng code cũng như gợi ý từ khóa theo ngôn ngữ lập trình, anh em lập trình dùng nó đơn thuần để viết code và lưu ở dạng văn bản thuần túy. Điểm khác nhau cơ bản giữa IDE và Code Editor là việc IDE được tích hợp sẵn các trình biên dịch giúp bạn có thể triển khai code (build, test, deploy) ngay lúc lập trình. Vì vậy nếu bạn lập trình ứng dụng trên PC hay mobile, thông thường IDE sẽ được lựa chọn để có thể build code và kiểm tra tính đúng đắn ngay lập tức. Tuy nhiên ngược lại, Code Editor sẽ được ưu tiên với các công việc lập trình mà không đòi hỏi việc build, deploy phức tạp; ví dụ như làm Front-end Web.",
            createdAt: "2023-09-02",
        },
        {
            id: 5,
            title: "Top 5 phần mềm viết code tốt nhất mà bạn nên sử dụng",
            image: "https://it.ctim.edu.vn/uploads/images/T11_2023/184319_phan-mem-viet-code-2.jpg",
            content: "IDE (Integrated Development Environment) – môi trường phát triển tích hợp là phần mềm dùng để xây dựng các ứng dụng kết hợp sẵn các công cụ phổ biến cho lập trình viên vào một giao diện duy nhất. Code Editor – là một công cụ để làm việc với văn bản trong tập tin cùng một số hỗ trợ về định dạng code cũng như gợi ý từ khóa theo ngôn ngữ lập trình, anh em lập trình dùng nó đơn thuần để viết code và lưu ở dạng văn bản thuần túy. Điểm khác nhau cơ bản giữa IDE và Code Editor là việc IDE được tích hợp sẵn các trình biên dịch giúp bạn có thể triển khai code (build, test, deploy) ngay lúc lập trình. Vì vậy nếu bạn lập trình ứng dụng trên PC hay mobile, thông thường IDE sẽ được lựa chọn để có thể build code và kiểm tra tính đúng đắn ngay lập tức. Tuy nhiên ngược lại, Code Editor sẽ được ưu tiên với các công việc lập trình mà không đòi hỏi việc build, deploy phức tạp; ví dụ như làm Front-end Web.",
            createdAt: "2023-09-02",
        },
    ];

    const staticDataComments = [
        {
            id: 1,
            name: "Khôi",
            surname: "Nguyễn",
            email: "nhatkhoi1905@gmail.com",
            content: "Mình muốn tìm hiểu thêm về vị trí front-end trong công ty",
            createdAt: "2024-09-09",
        },
        {
            id: 2,
            name: "Tâm",
            surname: "Võ",
            email: "tamvo2207@gmail.com",
            content: "Mình xin JD công việc này",
            createdAt: "2024-08-14",
        },
    ];

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [commentSearchTerm, setCommentSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [postsToDelete, setPostsToDelete] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState(new Set());
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState({ title: '', image: '', content: '', createdAt: '' });
    const [modalType, setModalType] = useState(''); // 'add', 'edit', 'view'

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // const fetchPosts = () => {
    //     setPosts(staticDataPosts);
    //     setFilteredPosts(staticDataPosts);
    // }
    // const fetchComments = () => {
    //     setComments(staticDataComments);
    //     setFilteredComments(staticDataComments);
    // };

    // const fetchPosts = () => {
    //     setPosts(staticDataPosts);
    //     setFilteredPosts(staticDataPosts);
    // }
    // const fetchComments = () => {
    //     setComments(staticDataComments);
    //     setFilteredComments(staticDataComments);
    // };
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5167/api/bai-viets/');
            setPosts(response.data.data);
            setFilteredPosts(response.data.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:5167/api/email/');
            setComments(response.data.data);
            setFilteredComments(response.data.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
        if (activeSection === 'checkComment') {
            fetchComments();
        }
    }, []);

    useEffect(() => {
        if (activeSection === 'checkComment') {
            fetchComments();
        }
        if (activeSection === 'managePosts') {
            fetchPosts();
        }
    }, [activeSection]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    const handlePostSearch = () => {
        setFilteredPosts(
            posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.createdAt.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    const handleCommentSearch = () => {
        setFilteredComments(
            comments.filter(comment =>
                comment.emailuser.toLowerCase().includes(commentSearchTerm.toLowerCase()) ||
                comment.content.toLowerCase().includes(commentSearchTerm.toLowerCase()) ||
                comment.name.toLowerCase().includes(commentSearchTerm.toLowerCase()) ||
                comment.surname.toLowerCase().includes(commentSearchTerm.toLowerCase()) ||
                comment.createdAt.toLowerCase().includes(commentSearchTerm.toLowerCase())
            )
        );
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'managePosts':
                return (
                    <ContentPost
                        posts={filteredPosts.length > 0 ? filteredPosts : []}
                        handleDelete={handleDelete}
                        handleDeleteMultiple={handleDeleteMultiple}
                        openEditModal={openEditModal}
                        openViewModal={openViewModal}
                        selectedPosts={selectedPosts}
                        setSelectedPosts={setSelectedPosts}
                    />
                );
            case 'checkComment':
                return (
                    <ContentComment
                        comments={filteredComments.length > 0 ? filteredComments : []}
                    />
                );
            default:
                return <Content posts={posts} handleDelete={handleDelete} openEditModal={openEditModal} openViewModal={openViewModal} />;
        }
    };


    const openAddModal = () => {
        setCurrentPost({ title: '', image: '', content: '', createdAt: '' });
        setModalType('add');
        setModalOpen(true);
    };

    const openEditModal = (post) => {
        setCurrentPost(post);
        setModalType('edit');
        setModalOpen(true);
    };

    const openViewModal = (post) => {
        setCurrentPost(post);
        setModalType('view');
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentPost({ title: '', image: '', content: '', createdAt: '' });
    };

    const validatePostData = (postData) => {
        const { title, content, image } = postData;
    
        if (!title || title.trim() === '') {
            return 'Tiêu đề không được để trống.';
        }
        if (!content || content.trim() === '') {
            return 'Nội dung không được để trống.';
        }
        if (!image || image.trim() === '') {
            return 'Hình ảnh không được để trống.';
        }
    
        return
    };

    const handleAdd = async () => {
        const newPost = {
            id: Date.now(),
            title: currentPost.title,
            image: currentPost.image,
            content: currentPost.content,
            createdAt: new Date().toISOString(),
        };

        const errorMessage = validatePostData(newPost);
        if (errorMessage) {
            alert(errorMessage);
            return;
        }
        try {
            // Gọi API để thêm bài viết
            const response = await axios.post('http://localhost:5167/api/bai-viets/', newPost);

            // Cập nhật state với bài viết mới
            // setPosts((prevPosts) => [...prevPosts, response.data]);
            // setFilteredPosts((prevFiltered) => [...prevFiltered, response.data]);
            fetchPosts();
            closeModal();
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleSave = async () => {

        const errorMessage = validatePostData(currentPost);
        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        try {
            // Gọi API để cập nhật bài viết
            const response = await axios.put(`http://localhost:5167/api/bai-viets/${currentPost.id}`, currentPost);

            // Cập nhật state với bài viết đã được sửa
            // setPosts((prevPosts) =>
            //     prevPosts.map(post => (post.id === currentPost.id ? response.data : post))
            // );
            // setFilteredPosts((prevFiltered) =>
            //     prevFiltered.map(post => (post.id === currentPost.id ? response.data : post))
            // );
            fetchPosts();
            closeModal();
        } catch (error) {
            console.error('Error updating post:', error);
        }
        setPosts(posts.map(post => (post.id === currentPost.id ? currentPost : post)));
        setFilteredPosts(filteredPosts.map(post => (post.id === currentPost.id ? currentPost : post)));
        closeModal();
    };

    const handleDelete = (id) => {
        setPostsToDelete([id]);
        setShowConfirmModal(true);
    };

    const handleDeleteMultiple = () => {
        setPostsToDelete(Array.from(selectedPosts));
        setShowConfirmModal(true);
    };

    const confirmDelete = async () => {
        try {
            // Gọi API để xóa các bài viết
            await Promise.all(
                postsToDelete.map(id => 
                    axios.delete(`http://localhost:5167/api/bai-viets/${id}`)
                )
            );
            setPosts(posts.filter(post => !postsToDelete.includes(post.id)));
            setFilteredPosts(filteredPosts.filter(post => !postsToDelete.includes(post.id)));
            setSelectedPosts(new Set());
        } catch (error) {
            console.error('Error deleting posts:', error);
        } finally {
            setPostsToDelete([]);
            setShowConfirmModal(false);
        }
        // setPostsToDelete([]);
        // setPosts(posts.filter(post => !postsToDelete.includes(post.id)));
        // setFilteredPosts(filteredPosts.filter(post => !postsToDelete.includes(post.id)));
        // setSelectedPosts(new Set());
        // setShowConfirmModal(false);
    };

    const cancelDelete = () => {
        setPostsToDelete([]);
        setShowConfirmModal(false);
    };

    const handleReloadPosts = () => {
        fetchPosts();
    };

    const handleReloadComments = () => {
        fetchComments();
    };

    // Xử lý modal bài viết
    const formatContent = (content) => {
        // Thay thế ký tự xuống dòng bằng <br />
        const formattedContent = content.replace(/\r?\n/g, '<br />');
        return <div className={styles.modalContentTextView} dangerouslySetInnerHTML={{ __html: formattedContent }} />;
    };


    return (
        <div className={styles.container}>
            <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
            <div className={styles.mainContent}>
                <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
                <div className={styles.content}>
                    <h2 className={styles.contentTitle}>{activeSection === 'managePosts' ? 'Quản lý bài viết' : 'Xem comment'}</h2>
                    {activeSection === 'managePosts' && (
                        <div className={styles.functionContainer}>
                            <div className={styles.searchContainer}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className={styles.searchInput}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button onClick={handlePostSearch} className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonSearch}`}>
                                    Tìm kiếm
                                </button>
                                <button onClick={handleReloadPosts} className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonReload}`}>Reload</button>
                                {selectedPosts.size > 0 && (
                                    <button onClick={handleDeleteMultiple} className={`${styles.button} ${styles.buttonDanger}`}>Xóa mục đã chọn</button>
                                )}
                            </div>
                            <button onClick={openAddModal} className={`${styles.button} ${styles.buttonAddPrimary}`}>
                                Thêm Bài Viết
                            </button>
                        </div>
                    )}
                    {activeSection === 'checkComment' && (
                        <div className={styles.functionContainer}>
                            <div className={styles.searchContainer}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className={styles.searchInput}
                                    value={commentSearchTerm}
                                    onChange={(e) => setCommentSearchTerm(e.target.value)}
                                />
                                <button onClick={handleCommentSearch} className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonSearch}`}>
                                    Tìm kiếm
                                </button>
                                <button onClick={handleReloadComments} className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonReload}`}>Reload</button>
                            </div>
                        </div>
                    )}
                    {renderContent()}
                </div>
            </div>

            {/* Modal Thêm Bài Viết */}
            <Modal open={modalOpen && modalType === 'add'} onClose={closeModal}>
                <div className={styles.modalContent}>
                    <h2 className={styles.modalTitle}>Thêm Bài Viết</h2>
                    <input type="text" value={currentPost.title} onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })} placeholder="Tiêu đề" className={styles.input} />
                    <input type="text" value={currentPost.image} onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })} placeholder="Đường link ảnh" className={styles.input} />
                    <textarea value={currentPost.content} onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })} placeholder="Nội dung bài viết" className={styles.textarea} />
                    <div className={styles.modalButtonGroup}>
                        <button onClick={closeModal} className={`${styles.modalButton} ${styles.modalButtonSecondary}`}>Hủy</button>
                        <button onClick={handleAdd} className={`${styles.modalButton} ${styles.modalButtonPrimary}`}>Thêm</button>
                    </div>
                </div>
            </Modal>

            {/* Modal Sửa Bài Viết */}
            <Modal open={modalOpen && modalType === 'edit'} onClose={closeModal}>
                <div className={styles.modalContent}>
                    <h2 className={styles.modalTitle}>Sửa Bài Viết</h2>
                    <input type="text" value={currentPost.title} onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })} placeholder="Tiêu đề" className={styles.input} />
                    <input type="text" value={currentPost.image} onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })} placeholder="Ảnh" className={styles.input} />
                    <textarea value={currentPost.content} onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })} placeholder="Nội dung bài viết" className={styles.textarea} />
                    <div className={styles.modalButtonGroup}>
                        <button onClick={closeModal} className={`${styles.modalButton} ${styles.modalButtonSecondary}`}>Hủy</button>
                        <button onClick={handleSave} className={`${styles.modalButton} ${styles.modalButtonPrimary}`}>Lưu</button>
                    </div>
                </div>
            </Modal>

            {/* Modal Xem Bài Viết */}
            <Modal open={modalOpen && modalType === 'view'} onClose={closeModal}>
                <div className={styles.modalContentView}>
                    <h2 className={styles.modalTitleView}>{currentPost.title}</h2>
                    <img src={currentPost.image} alt={currentPost.title} className={styles.modalImageView} />
                    <div className={styles.modalContentTextViewWrapper}>{formatContent(currentPost.content)}</div>
                    <p className={styles.modalTimestampView}>Thời gian tạo: {currentPost.createdAt}</p>
                    <div className={styles.modalButtonGroup}>
                        <button onClick={closeModal} className={`${styles.modalButton} ${styles.modalButtonPrimary} ${styles.modalButtonView}`}>Đóng</button>
                    </div>
                </div>
            </Modal>

            {/* Modal Xác Nhận Xóa Bài Viết */}
            {showConfirmModal && (
                <Modal open={showConfirmModal} onClose={cancelDelete}>
                    <div className={styles.modalContent}>
                        <h2>Xác Nhận Xóa</h2>
                        <p>Bạn có chắc chắn muốn xóa không?</p>
                        <div className={styles.modalButtonGroup}>
                            <button onClick={cancelDelete} className={`${styles.modalButton} ${styles.modalButtonSecondary}`}>Hủy</button>
                            <button onClick={confirmDelete} className={`${styles.modalButton} ${styles.modalButtonPrimary} ${styles.modalButtonPrimaryDel}`}>Đồng Ý</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};


export default AdminPage;
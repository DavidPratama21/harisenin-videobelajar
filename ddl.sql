CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    description TEXT COLLATE utf8mb4_unicode_ci,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO products (name, description, price, quantity)
VALUES
('Fullstack Web Development Bootcamp', 
 'Kelas intensif belajar HTML, CSS, JavaScript, React, dan Node.js untuk menjadi fullstack developer.', 
 2500000.00),

('UI/UX Design Mastery', 
 'Pelatihan komprehensif untuk memahami prinsip desain dan membuat prototipe dengan Figma.', 
 1750000.00),

('Digital Marketing for Beginners', 
 'Belajar strategi digital marketing mulai dari SEO, SEM, hingga social media marketing.', 
 1500000.00),

('Membuat Aplikasi Mobile dengan React Native', 
 'Kursus step-by-step untuk membangun aplikasi Android dan iOS dengan React Native.', 
 2000000.00),

('Ebook Panduan Machine Learning Dasar', 
 'Ebook interaktif untuk pemula yang ingin memahami konsep dasar machine learning dengan Python.', 
 50000.00);

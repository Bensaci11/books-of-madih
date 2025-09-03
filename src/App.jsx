import React, { useState } from 'react'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  const books = [
{ id: 1, title: "البردة", file: "/pdfs/b1.pdf"},
    { id: 2, title: "ديوان الوسائل المتقبلة", file: "/pdfs/b2.pdf"},
    { id: 3, title: "الهمزية", file: "/pdfs/b3.pdf"},
    { id: 4, title: "مجموع القصائد والأدعية", file: "/pdfs/b4.pdf"},
    { id: 5, title: "البرزنجي", file: "/pdfs/b5.pdf"},
  ]

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>📚 كتب المدح</h1>

      {/* قائمة الكتب كبطاقات */}
      {!selectedBook && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "15px" }}>
          {books.map(book => (
            <div 
              key={book.id} 
              style={{ 
                border: "1px solid #ccc", 
                borderRadius: "8px", 
                padding: "15px", 
                textAlign: "center", 
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                background: "#f9f9f9"
              }}
            >
              <h3 style={{ margin: "5px 0" }}>{book.title}</h3>
              <p style={{ margin: "5px 0", color: "gray" }}>{book.author}</p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                {/* زر معاينة داخل التطبيق */}
                <button 
                  onClick={() => setSelectedBook(book.file)} 
                  style={{ 
                    padding: "5px 10px", 
                    cursor: "pointer", 
                    background: "#007bff", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "5px" 
                  }}
                >
                  📖 معاينة
                </button>

                {/* زر فتح الكتاب في تبويب جديد */}
                <a 
                  href={book.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: "none", 
                    padding: "5px 10px", 
                    background: "green", 
                    color: "white", 
                    borderRadius: "5px" 
                  }}
                >
                  🔗 فتح
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* عرض الكتاب داخل التطبيق */}
      {selectedBook && (
        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={() => setSelectedBook(null)} 
            style={{ 
              marginBottom: "10px", 
              cursor: "pointer", 
              padding: "5px 10px", 
              background: "red", 
              color: "white", 
              border: "none", 
              borderRadius: "5px" 
            }}
          >
            🔙 رجوع
          </button>
          <h2>📖 معاينة الكتاب</h2>
          <iframe 
            src={selectedBook} 
            width="100%" 
            height="600px" 
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="PDF Viewer"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default App
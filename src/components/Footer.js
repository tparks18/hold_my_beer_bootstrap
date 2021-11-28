import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer id="footer" className="bg-primary text-center text-white">
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3 bg-primary">
          © 2021 Copyright:
          <a
            style={{ marginLeft: 5 }}
            className="text-white"
            href="https://codingtemple.com/"
          >
            Coding Temple
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer

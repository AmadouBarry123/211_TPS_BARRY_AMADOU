import '../css/Footer.css'; 

function Footer() {
  return (
    <footer
      collapseOnSelect
      expand="lg"
      fixed="bottom" 

    className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p style={{color : "black"}}>&copy; 2025 My Website Amadou. All rights reserved.</p>
        <p>

          {' '}
          <a href="https://github.com/AmadouBarry123/211_TPS_BARRY_AMADOU/tree/Epreuve_Finale" className="text-blue-400">
            Lien vers mon GitHub 
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="topImg" src="https://miro.medium.com/fit/c/88/88/1*QkJ3X1VN0V-flFDkUAsIbQ.jpeg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus magni laudantium nesciunt, molestias recusandae. Voluptatibus ducimus voluptatum enim, alias illum tempore suscipit dolor doloribus porro veritatis? Ea, optio pariatur.</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarlistItem">History</li>
            <li className="sidebarlistItem">Gurbani</li>
            <li className="sidebarlistItem">Articles</li>
          </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
        <span className="headerTitleSm">Sikhi and History</span>    
        </div>
        <img 
            className="headerImg" 
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/sikh-nihang-at-the-battle-of-aliwal-jason-askew.jpg" 
            alt="" 
        />
    </div>
  )
}

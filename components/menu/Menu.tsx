import Link from "next/link";


import menuCss from './menu.module.scss';

export interface MenuProps {
  
}
 
const Menu: React.FC<MenuProps> = () => {
  return (  
    <ul className = {menuCss.menu}>
      <li>
        <Link href = '/products/'>
          <a> products </a>
        </Link>
      </li>
      <li>
        <Link href = '/products/[category' as = '/products/simple-dynamic-category'>
          <a> dynamic pdoruct navigation</a>
        </Link>
      </li>
    </ul>
  );
}
 
export default Menu;
import Menu from "../menu/Menu";
import layoutCss from './layout.module.scss';

export interface LayoutProps {
  children: any;
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
  return ( 
    <div className = {layoutCss.container}>
      <main className = {layoutCss.main}>
        <Menu /> 
      </main>
      {children}
    </div>
   );
}
 
export default Layout;
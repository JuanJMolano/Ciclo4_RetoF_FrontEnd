import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/img/logo.png';



const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">      

                <img src={logo}                
                style={{width: 100, height: 130, marginLeft:80}}/>                            

                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Ocho Bits LTDA</p>

                <p className="mt-3 text-gray-600">Bienvenido</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-blue-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-blue-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-blue-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-blue-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;
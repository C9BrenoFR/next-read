import { navLink } from "@/interfaces/navLink"
import NavLink from "../../buttons/nav_link"

interface RoutesProps{
    isAdmin: boolean
}

const ROUTES_MAP = new Map<boolean, navLink[]>(
    [
        [true, [
            {title: 'Gerenciar Livros', uri:'/admin/books'},
            {title: 'Gerenciar Pedidos', uri:'/admin/purchases'},
            {title: 'Gerenciar Usuários', uri:'/admin/users'},
            ]
        ],
        [false, [
            {title: 'Meus Pedidos', uri:'/user/purchases'},
            {title: 'Meus Livros', uri:'/user/books'},
            ]
        ],
    ])

export default function Routes({isAdmin}: RoutesProps){

    const links = ROUTES_MAP.get(isAdmin)

   return(
       <div className="flex items-center justify-center gap-5">
            {links?.map((link, index) => (
                <NavLink key={index} link={link}/>
            ))}
       </div>
   )
}
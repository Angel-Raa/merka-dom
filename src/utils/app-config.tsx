import {
  User,
  Settings,
  LogOut,
  Home,
  Boxes,
  BarChart2,
  Settings as SettingsIcon,
  Sun,
  Moon,
} from "lucide-react";

// Datos del usuario (menú de perfil)
export const userMenu = [
  {
    text: "Mi perfil",
    icon: <User size={18} />,
    tipo: "perfil",
  },
  {
    text: "Configuración",
    icon: <Settings size={18} />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icon: <LogOut size={18} />,
    tipo: "cerrar_sesion",
  },
];

// Menú principal (Sidebar)
export const mainMenu = [
  {
    label: "Inicio",
    icon: <Home size={18} />,
    to: "/",
  },
  {
    label: "Inventario",
    icon: <Boxes size={18} />,
    to: "/inventario",
    description: "Gestión de productos y stock",
  },
  {
    label: "Reportes",
    icon: <BarChart2 size={18} />,
    to: "/reportes",
    description: "Estadísticas y análisis",
  },
];

// Menú secundario (Configuración)
export const secondaryMenu = [
  {
    label: "Ajustes",
    icon: <SettingsIcon size={18} />,
    to: "/ajustes",
    description: "Personaliza tu sistema",
  },
];

// Selector de temas
export const themeOptions = [
  {
    icon: <Sun size={18} />,
    label: "Claro",
    value: "light",
  },
  {
    icon: <Moon size={18} />,
    label: "Oscuro",
    value: "dark",
  },
];

//data configuracion
export const DataModulosConfiguracion = [
  {
    title: "Productos",
    subtitle: "registra tus productos",
    icono: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link: "/configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "ten el control de tu personal",
    icono: "https://i.ibb.co/5vgZ0fX/hombre.png",
    link: "/configurar/usuarios",
  },

  {
    title: "Tu empresa",
    subtitle: "configura tus opciones básicas",
    icono: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link: "/configurar/empresa",
  },
  {
    title: "Categoria de productos",
    subtitle: "asigna categorias a tus productos",
    icono: "https://i.ibb.co/VYbMRLZ/categoria.png",
    link: "/configurar/categorias",
  },
  {
    title: "Marca de productos",
    subtitle: "gestiona tus marcas",
    icono: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link: "/configurar/marca",
  },
];
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];

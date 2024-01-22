import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
type sidebar ={
    id: number;
    name:string;
    icon:any
}
export const sidebar=[
    {
        id:1,
        name:"dasboard",
        icon: SpaceDashboardIcon
    },

    {
        id:2,
        name:"Project",
        icon: ListAltIcon
    },

    {
        id:3,
        name:"Project",
        icon: ListAltIcon
    },

    {
        id:4,
        name:"Task",
        icon: FormatListNumberedIcon
    },

    {
        id:5,
        name:"Documents",
        icon: FilePresentIcon
    },

    {
        id:6,
        name:"Settings",
        icon: SettingsIcon
    },

    {
        id:7,
        name:"Logout",
        icon: UpdateIcon
    },
] 
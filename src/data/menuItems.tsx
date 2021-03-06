import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
    },
    {
        name: 'TextInputs',
        icon: 'text-outline',
        component: 'TextInputScreen',
    },
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'SectionListScreen',
    },
    {
        name: 'Modal Screen',
        icon: 'browsers-outline',
        component: 'ModalScreen',
    },
    {
        name: 'InfiniteScroll Screen',
        icon: 'infinite-outline',
        component: 'InfiniteScrollScreen',
    },
    {
        name: 'Slides Screen',
        icon: 'albums-outline',
        component: 'SlidesScreen',
    },
    {
        name: 'Change Theme Screen',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen',
    },
]
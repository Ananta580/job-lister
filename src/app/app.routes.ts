import { Routes } from '@angular/router';


export const MENU_LIST = [
    {
        name: 'Dashboard',
        icon: 'home',
        url:'/',
        active:false
    },
    {
        name: 'Find Work',
        icon: 'travel_explore',
        url:'/find-work',
        active:false
    },
    {
        name: 'My Jobs',
        icon: 'work',
        url:'/my-jobs',
        active:false
    },
    {
        name: 'Activity',
        icon: 'family_link',
        url:'/activity',
        active:false
    },
    {
        name: 'Tracking',
        icon: 'bar_chart',
        url:'/track',
        active:false
    },
    {
        name: 'Notifications',
        icon: 'notifications',
        url:'/notifications',
        active:false
    }
]
export const routes: Routes = [];

import React from "react";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import GroupIcon from '@material-ui/icons/Group';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';

import {Profile} from "./profile";
import {Group} from "./group";
import {Stats} from "./stats";
import {Posts} from "./posts";

export type PageConfig = {
  id: string;
  component: React.ComponentType;
  icon: React.ComponentType;
  path: string;
  title: string;
};

export const pages: PageConfig[] = [
  {
    id: 'profile',
    component: Profile,
    icon: ImportContactsIcon,
    title: 'Profile',
    path: '/profile'
  },
  {
    id: 'group',
    component: Group,
    icon: GroupIcon,
    title: 'Group',
    path: '/group'
  },
  {
    id: 'posts',
    component: Posts,
    icon: ListIcon,
    title: 'Posts',
    path: '/posts'
  },
  {
    id: 'stats',
    component: Stats,
    icon: BarChartIcon,
    title: 'Stats',
    path: '/stats'
  }
];

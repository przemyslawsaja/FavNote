import React from "react";
import Sidebar from "./Sidebar";
import StoryRouter from 'storybook-react-router'
import { configure, addDecorator } from '@storybook/react';

export default  {
    title: 'Organisms/SideBar',

}
addDecorator(StoryRouter());
export const Normal = () => <Sidebar />;

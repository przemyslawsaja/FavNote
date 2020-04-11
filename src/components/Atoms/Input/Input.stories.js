import React from "react";
import Input from "./Input";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import bulbIcon from "../../../assets/icons/bulb.svg";

export default {
    component: Input,
    title: 'Atoms/Input',
};

export const Normal = () => <Input placeholder="login" />;
export const Active = () => <Input placeholder="search" search />;


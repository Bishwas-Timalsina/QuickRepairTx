export interface IButtonData{
    data:IButtonProps;
}
interface IButtonProps{
    name:string;
    icon?:any;
}

export interface IComponentHeader{
    data:IComponentProps;
}
interface IComponentProps{
    title:string;
    section:string;
}
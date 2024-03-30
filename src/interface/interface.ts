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
export interface IFooter{
    title:string;
    servicesName:IServiceData[];
}
interface IServiceData{
    name:string;
    detail?:string;
    linktype?:string;
    slug?:string;
}

export interface ISocialLinks{
    data:{
        link:string;
        icon:any;
    }
}

export interface IPageBanner{
    data?:IPageBannerProps;
}
interface IPageBannerProps{
    image:string;
    title:string;
    subDetail?:string;
}

//why choose us
export interface IReasonList{
    title:string;
    detail:string;
    image:any;
}

export interface IPricingQualityList{

    title:string

}


//service Detail
export interface IServiceInfo{
    data:IserviceInfoProps;

}
interface IserviceInfoProps{
    title:string;
    detail:string;
    aboutUsDetail:string;
    relatedImg:IRelatedImg[];
    feature:IFeature[];
    slug:string
}
interface IFeature{
    list:string;
}

interface IRelatedImg{
    img:any;
}

//testimonial
export interface ITestimonial{
    name:string;
    img:any;
    detail:string;
    position:string;

}
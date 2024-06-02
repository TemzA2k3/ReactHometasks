interface IHeaderButtonTypes{
    btnName: string,
    isActive: boolean,
    link: string,
    click: (btnName: string) => void;
}

export type { IHeaderButtonTypes }

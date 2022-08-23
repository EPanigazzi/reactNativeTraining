export interface Categories {
    id:   number;
    name: string;
}
export interface ProductList {
    content:          Content[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface Content {
    id:             number;
    title:          string;
    description:    string;
    specifications: null;
    price:          number;
    currency:       null;
    imageUrl:       string[];
    userid:         Userid;
    category:       Category;
    publishedDate:  string;
    status:         Status;
    views:          number;
    rating:         number;
}

export interface Category {
    id:   number;
    name: string;
}

export interface Status {
    id:    number;
    title: Title;
}

export enum Title {
    Active = "Active",
}

export interface Userid {
    id:             string;
    name:           Name;
    lastName:       LastName;
    email:          Email;
    phone:          string;
    password:       Password;
    slackUser:      SlackUser;
    avatarUrl:      AvatarURL;
    site:           Category;
    position:       Position;
    role:           any[];
    completedSales: number;
    sellerRating:   number;
    buyerRating:    number;
}

export enum AvatarURL {
    WWWAvatarlink1COM = "www.avatarlink1.com",
    WWWAvatarlink2COM = "www.avatarlink2.com",
    WWWAvatarlink3COM = "www.avatarlink3.com",
}

export enum Email {
    Usertest2GlobantCOM = "usertest2@globant.com",
    Usertest3GlobantCOM = "usertest3@globant.com",
    UsertestGlobantCOM = "usertest@globant.com",
}

export enum LastName {
    Perez = "Perez",
    Ramirez = "Ramirez",
    Riquelme = "Riquelme",
}

export enum Name {
    Juan = "Juan",
    Juana = "Juana",
    Roman = "Roman",
}

export enum Password {
    The2A12$DJfIyfDH2EWDk9TvkbNNM6Ej4O5T9SG1PCNPrlI364R0Nzq78E = "$2a$12$DJfIyfDH2EWDk9TvkbNNM.6Ej/4O5T9sG1PCnPrlI364R0Nzq.78e",
}

export enum Position {
    JavaDeveloper = "Java Developer",
    ProjectManager = "Project Manager",
    Recruiter = "Recruiter",
}

export enum SlackUser {
    JuanPerez = "juan.perez",
    JuanaRamirez = "juana.ramirez",
    RomanRiquelme = "roman.riquelme",
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

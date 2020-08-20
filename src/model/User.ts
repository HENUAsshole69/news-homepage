
export interface UserInfo {
    cell: string;
    realName: string;
}

export type UserType = "INDIVIDUAL" | "ADMIN"



export interface User {
    info: UserInfo;
    name: string;
    type: UserType;
}

export interface Credential {
    password: string;
    user: User;
}

class RegisterUserObj implements User{
    info: UserInfo;
    name: string;
    type: UserType;
    constructor(info: UserInfo, name: string, type: UserType) {
        this.info = info
        this.name = name
        this.type = type
    }

}

class RegisterInfoObj implements UserInfo {
    cell: string;
    realName: string;

    constructor(cell: string, realName: string) {
        this.cell = cell
        this.realName = realName
    }
}

export class RegisterObj implements Credential{
    password: string;
    user: User;
    constructor(password: string, name: string, type: UserType, cell: string, realName: string) {
        this.password = password
        this.user = new RegisterUserObj(new RegisterInfoObj(cell,realName),name,type)
    }
}

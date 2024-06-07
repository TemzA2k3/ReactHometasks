export interface IUserState {
    user: {
        email: string;
        uid: string;
    } | null;
    error: string | null;
}

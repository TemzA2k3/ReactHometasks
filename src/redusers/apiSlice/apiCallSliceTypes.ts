import { IDescriptionTypes } from "../../components";

export interface ApiState {
    data: IDescriptionTypes[] | [];
    loading: boolean;
    error: string | null;
}

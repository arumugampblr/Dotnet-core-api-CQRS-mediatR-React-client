import { createContext, useContext} from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import modalStore from "./modalStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore:UserStore;
    modalStore: modalStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new modalStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

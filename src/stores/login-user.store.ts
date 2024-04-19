import { User } from "types/interface";
import { create } from "zustand";

interface LoginUserStore {

};

const useLoginUserStore = create<LoginUserStore>(() => (
    {
        //내용 작성
    }
));

export default useLoginUserStore;
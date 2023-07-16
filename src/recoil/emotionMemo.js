import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const emotionMemo = atom({
  key: 'emotionMemo',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default emotionMemo;
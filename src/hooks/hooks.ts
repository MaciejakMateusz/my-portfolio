import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store.ts';
import {useInView} from "react-intersection-observer";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useInCustomView = () => useInView({triggerOnce: true, threshold: 0.2});
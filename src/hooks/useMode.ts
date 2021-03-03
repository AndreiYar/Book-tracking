import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/configureStore";
import { switchMode } from "../store/actions/mode";

export const useMode = () => {
  const dispatch = useDispatch();
  const { value: mode } = useSelector((state: AppState) => state.mode);

  const handleSwitchMode = () => {
    const modeValue = mode === 'dark' ? 'light' : 'dark';

    dispatch(switchMode({ mode: modeValue }));
  }

  return { mode, handleSwitchMode };
}

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainerWrapper = () => {
  return   <ToastContainer position="top-right" autoClose={5000} />;
}

export default ToastContainerWrapper
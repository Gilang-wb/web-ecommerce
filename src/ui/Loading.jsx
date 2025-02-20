import { motion } from "framer-motion";

const Loading = ({height}) => {
  return (
    <div className={`flex items-center justify-center ${height} bg-gray-100`}>
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default Loading;

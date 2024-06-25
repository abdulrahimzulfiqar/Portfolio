import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import VideoPlayer from "../../components/Video";
import VideoPlayer2 from "../../components/Video2";
import VideoPlayer3 from "../../components/Video3";

const Testimonials = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h-full bg-primary/30 py-32 text-center "
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center gap-y-10 ">
        <h2 className="h2 mb-8 xl:mb-0">
          Client's <span className="text-accent"> feedback.</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <VideoPlayer  className="w-full h-auto"/>
          <VideoPlayer2 className="w-full h-auto"/>
          <VideoPlayer3 className="w-full h-auto" />
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
